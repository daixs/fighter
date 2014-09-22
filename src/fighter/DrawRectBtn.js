/**
* Created by lixin on 2014-8-24.
* 画一个按钮，宽，高，前景色，投影色，按钮文字，大小
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DrawRectBtn = (function (_super) {
    __extends(DrawRectBtn, _super);
    function DrawRectBtn(_w, _h, _c0, _c1, _text, _textSize, _textColor) {
        if (typeof _w === "undefined") { _w = 100; }
        if (typeof _h === "undefined") { _h = 30; }
        if (typeof _c0 === "undefined") { _c0 = 0x112233; }
        if (typeof _c1 === "undefined") { _c1 = 0x223344; }
        if (typeof _text === "undefined") { _text = "btn"; }
        if (typeof _textSize === "undefined") { _textSize = 12; }
        if (typeof _textColor === "undefined") { _textColor = 0xffffff; }
        _super.call(this);
        this.btn = new egret.Sprite();
        this.btn = utils.createRectangular(5, 5, _w, _h, 1, _c1);
        this.addChild(this.btn);
        this.btn = utils.createRectangular(0, 0, _w, _h, 1, _c0);
        this.addChild(this.btn);
        this.text = new egret.TextField();
        this.text = utils.createTextLabel(this.text, _textColor, "left", _text, _textSize);
        this.addChild(this.text);
        this.text.x = (this.btn.width - this.text.width) / 2;
        this.text.y = (this.btn.height - this.text.height) / 2;
    }
    DrawRectBtn.prototype.down = function () {
        this.btn.x += 5;
        this.btn.y += 5;
        this.text.x += 5;
        this.text.y += 5;
    };
    DrawRectBtn.prototype.up = function () {
        this.btn.x -= 5;
        this.btn.y -= 5;
        this.text.x -= 5;
        this.text.y -= 5;
    };
    return DrawRectBtn;
})(egret.Sprite);
