# Sample Webpack Configuration

This sample Webpack configuration is designed to bundle multiple JavaScript and SCSS files into optimized assets, suitable for a production environment. It includes a range of modern tools and plugins to handle various tasks, such as transpiling JavaScript, extracting CSS, and copying static assets.

## Configuration Overview

### Entry Points

- The `entry` property defines multiple entry points for the JavaScript files in your project. This allows Webpack to create separate bundles for each script, which can be loaded independently on the website.

### Output

- The `output` property specifies where the bundled files will be generated:
  - `path`: Specifies the output directory (`dist`).
  - `filename`: Uses `[name].bundle.js` to name each output file according to its entry point key.

### Loaders

- This configuration uses several loaders to process different types of files:
  - `babel-loader`: Transpiles modern JavaScript (ES6+) and React code into backwards-compatible JavaScript using Babel, configured with `@babel/preset-env` and `@babel/preset-react`.
  - `sass-loader`, `css-loader`, `MiniCssExtractPlugin.loader`: Compiles SCSS into CSS, then extracts it into a separate file. This ensures styles are included in the final build as a standalone `style.css`.

### Plugins

- A few plugins are configured to optimize and manage the output files:
  - `MiniCssExtractPlugin`: Extracts compiled CSS into a separate file (`css/style.css`), which reduces the load time by allowing the CSS to be loaded independently from JavaScript.
  - `CopyWebpackPlugin`: Copies static assets, such as images, from the `src/images/webp` directory to the `dist/images/webp` directory.
  - `TerserPlugin`: Minifies JavaScript files to reduce their size for faster loading times.

### Optimization

- `minimize`: This is set to `true` to enable the minification of the output files.
- `TerserPlugin`: This plugin is specifically used for minifying JavaScript, making the code more efficient and reducing the overall file size.

### Extending the Configuration

- This Webpack configuration can be further extended by adding:
  - Additional loaders: for handling other file types like images, fonts, etc.
  - Plugins: to optimize the build process, automate tasks, or generate additional assets.
  - Dev server: for live reloading during development.

This configuration is ideal for a modular, component-based project where each script handles a specific part of the application, leading to clean, maintainable code.
