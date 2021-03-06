// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4fbe2810-8ec4-4443-88f4-1d0a6a212d02',
    name: 'Pay-As-You-Go',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'dab60df3-eb31-470e-9aa7-0bb580c2624c',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_VAULT'] = 'XplatTestVaultMSTest';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01', '*')
  .reply(200, "{\"value\":\"Chocolate_is_hidden_in_toothpaste_cabinet\",\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a235c128-d4ed-46f0-aeec-e83b3893e020',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:08 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01', '*')
  .reply(200, "{\"value\":\"Chocolate_is_hidden_in_toothpaste_cabinet\",\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a235c128-d4ed-46f0-aeec-e83b3893e020',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:08 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(200, "{\"value\":\"Chocolate_is_hidden_in_toothpaste_cabinet\",\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'db477e43-e534-48fe-b068-d2b7f09bd784',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:09 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(200, "{\"value\":\"Chocolate_is_hidden_in_toothpaste_cabinet\",\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'db477e43-e534-48fe-b068-d2b7f09bd784',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:09 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '37472010-2162-4d8f-9e9c-e8069b288823',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:10 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '37472010-2162-4d8f-9e9c-e8069b288823',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:10 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767/versions?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'd0b37931-d1ab-40c3-84a2-841c00ce484d',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:11 GMT',
  connection: 'close',
  'content-length': '219' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767/versions?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'd0b37931-d1ab-40c3-84a2-841c00ce484d',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:11 GMT',
  connection: 'close',
  'content-length': '219' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .delete('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(200, "{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3d73064c-030a-40ab-9a67-bc06a9f36f58',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:12 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .delete('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(200, "{\"id\":\"https://xplattestvaultmstest.vault.azure.net/secrets/xplatTestVaultSecret9767/70832f0ed48e4d0fb822c945fee53304\",\"attributes\":{\"enabled\":true,\"created\":1445976728,\"updated\":1445976728}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3d73064c-030a-40ab-9a67-bc06a9f36f58',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:12 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"SecretNotFound\",\"message\":\"Secret not found: xplatTestVaultSecret9767\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '90',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '714a7f9b-8032-44d1-a5a2-30a3ce2b3f6f',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/secrets/xplatTestVaultSecret9767?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"SecretNotFound\",\"message\":\"Secret not found: xplatTestVaultSecret9767\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '90',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '714a7f9b-8032-44d1-a5a2-30a3ce2b3f6f',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:12 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestVaultSecret9767'];};