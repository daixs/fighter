/**
 * Created by lixin on 2014-8-24.
 */
module fighter
{
    export class OverPlan extends egret.Sprite
{
    private  sprite:egret.Sprite=new egret.Sprite();
    public rStartBtn:DrawRectBtn;
    public shareBtn:DrawRectBtn;
    private sharPlan:egret.Sprite;
    public btnIsbool: number = 0;
    public   stageWidth: number = 480;
    public stageHeight: number = 640;

    private txt: egret.TextField;
    public constructor()
    {
        super();
        this.sprite=utils.createRectangular(0,0,this.stageWidth,this.stageHeight,.3,0x000000);
        this.addChild(this.sprite);
        this.sprite=utils.createRectangular(5,5,340,240,.4,0x000000);
        this.sprite.x = (this.stageWidth-this.sprite.width)/2;
        this.sprite.y = (this.stageHeight-this.sprite.height)/2;
        this.addChild(this.sprite);
        this.sprite=utils.createRectangular(0,0,340,240,1,0x00ffff);
        this.addChild(this.sprite);
        this.sprite.x = (this.stageWidth-this.sprite.width)/2;
        this.sprite.y = (this.stageHeight-this.sprite.height)/2;
        var text:egret.TextField=new egret.TextField();
        text = utils.createTextLabel(text, 0x44aaff,"left","游戏结束",40);
       this.addChild(text);
        text.y=this.sprite.y+20;
        text.x=this.sprite.x+20;
        var line: DottedLine = new DottedLine(340, 4, 15, 0x88fff,0x00ffff);
        this.addChild(line);
        line.y=text.y+text.height;
        line.x=this.sprite.x;
        var str:string=("SCORE:0").toString();

        this.txt = utils.createTextLabel(this.txt,0xffffff,"left",str,24);
        this.txt.x=this.sprite.x+10;
        this.txt.y=line.y+line.height+30;
        this.addChild(this.txt);
        this.rStartBtn = new DrawRectBtn(120, 50, 0xffffff, 0x44aaff, "再玩一下", 20, 0x11e8ee);
        this.addChild(this.rStartBtn);
        this.rStartBtn.x=this.sprite.x+30;
       // this.rStartBtn.x=120;
    //    this.rStartBtn.y=this.sprite.y;
        this.rStartBtn.y=this.sprite.y+this.sprite.height-this.rStartBtn.height-20;
        this.shareBtn = new DrawRectBtn(120, 50, 0xffffff, 0x44aaff, "分享好友", 20, 0x11e8ee);
        this.addChild(this.shareBtn);
        this.shareBtn.x=this.sprite.x+this.sprite.width-this.rStartBtn.width-30;
        this.shareBtn.y=this.rStartBtn.y;
       this.touchEnabled=true;
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onPlanEnd,this);
        this.rStartBtn.touchEnabled=true;
        this.shareBtn.touchEnabled=true;
        this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.rStart_being,this);
       // this.rStartBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.rStartBtn_end,this);
        this.shareBtn.touchEnabled=true;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.shareBtn_begin,this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.shareBtn_end,this);
        this.sharPlan=new egret.Sprite();
        this.sharPlan = utils.createRectangular(0, 0, this.stageWidth,this.stageHeight,.3,0x000000);
        text=utils.createTextLabel(text,0xffffff,"left","点击右上角的按钮\n选择分享到朋友圈",26);
        text.x=(480-text.width)/2;
        text.y=(640-text.height)/2;
        this.sharPlan.addChild(text);

    }
    private rStartBtn_end(e:egret.TouchEvent)
    {
        //this.dispatchEvent(new egret.Event("click_rStart", false, false));
        this.parent.dispatchEvent(new egret.Event("click_rStart", false, false));
    }
    private shareBtn_end(e:egret.TouchEvent)
    {
         this.addChild(this.sharPlan);
        this.sharPlan.touchEnabled=true;
        this.sharPlan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sharBtnClick,this);
    }
    private sharBtnClick(e:egret.TouchEvent)
    {
        this.removeChild(this.sharPlan);
    }



    private rStart_being(e: egret.TouchEvent) {
        this.rStartBtn.down();
        this.btnIsbool = -1;
     
    }
    private shareBtn_begin(e:egret.TouchEvent) {    this.shareBtn.down();this.btnIsbool=1}



    private onPlanEnd(e:egret.TouchEvent)
    {
        if(this.btnIsbool==1)
        {
            this.shareBtn.up();
        }
        else if(this.btnIsbool==-1)
        {
            this.rStartBtn.up();
        }
        this.btnIsbool=0;


    }
    public showScore(value: number): void {
        var msg: string = "您的成绩是:\n" + value + "km再来一次吧";
        this.txt.text = msg;
    }
    }
 }