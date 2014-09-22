/**
 * Created by lixin on 2014-8-24.
 * 画一个按钮，宽，高，前景色，投影色，按钮文字，大小
 */
 
    class DrawRectBtn extends egret.Sprite {
        private btn: egret.Sprite = new egret.Sprite();
        private text: egret.TextField;
        public constructor(_w: number= 100, _h: number= 30, _c0: number= 0x112233, _c1: number= 0x223344, _text: string= "btn", _textSize: number= 12, _textColor: number= 0xffffff) {
            super();
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
        public down() {
            this.btn.x += 5;
            this.btn.y += 5;
            this.text.x += 5;
            this.text.y += 5;

        }
        public up() {
            this.btn.x -= 5;
            this.btn.y -= 5;
            this.text.x -= 5;
            this.text.y -= 5;
        }
    }
 