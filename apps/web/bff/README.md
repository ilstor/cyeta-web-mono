# BFF — DigitalOcean Functions backend

The backend-for-frontend is a **DigitalOcean Functions** (serverless / OpenWhisk)
app. It currently exposes one web function, `cyeta/send`, used by the contact form.

Live endpoint (used by `http/send.http`):
`POST https://cyeta-web-g2aax.ondigitalocean.app/api/cyeta/send`
with a JSON body, e.g. `{"name": "dest"}` → `{"body": "Hello awesome dest!"}`.

## Contents of this directory

| Path | Purpose |
|---|---|
| `packages/cyeta/send/entry.js` | Function source — exports `main(args)`, returns `{ body }` |
| `http/send.http` | REST-client example request against the live URL |
| `project.yml` | DO Functions manifest — required by `doctl` to deploy |
| `do.key` | DO Functions auth token (`dop_v1_…`) — **secret, committed here; rotate if it leaked** |

This directory is self-contained and deployable as-is (`doctl serverless deploy .`).
The original working copy also lives in the sibling repo `cyeta-bff`.

## Recreating the app from scratch

Prerequisites:

- [`doctl`](https://docs.digitalocean.com/reference/doctl/) installed and logged
  in with a DigitalOcean account token: `doctl auth init` (needed to create a
  Functions namespace). `doctl serverless` support installs automatically on
  first use.
- The Functions auth token in `do.key` (a `dop_v1_…` DO personal access token)
  is used to target the namespace: `doctl serverless use --token "$(cat do.key)"`.

1. Scaffold the project (or copy this directory):

   ```bash
   mkdir cyeta-bff && cd cyeta-bff
   mkdir -p packages/cyeta/send
   ```

   `packages/cyeta/send/entry.js` (this is the entire function source, same as
   the file in this repo):

   ```javascript
   function main(args) {
       let name = args.name || 'stranger'
       let greeting = 'Hello awesome ' + name + '!'
       console.log(greeting)
       return {"body": greeting}
   }
   ```

2. Create `project.yml` in the project root:

   ```yaml
   parameters: {}
   environment: {}
   packages:
       - name: cyeta
         shared: false
         environment: {}
         parameters: {}
         annotations: {}
         functions:
             - name: send
               binary: false
               main: ""
               runtime: nodejs:default
               web: true
               webSecure: false
               parameters: {}
               environment: {}
               annotations: {}
               limits: {}
   ```

3. Create the namespace (region `syd1` in the original setup):

   ```bash
   doctl serverless namespaces create --label "cyeta" --region "syd1"
   ```

4. Point the CLI at the namespace, then deploy (this writes local `.deployed/`
   state tracking versions):

   ```bash
   doctl serverless use --token "$(cat do.key)"
   doctl serverless deploy .
   ```

5. Test / get the web function URL:

   ```bash
   doctl serverless functions invoke cyeta/send -p name:test
   doctl serverless functions get cyeta/send --url
   ```

   The bare web URL looks like
   `https://faas-<region>-<hash>.doserverless.co/api/v1/web/fn-<namespace>/cyeta/send`
   (callable with `curl -d '{"name":"test"}' -H 'Content-Type: application/json'`).
   The `…ondigitalocean.app/api/cyeta/send` URL used by the site is the
   App Platform-hosted route to the same function, so after recreating the
   function, point the site at the new URL (it is referenced in `http/send.http`
   and any contact-form wiring).

## Original deployment details (from the `cyeta-bff` working copy)

- API host: `https://faas-syd1-c274eac6.doserverless.co`
- Namespace: `fn-994f4278-45d5-43b7-8fe1-a8bffe99ec36`
- Package `cyeta` version at last deploy: `0.0.11`
