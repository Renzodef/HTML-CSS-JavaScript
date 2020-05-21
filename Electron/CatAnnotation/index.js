// Importing the required modules
var image = require('lightning-image-poly');
var picture = require('cat-picture');
var src = picture.src;

// Remove the default cat picture.
picture.remove();

// Create the polygon editor, with the image.
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});