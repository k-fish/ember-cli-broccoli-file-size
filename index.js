/* eslint-env node */
'use strict';

const BroccoliFileSize = require('broccoli-file-size');
const merge = require('merge');

module.exports = {
  name: 'ember-cli-broccoli-file-size',

  included(app) {
    this._super.included.apply(this, arguments)

    const env = process.env.EMBER_ENV

    this.options = merge.recursive({}, this._getAddonOptions(app)["ember-cli-broccoli-file-size"]);

    if (this.options.enabled) {
      this.ui.writeLine("ember-cli-broccoli-file-size enabled.");
    }
  },

  _getAddonOptions(app) {
    return (this.parent && this.parent.options) || (app && app.options) || {}
  },

  postprocessTree(type, tree) {
    if (!this.options.enabled) {
      return;
    }

    const outTree = new BroccoliFileSize(tree, this.options.broccoliFileSizeOptions);
    return outTree;
  }
};
