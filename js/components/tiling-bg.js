'use strict';
var PIXI = require('pixi.js/bin/pixi.dev.js');

module.exports = function () {
    var texture = PIXI.Texture.fromImage('images/grid.png');
    var tilingSprite = new PIXI.TilingSprite(texture, window.innerWidth, window.innerHeight);
    tilingSprite.alpha = 0.5;
    return tilingSprite;
};
