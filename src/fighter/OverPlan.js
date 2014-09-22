var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by lixin on 2014-8-24.
*/
var OverPlan = (function (_super) {
    __extends(OverPlan, _super);
    function OverPlan() {
        _super.call(this);
        this.sprite = new egret.Sprite();
        this.btnIsbool = 0;
        this.stageWidth = 480;
        this.stageHeight = 640;
        this.sprite = utils.createRectangular(0, 0, this.stageWidth, this.stageHeight, .3, 0x000000);
        this.addChild(this.sprite);
        this.sprite = utils.createRectangular(5, 5, 340, 240, .4, 0x000000);
        this.sprite.x = (this.stageWidth - this.sprite.width) / 2;
        this.sprite.y = (this.stageHeight - this.sprite.height) / 2;
        this.addChild(this.sprite);
        this.sprite = utils.createRectangular(0, 0, 340, 240, 1, 0xe42692);
        this.addChild(this.sprite);
        this.sprite.x = (this.stageWidth - this.sprite.width) / 2;
        this.sprite.y = (this.stageHeight - this.sprite.height) / 2;
        var text = new egret.TextField();
        text = utils.createTextLabel(text, 0xfa5cb6, "left", "GAME OVER", 40);
        this.addChild(text);
        text.y = this.sprite.y + 20;
        text.x = this.sprite.x + 20;
        var line = new DottedLine(340, 4, 15, 0xfa5cb6, 0xe42692);
        this.addChild(line);
        line.y = text.y + text.height;
        line.x = this.sprite.x;
        var str = ("SCORE:0").toString();

        this.txt = utils.createTextLabel(this.txt, 0xffffff, "left", str, 24);
        this.txt.x = this.sprite.x + 10;
        this.txt.y = line.y + line.height + 30;
        this.addChild(this.txt);
        this.rStartBtn = new DrawRectBtn(120, 50, 0xffffff, 0x9e1b65, "Again", 20, 0x700944);
        this.addChild(this.rStartBtn);
        this.rStartBtn.x = this.sprite.x + 30;

        // this.rStartBtn.x=120;
        //    this.rStartBtn.y=this.sprite.y;
        this.rStartBtn.y = this.sprite.y + this.sprite.height - this.rStartBtn.height - 20;
        this.shareBtn = new DrawRectBtn(120, 50, 0xffffff, 0x9e1b65, "Share", 20, 0x700944);
        this.addChild(this.shareBtn);
        this.shareBtn.x = this.sprite.x + this.sprite.width - this.rStartBtn.width - 30;
        this.shareBtn.y = this.rStartBtn.y;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onPlanEnd, this);
        this.rStartBtn.touchEnabled = true;
        this.shareBtn.touchEnabled = true;
        this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rStart_being, this);
        this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.rStartBtn_end, this);
        this.shareBtn.touchEnabled = true;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.shareBtn_begin, this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.shareBtn_end, this);
        this.sharPlan = new egret.Sprite();
        this.sharPlan = utils.createRectangular(0, 0, this.stageWidth, this.stageHeight, .3, 0x000000);
        text = utils.createTextLabel(text, 0xffffff, "left", "点击右上角的按钮\n选择分享到朋友圈", 26);
        text.x = (480 - text.width) / 2;
        text.y = (640 - text.height) / 2;
        this.sharPlan.addChild(text);
    }
    OverPlan.prototype.rStartBtn_end = function (e) {
        this.dispatchEvent(new egret.Event("click_rStart", false, false));
    };
    OverPlan.prototype.shareBtn_end = function (e) {
        this.addChild(this.sharPlan);
        this.sharPlan.touchEnabled = true;
        this.sharPlan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sharBtnClick, this);
    };
    OverPlan.prototype.sharBtnClick = function (e) {
        this.removeChild(this.sharPlan);
    };

    OverPlan.prototype.rStart_being = function (e) {
        this.rStartBtn.down();
        this.btnIsbool = -1;
    };
    OverPlan.prototype.shareBtn_begin = function (e) {
        this.shareBtn.down();
        this.btnIsbool = 1;
    };

    OverPlan.prototype.onPlanEnd = function (e) {
        if (this.btnIsbool == 1) {
            this.shareBtn.up();
        } else if (this.btnIsbool == -1) {
            this.rStartBtn.up();
        }
        this.btnIsbool = 0;
    };
    OverPlan.prototype.showScore = function (value) {
        var msg = "您的成绩是:\n" + value + "\n再来一次吧";
        this.txt.text = msg;
    };
    return OverPlan;
})(egret.Sprite);
