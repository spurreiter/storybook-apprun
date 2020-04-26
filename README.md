# storybook-apprun

A small guide to setup [apprun][] with [storybook][]

1. Setup storybook for HTML

    ```bash
    npx -p @storybook/cli sb init --type html
    ```

2. install additional packages

    ```bash
    npm i -D apprun @babel/preset-react
    ```

3. modify _.storybook/main.js_

   <!-- include (.storybook/main.js lang=js) -->
   ```js
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
   ```
   <!-- /include -->

4. add a utility function in stories

    _stories/render.js_

   <!-- include (stories/render.js lang=js) -->
   ```js

    export const render = (Node) => {
      const el = document.createElement('section')
      if (typeof Node === 'function') {
        new Node().start(el)
      } else {
        app.render(el, Node)
      }
      return el
    }
   ```
   <!-- /include -->

5. test your apprun component

   e.g. _stories/apprun.stories.js_

   <!-- include (stories/apprun.stories.js lang=js) -->
   ```js
    import { apprun, Component } from 'apprun'

    import { render } from './render'

    export default {
      title: 'Demo',
    }

    export const Counter = () => {
      class Counter extends Component {
        state = 0;
        view = state => (
          <div>
            <h1>{state}</h1>
            <button $onclick='-1'>-1</button>
            <button $onclick='+1'>+1</button>
          </div>
        );
        update = {
          '+1': state => state + 1,
          '-1': state => state - 1
        };
      }
      return render(Counter)
    }
   ```
   <!-- /include -->

# License

MIT licensed

[apprun]: https://apprunjs.org
[storybook]: https://storybook.js.org
