
// 世界坐标系下底座节点的坐标
var nodeWorldX = 0;
var nodeWorldY = 0;

// ..
var isMove = false;

// 弧度
var angle = 0;

// 底座圆半径
var radius = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        thumb: cc.Node,
        velocity: 0
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        this.animMgr = this.player.getComponent('AnimMgr');

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            let world = event.getLocation();
            let local = self.node.convertToNodeSpaceAR(world);
            
            isMove = true;
            angle = Math.atan2(local.y, local.x);

            self.thumb.setPosition(local);
        }, this);

        // 结束触摸后杆还原
        this.thumb.on(cc.Node.EventType.TOUCH_END, function(event){ 
            self.thumb.runAction(cc.moveTo(0.1, cc.v2(0, 0)));
            isMove = false;
            this.animMgr.onIdle();
  
        }, this);
        this.thumb.on(cc.Node.EventType.TOUCH_CANCEL, function(event){ 
            self.thumb.runAction(cc.moveTo(0.1, cc.v2(0, 0)));
            isMove = false;
            this.animMgr.onIdle();
        }, this);       
    }, 

    update: function(dt){

        if(isMove){

            if (angle < 22.5 || angle > -22.5) {

            }

            this.animMgr.onWalk();
        }

    }
});
