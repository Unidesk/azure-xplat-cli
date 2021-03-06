/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var util = require('util');
var utils = require('../../../util/utils');
var insightsUtils = require('./insights.utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
  var insightsDiagnosticCommand = cli.category('insights').category('diagnostic')
    .description($('Configure diagnostics for resources'))
    .command('set')
      .description($('Set the diagnostics for the resource.'))
      .usage('[options]')
      .option('-i, --resourceId <resourceId>', $('resource Id.'))
      .option('-a, --storageId <storageId>', $('storage account Id.'))
      .option('-e, --enabled <enabled>', $('whether the configuration is enabled or disabled.'))
      .option('-c, --categories <categories>', $('categories to be affected. Valid values vary per resource type.'))
      .option('-t, --timegrains <timegrains>', $('timegrains to be affected in ISO 8601 format. Example: \'PT1M\' for 1 minute.'))
      .execute(function (options, _) {
        insightsDiagnosticCommand._prepareAndExecute(options, _);
      });

  insightsDiagnosticCommand._prepareAndExecute = function (options, _) {
    var client = insightsUtils.createInsightsManagementClient(log, options);
    options.enabled = JSON.parse(options.enabled);
    if (options.categories) {
      options.categories = options.categories.split(',');
    }

    if (options.timegrains) {
      options.timegrains = options.timegrains.split(',');
    }

    this._executeCmd(client, options, _);
  };

  insightsDiagnosticCommand._isEmptyOrSpaces = function (str) {
      return str === null || str.match(/^ *$/) !== null;
  };

  insightsDiagnosticCommand._executeCmd = function (client, options, _) {
    var putParameters = {};
    var getResponse = client.serviceDiagnosticSettingsOperations.get(options.resourceId, _);
    var properties = getResponse.properties;
    var i = 0;
    var j = 0;

    if (options.enabled && 
        this._isEmptyOrSpaces(options.storageId)) {
        throw new Error('StorageId can\'t be null when enabling');
    }

    if (!this._isEmptyOrSpaces(options.storageId)) {
        properties.storageAccountId = options.storageId;
    }
    
    if (!options.categories && !options.timegrains) {
      for (i = 0; i < properties.logs.length; i++) {
        properties.logs[i].enabled = options.enabled;
      }

      for (i = 0; i < properties.metrics.length; i++) {
        properties.metrics[i].enabled = options.enabled;
      }
    }
    else {
      if (options.categories) {
        for (i = 0; i < options.categories.length; i++) {
          var logSettings = null;
          for (j = 0; j < properties.logs.length; j++) {
            if (properties.logs[j].category === options.categories[i]) {
              logSettings = properties.logs[j];
            }
          }

          if (!logSettings) {
              throw new Error(util.format('Log category \'%s\' is not available for \'%s\'', options.categories[i], options.storageId));
          }

          logSettings.enabled = options.enabled;
        }   
      }

      if (options.timegrains) {
        for (i = 0; i < options.timegrains.length; i++) {
          var metricSettings = null;

          for (j = 0; j < properties.metrics.length; j++) {
            if (properties.metrics[j].timeGrain.toIsoString() === options.timegrains[i].toUpperCase()) {
              metricSettings = properties.metrics[j];
            }
          }

          if (!metricSettings) {
              throw new Error(util.format('Metric timegrain \'%s\' is not available for \'%s\'', options.timegrains[i], options.storageId));
          }

          metricSettings.enabled = options.enabled;
        }
      }
    }

    putParameters.properties = properties;

    client.serviceDiagnosticSettingsOperations.put(options.resourceId, putParameters, _);

    insightsUtils.formatOutput(cli, log, options, putParameters.properties);
  };
};
