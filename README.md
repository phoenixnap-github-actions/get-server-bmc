<h1 align="center">
  <br>
  <a href="https://phoenixnap.com/bare-metal-cloud"><img src="https://user-images.githubusercontent.com/78744488/109779287-16da8600-7c06-11eb-81a1-97bf44983d33.png" alt="phoenixnap Bare Metal Cloud" width="300"></a>
  <br>
  GetServer GitHub Action
  <br>
</h1>

<p align="center">
GitHub action for retrieving basic information about a <a href="https://phoenixnap.com/bare-metal-cloud">Bare Metal Cloud</a> server and making that information available as Action outputs. The action is synchronous.
</p>

<p align="center">
  <a href="https://phoenixnap.com/bare-metal-cloud">Bare Metal Cloud</a> •
  <a href="https://developers.phoenixnap.com/">Developers Portal</a> •
  <a href="http://phoenixnap.com/kb">Knowledge Base</a> •
  <a href="https://developers.phoenixnap.com/support">Support</a>
</p>

## Requirements

- [Bare Metal Cloud (BMC)](https://bmc.phoenixnap.com) account

## Creating a Bare Metal Cloud account

1. Go to the [Bare Metal Cloud signup page](https://support.phoenixnap.com/wap-jpost3/bmcSignup).
2. Follow the prompts to set up your account.
3. Use your credentials to [log in to Bare Metal Cloud portal](https://bmc.phoenixnap.com).

:arrow_forward: **Video tutorial:** [How to Create a Bare Metal Cloud Account](https://www.youtube.com/watch?v=RLRQOisEB-k)
<br>

:arrow_forward: **Video tutorial:** [Introduction to Bare Metal Cloud](https://www.youtube.com/watch?v=8TLsqgLDMN4)

## Required inputs

- `clientid`: Client ID from application OAuth2 credentials.
- `clientsecret`: Client Secret from application OAuth2 credentials.
- `serverid`: The ID for the server to lookup.

## Optional inputs

- `bmcentrypoint`: The BMC API entrypoint. Defaults to `https://api.phoenixnap.com/bmc/v1/`.
- `bmctokenhost`: The BMC OIDC token host. Defaults to `https://auth.phoenixnap.com`.
- `bmctokenpath`: The BMC OIDC token path. Defaults to `/auth/realms/BMC/protocol/openid-connect/token`.

## Outputs

- `id`: The BMC server ID.
- `status`: The server operational status.
- `hostname`: The server hostname.
- `ipaddresses`: A comma-separated list of public IP address attached to the server.

## Secrets the action uses

Follow these steps to get the values for the `clientid` and `clientsecret`:

1. [Log in to the Bare Metal Cloud portal](https://bmc.phoenixnap.com).
2. On the left side menu, click on API Credentials.
3. Click the Create Credentials button.
4. Fill in the Name and Description fields, select the permissions scope and click Create.
5. In the table, click on Actions and select View Credentials from the dropdown to view the Client ID and Client Secret.

You should store those credentials as GitHub Secrets and use them in the `clientid` and `clientsecret` required inputs.

Bare Metal Cloud Quick Start Guide: [https://developers.phoenixnap.com/quick-start](https://developers.phoenixnap.com/quick-start)

## Example usage

```yaml
- name: GetServer step
  uses: phoenixnap-github-actions/get-server-bmc 
  id: getserver
  with:
    clientid: ${{secrets.BMC_CLIENT_ID}}
    clientsecret: ${{secrets.BMC_CLIENT_SECRET}}
    serverid: ${{ steps.createserver.outputs.id }}
```
## Bare Metal Cloud community

Become part of the Bare Metal Cloud community to get updates on new features, help us improve the platform, and engage with developers and other users.

- Follow [@phoenixNAP on Twitter](https://twitter.com/phoenixnap)
- Join the [official Slack channel](https://phoenixnap.slack.com)
- Sign up for our [Developers Monthly newsletter](https://phoenixnap.com/developers-monthly-newsletter)

### Resources

- [Product page](https://phoenixnap.com/bare-metal-cloud)
- [Instance pricing](https://phoenixnap.com/bare-metal-cloud/instances)
- [YouTube tutorials](https://www.youtube.com/watch?v=8TLsqgLDMN4&list=PLWcrQnFWd54WwkHM0oPpR1BrAhxlsy1Rc&ab_channel=PhoenixNAPGlobalITServices)
- [Developers Portal](https://developers.phoenixnap.com)
- [Knowledge Base](https://phoenixnap.com/kb)
- [Blog](https:/phoenixnap.com/blog)

### Documentation

- [API documentation](https://developers.phoenixnap.com/docs/bmc/1/overview)

### Contact phoenixNAP

Get in touch with us if you have questions or need help with Bare Metal Cloud.

<p align="left">
  <a href="https://twitter.com/phoenixNAP">Twitter</a> •
  <a href="https://www.facebook.com/phoenixnap">Facebook</a> •
  <a href="https://www.linkedin.com/company/phoenix-nap">LinkedIn</a> •
  <a href="https://www.instagram.com/phoenixnap">Instagram</a> •
  <a href="https://www.youtube.com/user/PhoenixNAPdatacenter">YouTube</a> •
  <a href="https://developers.phoenixnap.com/support">Email</a> 
</p>

<p align="center">
  <br>
  <a href="https://phoenixnap.com/bare-metal-cloud"><img src="https://user-images.githubusercontent.com/78744488/109779474-47222480-7c06-11eb-8ed6-91e28af3a79c.jpg" alt="phoenixnap Bare Metal Cloud"></a>
</p>
