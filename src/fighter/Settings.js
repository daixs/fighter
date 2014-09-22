/**
* Created by lixin on 2014-8-23.
*/
var Settings = (function () {
    function Settings() {
    }
    Settings.initVar = function (_w, _h) {
        Settings.stageWidth = _w;
        Settings.stageHeight = _h;
    };
    Settings.setScoreText = function (_d) {
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
    };
    Settings.stageWidth = 480;
    Settings.stageHeight = 640;
    Settings.score = 0;
    Settings.ip = "http://192.168.1.175:3000/";
    return Settings;
})();
