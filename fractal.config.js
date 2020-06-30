'use strict';

const path = require('path');

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create());

/* Set the title of the project */
fractal.set('project.title', 'Fractal TP');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/styles/components');

/* Make assets files accessible from fractal */
fractal.web.set('static.path', path.join(__dirname, 'dist'));
