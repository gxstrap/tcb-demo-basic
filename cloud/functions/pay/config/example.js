const path = require('path');
const fs = require('fs');

module.exports = {
  ENV: 'xxxxxx-xxxxxx', // TCB环境ID
  MCHID: 'xxxxxxxxx',//商户id
  KEY: 'xxxxxx',
  //   CERT_FILE_CONTENT: fs.readFileSync(path.join(__dirname, './apiclient_cert.p12')),
  TIMEOUT: 10000 // 毫秒
};