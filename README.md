README
======

This README describes the simplest way to start a webpack build of ReactJS.

* npm init
* npm install webpack -g
* npm install --save-dev babel babel-core babel-preset-react babel-loader
* npm install --save-dev react react-dom
* vi webpack.config.js
```
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel",
              query: { presets:['react'] }
            }
        ]
    }
};
```

* vi main.js
```
var React = require('react');
var ReactDOM = require('react-dom');
var StorePicker = React.createClass({
        render : function() {
                return (
                        <p><b>Hello this is inside StorePicker.render</b></p>
                )
        }
});
ReactDOM.render( <StorePicker/>, document.querySelector('#main'));
```

* vi index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
    <div id="main">
      <!-- This is where our React app will go -->
    </div>
    <script src="bundle.js"></script>
</body>
</html>
```

* webpack
* open index.html in a browser
