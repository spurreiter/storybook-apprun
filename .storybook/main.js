const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {

    for (let rule of config.module.rules) {
      if (rule.use && rule.use[0].loader === 'babel-loader') {
        rule.use[0].options.presets.push('@babel/preset-react')
      }
    }

    return config;
  },
};
