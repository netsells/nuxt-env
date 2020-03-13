# Nuxt Env Vars

This module will allow you to update env variables without doing an entire re-build and deploy of your application. This package is a wrapper around [@koumoul/nuxt-config-inject](http://npmjs.com/package/@koumoul/nuxt-config-inject), but based on env vars.

The original package describes the problem:

> [Nuxt](https://fr.nuxtjs.org/) is neat, but it doesn't respect principles that we consider very important. We want to [store config in the environment](https://12factor.net/config), we want to build docker images meant to be used in as many environments as possible without additional build steps.
>
> [This issue](https://github.com/nuxt/nuxt.js/issues/5100) shows that the problem is not easily solved. There are code solutions for parts of the problem: [nuxt-env](https://github.com/samtgarson/nuxt-env), monkey-patching router base, defining `__webpack_public_path__`, etc. But we keep hitting roadblocks, incompatibility with some modules, regressions at upgrades.
>
> This module is an attempt to solve the problem in a more brute force way. At build time a pseudo-config is transformed so that all values contain easily recognizable placeholders. Then at runtime all the files in `.nuxt` and `dist` directories are read and the placeholders are replaced with actual values from current environment. This solution is kinda ugly and it certainly has limitations, but early tests are encouraging.
 
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
        'API_KEY_SECRET', // Example
        // Array of variables to replace 
    ],
});
```

When your application is built, the environment variables supplied will be replaced with placeholders. When your application is started, these variables will be dynamically replaced with your new environment variables.

```sh
yarn build
API_KEY_SECRET=abc123-456xyz yarn start
```
