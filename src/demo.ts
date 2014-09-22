/// <reference path="../libs/core/core.d.ts" />
class demo extends egret.DisplayObjectContainer {
    /**构造函数*/
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }
    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        alert("hello!");
    }
}