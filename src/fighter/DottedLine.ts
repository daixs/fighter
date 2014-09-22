
/**
 * Created by lixin on 2014-8-23.
 * 画一条 指定宽度 高度 分段数 的虚线  需要GameUtil类的支持
 */
 
    class DottedLine extends egret.Sprite {
        // 宽度 高度 分段 颜色1 颜色2
        public constructor(_w: number= 400, _h: number= 2, _p: number= 20, _c0: number= 0xffffff, _c1: number= 0x000000) {
            super();
            var _p_width: number = _w / _p;//每段宽度
            var _p_x: number = 0;//当前段位的x坐标
            var sprite: egret.Sprite = new egret.Sprite();
            for (var i: number = 1; i <= _p; i++) {
                if (i == 1 || i % 2 == 0 || i == _p) {
                    sprite = utils.createRectangular(0, 0, _p_width, _h, 1, _c0);
                    this.addChild(sprite);
                    sprite.x = (i - 1) * _p_width;
                    sprite.y = 0;
                }
                else {
                    sprite = utils.createRectangular(0, 0, _p_width, _h, 1, _c1);
                    this.addChild(sprite);
                    sprite.x = (i - 1) * _p_width;
                    sprite.y = 0;
                }

            }

        }

    }
 