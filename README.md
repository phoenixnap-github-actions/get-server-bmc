# bmc-createserver-github-action

This action retrieves basic information about a server in the PhoenixNAP Bare Metal Cloud platform and makes that information available as Action outputs. The action is synchronous.

## Required inputs

- `clientid`: 'Client ID from application OAuth2 credentials.
- `clientsecret`: Client Secret from application OAuth2 credentials.
- `serverid`: The ID for the server to lookup.

## Optional inputs

- `bmcentrypoint` The BMC API entrypoint. Defaults to `https://api.phoenixnap.com/bmc/v1/`.
- `bmctokenhost`: The BMC OIDC token host. Defaults to `https://auth.phoenixnap.com`.
- `bmctokenpath`: The BMC OIDC token path. Defaults to `/auth/realms/BMC/protocol/openid-connect/token`.

### Outputs

- `id`: The BMC server ID.
- `status`: The server operational status.
- `hostname`: The server hostname.
- `ipaddresses`: A comma separated list of public IP address attached to the server.

## Secrets the action uses

This action exercises a PhoenixNAP BMC API and requires valid client credentials. Follow steps 1 and 2 of the [PhoenixNAP developers quickstart guide](https://developers.phoenixnap.com/quick-start) to create a `client_id` and `client_secret`. You should store those credentials as GitHub Secrets and use them in the `clientid` and `clientsecret` required inputs. See the following example.

## An example of how to use your action in a workflow

```yaml
- name: GetServer step
  uses: phoenixnap/bmc-getserver-github-action 
  id: getserver
  with:
    clientid: ${{secrets.BMC_CLIENT_ID}}
    clientsecret: ${{secrets.BMC_CLIENT_SECRET}}
    serverid: ${{ steps.createserver.outputs.id }}
```
