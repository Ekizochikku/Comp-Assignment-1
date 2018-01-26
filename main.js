var AM = new AssetManager();

function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
};
//Walk
function Gloria_Walk(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 0, 112, 100, 0.2, 8, true);
	this.speed = 150;
	this.ctx = game.ctx;
	Entity.call(this, game, 0, 100);
}

Gloria_Walk.prototype = new Entity();
Gloria_Walk.prototype.constructor = Gloria_Walk;

Gloria_Walk.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Walk.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

//Dash
function Gloria_Dash(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 150, 112, 100, 0.2, 7, true);
	this.speed = 300;
	this.ctx = game.ctx;
	Entity.call(this, game, 0, 200);
}

Gloria_Dash.prototype = new Entity();
Gloria_Dash.prototype.constructor = Gloria_Dash;

Gloria_Dash.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Dash.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
//Flip
function Gloria_Flip(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 300, 112, 100, 0.2, 8, true);
	this.speed = 0;
	this.ctx = game.ctx;
	Entity.call(this, game, 100, 300);
}

Gloria_Flip.prototype = new Entity();
Gloria_Flip.prototype.constructor = Gloria_Flip;

Gloria_Flip.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Flip.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
//Attack 1
function Gloria_Attack1(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 450, 112, 100, 0.2, 8, true);
	this.speed = 0;
	this.ctx = game.ctx;
	Entity.call(this, game, 300, 300);
}

Gloria_Attack1.prototype = new Entity();
Gloria_Attack1.prototype.constructor = Gloria_Attack1;

Gloria_Attack1.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Attack1.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
//Attack 2
function Gloria_Attack2(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 600, 112, 100, 0.2, 5, true);
	this.speed = 0;
	this.ctx = game.ctx;
	Entity.call(this, game, 500, 300);
}

Gloria_Attack2.prototype = new Entity();
Gloria_Attack2.prototype.constructor = Gloria_Attack2;

Gloria_Attack2.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Attack2.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
//Jump
function Gloria_Jump(game, spriteSheet) {
	this.animation = new Animation(spriteSheet, 0, 740, 112, 100, 0.2, 5, true);
	this.speed = 0;
	this.ctx = game.ctx;
	Entity.call(this, game, 700, 300);
}

Gloria_Jump.prototype = new Entity();
Gloria_Jump.prototype.constructor = Gloria_Jump;

Gloria_Jump.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -100;
    Entity.prototype.update.call(this);
}

Gloria_Jump.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


AM.queueDownload("./img/gloriasprites.png");
AM.queueDownload("./img/background.jpg");

AM.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");
	var gameEngine = new GameEngine();
	gameEngine.init(ctx);
	gameEngine.start();
	
	gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background.jpg")));
	gameEngine.addEntity(new Gloria_Walk(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	gameEngine.addEntity(new Gloria_Dash(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	gameEngine.addEntity(new Gloria_Flip(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	gameEngine.addEntity(new Gloria_Attack1(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	gameEngine.addEntity(new Gloria_Attack2(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	gameEngine.addEntity(new Gloria_Jump(gameEngine, AM.getAsset("./img/gloriasprites.png")));
	console.log("Done");
});