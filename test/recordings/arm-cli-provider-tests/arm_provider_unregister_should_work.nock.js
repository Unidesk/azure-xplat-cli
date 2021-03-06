// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService/unregister?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3de01769-b204-4e14-9e16-23b6c6b91d96',
  'x-ms-correlation-request-id': '3de01769-b204-4e14-9e16-23b6c6b91d96',
  'x-ms-routing-request-id': 'WESTUS:20151021T061007Z:3de01769-b204-4e14-9e16-23b6c6b91d96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:07 GMT',
  connection: 'close',
  'content-length': '1684' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService/unregister?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3de01769-b204-4e14-9e16-23b6c6b91d96',
  'x-ms-correlation-request-id': '3de01769-b204-4e14-9e16-23b6c6b91d96',
  'x-ms-routing-request-id': 'WESTUS:20151021T061007Z:3de01769-b204-4e14-9e16-23b6c6b91d96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:07 GMT',
  connection: 'close',
  'content-length': '1684' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'x-ms-correlation-request-id': 'bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'x-ms-routing-request-id': 'WESTUS:20151021T061008Z:bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:07 GMT',
  connection: 'close',
  'content-length': '1684' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'x-ms-correlation-request-id': 'bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'x-ms-routing-request-id': 'WESTUS:20151021T061008Z:bca09ad1-13c2-4ec1-b821-e7ed65742fc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:07 GMT',
  connection: 'close',
  'content-length': '1684' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'x-ms-correlation-request-id': '00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'x-ms-routing-request-id': 'WESTUS:20151021T061017Z:00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:17 GMT',
  connection: 'close',
  'content-length': '1683' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'x-ms-correlation-request-id': '00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'x-ms-routing-request-id': 'WESTUS:20151021T061017Z:00e6d019-dd9e-4bb6-b8b9-337b58177159',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:17 GMT',
  connection: 'close',
  'content-length': '1683' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'c9331853-5f5f-403a-a555-1fc2754c8237',
  'x-ms-correlation-request-id': 'c9331853-5f5f-403a-a555-1fc2754c8237',
  'x-ms-routing-request-id': 'WESTUS:20151021T061018Z:c9331853-5f5f-403a-a555-1fc2754c8237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:17 GMT',
  connection: 'close',
  'content-length': '1683' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"authorization\":{\"applicationId\":\"dee7ba80-6a55-4f3b-a86c-746a9231ae49\",\"roleDefinitionId\":\"6715d172-49c4-46f6-bb21-60512a8689dc\"},\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\",\"West India\",\"South India\",\"Central India\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-beta\",\"2015-03-01-alpha\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'c9331853-5f5f-403a-a555-1fc2754c8237',
  'x-ms-correlation-request-id': 'c9331853-5f5f-403a-a555-1fc2754c8237',
  'x-ms-routing-request-id': 'WESTUS:20151021T061018Z:c9331853-5f5f-403a-a555-1fc2754c8237',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 21 Oct 2015 06:10:17 GMT',
  connection: 'close',
  'content-length': '1683' });
 return result; }]];