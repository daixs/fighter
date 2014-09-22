/**
 * Created by lixin on 2014-8-23.
 */
 
    class Settings {
        //记录舞台宽高
        public static stageWidth: number = 480;
        public static stageHeight: number = 640;
        public static score: number = 0;
        public static ip: string = "http://192.168.1.175:3000/";//:3000/resource/assets/fj2.png
        public static initVar(_w: number, _h: number) {
            Settings.stageWidth = _w; Settings.stageHeight = _h;
        }
        public static setScoreText(_d: number) {
            Settings.score = _d;
            //var str = Settings.score.toString();
            //var t: number = str.length;
            //console.log(str.length);
            //var scoreStr: string = "";
            //while (t < 4) {
            //    scoreStr += "0";
            //    t += 1;
            //}
            //scoreStr += str;
            //  GameUI.scoreText.text=scoreStr.toString();
        }

    }
 