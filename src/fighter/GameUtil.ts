/**
 * Created by lixin on 2014-8-1.
 *  Created by shaorui on 14-6-6.
 */
module utils
{
    export class GameUtil
    {
        /**基于矩形的碰撞检测*/
        public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
        {
            var rect1:egret.Rectangle = obj1.getBounds();
            var rect2:egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.x + 10 ;
            rect1.width = rect1.width - 20;
            rect1.y = obj1.y + 10;
            rect1.height = rect1.height - 20;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        }

    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /*创建一个 矩形*/
    export function  createRectangular(_x:number=0,_y:number=0,_w:number=480,_h:number=640,_alpha:number=1,_color:number=0x000000):egret.Sprite
    {
        var sprite1:egret.Sprite = new egret.Sprite();  //与Flash一样，alpha默认值为1
        sprite1.graphics.beginFill(_color,_alpha);                        sprite1.graphics.drawRect(_x,_y,_w,_h);
        sprite1.graphics.endFill();
        sprite1.width=_w;          sprite1.height=_h;
        return sprite1;
    }
    /*画一个圆*/
    export function  createCircle(_x:number=0,_y:number=0,_r:number=10,_alpha:number=1,_clolr:number=0xffffff):egret.Sprite
    {
        var sprite1:egret.Sprite=new egret.Sprite();
        sprite1.graphics.beginFill(_clolr,_alpha);                       sprite1.graphics.drawCircle(_x,_y,_r);
        sprite1.graphics.endFill();

        return sprite1;
    }
    /*
    创建一个文本框：颜色，对齐方式（left,center,right)内容，文字大小，文本宽度（如果有定义则会进行换行）
    描边颜色（0则是无)描边尺寸(0则是无)x y 旋转角度 斜切
    */
   export function  createTextLabel(label1:egret.TextField,_color:number=0x000000,_algin:string="left", _text:string="none",_size:number=14,_width:number=0,
                                    _strokeColor:number=0, _stroke:number=0,_x:number=0, _y:number=0,_rotaion:number=0,_skewX:number=0 ):egret.TextField
   {
       label1 = new egret.TextField();//创建TextField实例
       label1.textColor=_color;            label1.textAlign=_algin;
       label1.text=_text;                   label1.size=_size;
       if(_width!=0){label1.width=_width;};
       if(_strokeColor!=0&&_stroke!=0){label1.strokeColor=_strokeColor;label1.stroke=_stroke;};//描边和描边颜色必须同时存在才进行描边
       label1.rotation=_rotaion;           if(_skewX!=0){label1.skewX=_skewX;};
       label1.x=_x;                         label1.y=_y;
       return label1;
   }
    /*返回一个 _s-_e的随即整数
     */
    export function randomInt(_s:number,_e:number):number {
        if(_e-_s<=0)return 0;
        var l:number=_e-_s;
        var r:number=Math.floor(Math.random()*l)+_s;
        return r;
    }
    //返回指定图表中的bitmap元素
    export function  createBitmap(textures:egret.SpriteSheet,name:string,x:number=0,y:number=0):egret.Bitmap
    {
        var bitmap:egret.Bitmap=new egret.Bitmap();
        bitmap.texture=textures.getTexture(name);
        bitmap.x=x;                    bitmap.y=y;
        return bitmap;
    }


}