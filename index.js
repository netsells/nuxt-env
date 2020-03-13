module.exports = ({ vars = [] }) => {
    if (process.env.NODE_ENV !== 'production') {
        return process.env;
    }

    let config = Object.entries(process.env)
        .filter(([key]) => vars.includes(key))
        .reduce((config, [key, val]) => ({
            ...config,
            [key]: val,
        }), {});

    const nuxtConfigInject = require('@koumoul/nuxt-config-inject');

    if (process.argv.slice(-1)[0] === 'nuxtbuild') {
        config = nuxtConfigInject.prepare(config);
    } else {
        config = nuxtConfigInject.replace(config);
    }

    process.env = {
        ...process.env,
        ...config,
    };

    return process.env;
};
