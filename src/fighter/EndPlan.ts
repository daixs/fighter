/**
 * Created by lixin on 2014-8-24.
 */
module fighter
{
    export class EndPlan extends egret.Sprite
{
 
    public btnIsbool: number = 0;
    public   stageWidth: number =  480;
    public stageHeight: number = 640;


        private endbg: egret.Bitmap;
        public share_btn: egret.Bitmap;
        public replay_btn: egret.Bitmap;

        private tap_textfeild: egret.TextField;

        private rank_textfeild: egret.TextField;
        private beat_textfeild: egret.TextField;
        private title_textfeild: egret.TextField;
      
    public constructor()
    {
        super();
           
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
        this.rank_textfeild.textAlign =
        egret.HorizontalAlign.CENTER;
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
        this.addChild(this.replay_btn)

     
        
      //  this.sharPlan.addChild(text);

    }

     
    private rStartBtn_end(e:egret.TouchEvent)
    {
        //this.dispatchEvent(new egret.Event("click_rStart", false, false));
        this.parent.dispatchEvent(new egret.Event("click_rStart", false, false));
    }
    private shareBtn_end(e:egret.TouchEvent)
    {
        dp_share(1,3);
       //  this.addChild(this.sharPlan);
     //   this.sharPlan.touchEnabled=true;
      //  this.sharPlan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sharBtnClick,this);
    }
    private sharBtnClick(e:egret.TouchEvent)
    {
       // this.removeChild(this.sharPlan);
    }



    private rStart_being(e: egret.TouchEvent) {
      //  this.rStartBtn.down();
        this.btnIsbool = -1;
     
    }
        private shareBtn_begin(e: egret.TouchEvent) {

            //this.shareBtn.down(); this.btnIsbool = 1
        }



    private onPlanEnd(e:egret.TouchEvent)
    {
        if(this.btnIsbool==1)
        {
           // this.shareBtn.up();
        }
        else if(this.btnIsbool==-1)
        {
           // this.rStartBtn.up();
        }
        this.btnIsbool=0;


    }
    public showScore(a: number): void {
        var msg: string = "您飞行了" + a + "km千米";
        var num: number = Math.floor(25 * a + Math.random() * a * 5);
        var score: number = 70 + num/100;
        if (score > 100)
            score = 99.8;


        num = 3000 - num;
        if (num < 0)
            num = Math.floor( Math.random() * a)
        this.tap_textfeild.text = msg;//"\u60a8\u7528" + a + "\u6b65\u6293\u4f4f\u4e86\u795e\u7ecf\u732b";
        this.rank_textfeild.text = "全国排名" + num + "位";
        this.beat_textfeild.text = "超越了" + score + "%的飞行者！";
        //  a = 11 > a ? this.titles_arr[a] : this.titles2_arr[Math.floor(Math.random() * this.titles2_arr.length)];
        this.title_textfeild.text = "欢迎乘坐天航飞行！";
       // "\u83b7\u5f97\u79f0\u53f7\uff1a" + a
       // this.txt.text = msg;
    }
    }
 }