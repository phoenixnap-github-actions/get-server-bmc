const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');
const { ClientCredentials } = require('simple-oauth2');

async function run() {
  const clientID     = core.getInput('clientid');
  const clientSecret = core.getInput('clientsecret');

  if (!clientID || 0 === clientID.length) {
    return core.setFailed(`Required input "clientid" is unset.`);
  }
  if (!clientSecret || 0 === clientSecret.length) {
    return core.setFailed(`Required input "clientsecret" is unset.`)
  }

  const serverID = core.getInput('serverid');

  if (!serverID || 0 === serverID.length) {
    return core.setFailed(`Required input "hostname" is unset.`)
  }

  const bmcEntrypoint = core.getInput('bmcentrypoint');
  const bmcTokenHost  = core.getInput('bmctokenhost');
  const bmcTokenPath  = core.getInput('bmctokenpath');

  if (!bmcEntrypoint || 0 === bmcEntrypoint.length) {
    return core.setFailed(`Required input "bmcentrypoint" is unset.`)
  }
  if (!bmcTokenHost || 0 === bmcTokenHost.length) {
    return core.setFailed(`Required input "bmctokenhost" is unset.`)
  }
  if (!bmcTokenPath || 0 === bmcTokenPath.length) {
    return core.setFailed(`Required input "bmctokenpath" is unset.`)
  }

  try {
    const client = new ClientCredentials({
      client: { id: clientID, secret: clientSecret },
      auth: { tokenHost: bmcTokenHost, tokenPath: bmcTokenPath },
      options: { bodyFormat: "form" }
    });
    const accessToken = await client.getToken();

    const response = await axios({
      method: 'get',
      baseURL: bmcEntrypoint,
      url: `/servers/${serverID}`,
      headers: { 
        'Authorization': `Bearer ${accessToken.token.access_token}`,
        'Content-Type': 'application/json'
      }
    });

    core.setOutput('id', response.data.id);
    core.setOutput('status', response.data.status);
    core.setOutput('hostname', response.data.hostname);
    core.setOutput('ipaddresses', response.data.publicIpAddresses.join(','))
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
