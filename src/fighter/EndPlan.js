var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by lixin on 2014-8-24.
*/
var fighter;
(function (fighter) {
    var EndPlan = (function (_super) {
        __extends(EndPlan, _super);
        function EndPlan() {
            _super.call(this);
            this.btnIsbool = 0;
            this.stageWidth = 480;
            this.stageHeight = 640;

            this.endbg = fighter.createBitmapByName("victory_bg");

            this.tap_textfeild = new egret.TextField;
            this.tap_textfeild.width = 400;
            this.tap_textfeild.textColor = 16711680;
            this.tap_textfeild.textAlign = egret.HorizontalAlign.CENTER;
            this.tap_textfeild.text = "\u60a8\u752813\u6b65\u6293\u4f4f\u4e86\u795e\u7ecf\u732b";
            this.tap_textfeild.size = 22;
            this.tap_textfeild.x = 20;
            this.tap_textfeild.y = 150;
            this.rank_textfeild = new egret.TextField;
            this.rank_textfeild.width = 400;
            this.rank_textfeild.textColor = 0x777215;
            this.rank_textfeild.textAlign = egret.HorizontalAlign.CENTER;
            this.rank_textfeild.text = "\u795e\u7ecf\u5168\u56fd\u6392\u540d421\u4f4d";
            this.rank_textfeild.size = 22;
            this.rank_textfeild.strokeColor = 0;
            this.rank_textfeild.stroke = 2;
            this.rank_textfeild.x = 20;
            this.rank_textfeild.y = 190;
            this.beat_textfeild = new egret.TextField;
            this.beat_textfeild.width = 400;
            this.beat_textfeild.textColor = 0x711680;
            this.beat_textfeild.textAlign = egret.HorizontalAlign.CENTER;
            this.beat_textfeild.size = 22;
            this.beat_textfeild.text = "\u51fb\u8d25\u4e86\u7cbe\u795e\u75c5\u966280%\u7684\u7cbe\u795e\u75c5\u60a3\u8005";
            this.beat_textfeild.x = 20;
            this.beat_textfeild.y = 230;
            this.title_textfeild = new egret.TextField;
            this.title_textfeild.width = 400;
            this.title_textfeild.textColor = 0x711680;
            this.title_textfeild.textAlign = egret.HorizontalAlign.CENTER;
            this.title_textfeild.size = 24;
            this.title_textfeild.text = "\u83b7\u5f97\u79f0\u53f7\uff1a\u601d\u7ef4\u5e7f";
            this.title_textfeild.x = 20;
            this.title_textfeild.y = 270;
            this.share_btn = fighter.createBitmapByName("share_btn");
            this.share_btn.x = 10;
            this.share_btn.y = this.endbg.height + 20;

            this.share_btn.touchEnabled = true;

            this.share_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.shareBtn_begin, this);
            this.share_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.shareBtn_end, this);

            // this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doShare, this);
            //this.replay_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rStart_being, this);
            this.replay_btn = fighter.createBitmapByName("replay_btn");
            this.replay_btn.x = 220;
            this.replay_btn.y = this.endbg.height + 20;
            this.replay_btn.touchEnabled = true;
            this.replay_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rStart_being, this);
            this.replay_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.rStartBtn_end, this);

            this.addChild(this.endbg);
            this.addChild(this.tap_textfeild);
            this.addChild(this.rank_textfeild);
            this.addChild(this.beat_textfeild);
            this.addChild(this.title_textfeild);
            this.addChild(this.share_btn);
            this.addChild(this.replay_btn);
            //  this.sharPlan.addChild(text);
        }
        EndPlan.prototype.rStartBtn_end = function (e) {
            //this.dispatchEvent(new egret.Event("click_rStart", false, false));
            this.parent.dispatchEvent(new egret.Event("click_rStart", false, false));
        };
        EndPlan.prototype.shareBtn_end = function (e) {
            dp_share(1, 3);
            //  this.addChild(this.sharPlan);
            //   this.sharPlan.touchEnabled=true;
            //  this.sharPlan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sharBtnClick,this);
        };
        EndPlan.prototype.sharBtnClick = function (e) {
            // this.removeChild(this.sharPlan);
        };

        EndPlan.prototype.rStart_being = function (e) {
            //  this.rStartBtn.down();
            this.btnIsbool = -1;
        };
        EndPlan.prototype.shareBtn_begin = function (e) {
            //this.shareBtn.down(); this.btnIsbool = 1
        };

        EndPlan.prototype.onPlanEnd = function (e) {
            if (this.btnIsbool == 1) {
                // this.shareBtn.up();
            } else if (this.btnIsbool == -1) {
                // this.rStartBtn.up();
            }
            this.btnIsbool = 0;
        };
        EndPlan.prototype.showScore = function (a) {
            var msg = "您飞行了" + a + "km千米";
            var num = Math.floor(25 * a + Math.random() * a * 5);
            var score = 70 + num / 100;
            if (score > 100)
                score = 99.8;

            num = 3000 - num;
            if (num < 0)
                num = Math.floor(Math.random() * a);
            this.tap_textfeild.text = msg; //"\u60a8\u7528" + a + "\u6b65\u6293\u4f4f\u4e86\u795e\u7ecf\u732b";
            this.rank_textfeild.text = "全国排名" + num + "位";
            this.beat_textfeild.text = "超越了" + score + "%的飞行者！";

            //  a = 11 > a ? this.titles_arr[a] : this.titles2_arr[Math.floor(Math.random() * this.titles2_arr.length)];
            this.title_textfeild.text = "欢迎乘坐天航飞行！";
            // "\u83b7\u5f97\u79f0\u53f7\uff1a" + a
            // this.txt.text = msg;
        };
        return EndPlan;
    })(egret.Sprite);
    fighter.EndPlan = EndPlan;
})(fighter || (fighter = {}));
