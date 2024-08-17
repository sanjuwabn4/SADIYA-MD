const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XZJ3xRAL#v3tHgP-hgDqQb7OfQSCo_U6CEGqm83rX3E3KZ_y1Pjo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/3cef367ebfc7a45c10595.jpg"
};
