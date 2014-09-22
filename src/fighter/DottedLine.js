/**
* Created by lixin on 2014-8-23.
* 画一条 指定宽度 高度 分段数 的虚线  需要GameUtil类的支持
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DottedLine = (function (_super) {
    __extends(DottedLine, _super);
    // 宽度 高度 分段 颜色1 颜色2
    function DottedLine(_w, _h, _p, _c0, _c1) {
        if (typeof _w === "undefined") { _w = 400; }
        if (typeof _h === "undefined") { _h = 2; }
        if (typeof _p === "undefined") { _p = 20; }
        if (typeof _c0 === "undefined") { _c0 = 0xffffff; }
        if (typeof _c1 === "undefined") { _c1 = 0x000000; }
        _super.call(this);
        var _p_width = _w / _p;
        var _p_x = 0;
        var sprite = new egret.Sprite();
        for (var i = 1; i <= _p; i++) {
            if (i == 1 || i % 2 == 0 || i == _p) {
                sprite = utils.createRectangular(0, 0, _p_width, _h, 1, _c0);
                this.addChild(sprite);
                sprite.x = (i - 1) * _p_width;
                sprite.y = 0;
            } else {
                sprite = utils.createRectangular(0, 0, _p_width, _h, 1, _c1);
                this.addChild(sprite);
                sprite.x = (i - 1) * _p_width;
                sprite.y = 0;
            }
        }
    }
    return DottedLine;
})(egret.Sprite);
