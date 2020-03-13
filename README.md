# Nuxt Env Vars

This module will allow you to update env variables without doing an entire re-build and deploy of your application. This package is a wrapper around [@koumoul/nuxt-config-inject](http://npmjs.com/package/@koumoul/nuxt-config-inject), but based on env vars.
 
 This is mostly for our specific use case within docker, you may be perfectly fine using the original package.
 
 ## Usage
 
 ```sh
yarn add @netsells/nuxt-env 
```

At the top of your nuxt config add the following lines:

```js
const envVars = require('@netsells/nuxt-env');

envVars({
    vars: [
        'API_KEY_SECRET' // Example
        // Array of variables to replace 
    ],
});
```

When your application is built, the environment variables supplied will be replaced with placeholders. When your application is started, these variables will be dynamically replaced with your new environment variables.

```sh
API_KEY_SECRET=abc123-456xyz yarn start
```
