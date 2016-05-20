(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/mitarashi.png", id:"mitarashi_1"}
	]
};



// symbols:



(lib.mitarashi_1 = function() {
	this.initialize(img.mitarashi_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.mitarashi_1();
	this.instance.setTransform(-100,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.anime_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ぷるぷる:0,跳ねる:72});

	// レイヤー 1
	this.instance = new lib.ball();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleY:1.04,skewX:3.8,x:10.4,y:-5},9).to({scaleY:0.98,skewX:-7.6,x:-19.3,y:5},15).to({scaleY:1.03,skewX:-1.9,x:-5.3,y:-5},7).to({scaleY:0.98,skewX:1.9,x:5,y:2.5},8).to({scaleY:1,skewX:0,x:0,y:0},10).wait(24).to({scaleX:1.1,scaleY:0.9,y:15},5).to({scaleX:1.2,scaleY:0.8,y:30},20).to({scaleX:1,scaleY:1,y:0},4).to({scaleX:0.67,scaleY:1.2,y:-440},5).wait(46).to({scaleX:0.9,y:-30},6).to({scaleX:1.31,scaleY:0.67,y:50},5).to({scaleX:0.93,scaleY:1.07,y:-10},9).to({scaleX:1,scaleY:1,y:0},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


// stage content:



(lib.mitarashi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.anime_01();
	this.instance.setTransform(150,190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,240,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;