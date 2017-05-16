# ember-cli-broccoli-file-size

**This addon is currently a WIP. Use at your own discretion**

Ever curious as to what files contribute the most to your ember apps final dist size?

This addon uses the broccoli plugin [broccoli-file-size](https://www.npmjs.com/package/broccoli-file-size) to output file sizes for all the assets in your broccoli tree.

## Installation

* `ember install ember-cli-broccoli-file-size`

## Running

This will output asset sizes on your `ember build` step so long as it is enabled via the config.

#### Configuration 

```js
// ember-cli-build.js
var app = new EmberApp(defaults, { 
 ...
  'ember-cli-broccoli-file-size': {
    enabled: true, // the addon is disabled by default unless this option is set
    broccoliFileSizeOptions: { // Options to be passed to the broccoli file size plugin. Can be found https://www.npmjs.com/package/broccoli-file-size#options
      colors: true, // true by default
      gzipped: true // shows gzipped sizes, true by default
    }
  },
  ...
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
