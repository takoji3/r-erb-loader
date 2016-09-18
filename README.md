# ERB Loader

`.erb` loader for [webpack](https://webpack.github.io/) without using rails. This uses only standard erb module.

## Install

`npm install r-erb-loader`

## Example

```webpack.config.js
module: {
  loaders: [
    { test: /\.css.erb$/, loader: 'style!css!r-erb' }
  ]
}
```
