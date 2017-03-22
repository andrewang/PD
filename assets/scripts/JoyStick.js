
//虚拟摇杆
//@author shpoz


// 状态机
// var playerFSM = require('Player').playerFSM;

// 世界坐标系下底座节点的坐标
var nodeWorldX = 0;
var nodeWorldY = 0;

// ..
var isMove = false;

// 弧度
var angle = 0;

// 底座圆半径
var radius = 0;


/**
 *  转换至节点坐标系
 *  @param pos 世界坐标
 *  @return pos 节点坐标
 */
var convertToNodePos = function(pos){

    if(pos.x > nodeWorldX){
        pos.x = pos.x - nodeWorldX;
    }
    else {
        pos.x = -(nodeWorldX - pos.x);
    }

    if(pos.y > nodeWorldY){
        pos.y = pos.y - nodeWorldY;
    }
    else {
        pos.y = -(nodeWorldY - pos.y);
    }

    return pos;
}

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
        this.init();
        this.animMgr = this.player.getComponent('AnimMgr');

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            let pos = convertToNodePos(event.getLocation());
            // 发生触点移动事件则让玩家移动
            isMove = true;

            // 节点朝向
            if(Math.abs(angle) > 1.57){
                this.player.setScaleX(-2);
            }
            else{
                this.player.setScaleX(2);
            }

            // 如果触点（杆）越界，根据弧度使用三角函数算出位置
            // 如果没越界，杆正常移动
            angle = Math.atan2(pos.y, pos.x);  
            if(pos.x > radius || pos.x < -radius || pos.y > radius || pos.y < -radius){             
                self.thumb.setPosition(
                    Math.cos(angle) * radius, 
                    Math.sin(angle) * radius
                );
            }
            else{
                self.thumb.setPosition(pos);
            }
            
        }, this);

        // 结束触摸后杆还原
        this.thumb.on(cc.Node.EventType.TOUCH_END, function(event){ 
            self.thumb.runAction(cc.moveTo(0.1, cc.p(0, 0)));
            isMove = false;
            this.animMgr.onIdle();
  
        }, this);
        this.thumb.on(cc.Node.EventType.TOUCH_CANCEL, function(event){ 
            self.thumb.runAction(cc.moveTo(0.1, cc.p(0, 0)));
            isMove = false;
            this.animMgr.onIdle();
        }, this);       
    }, 

    // 初始化
    init: function(){
        
        radius = this.node.width / 2;
        nodeWorldX = this.node.position.x;
        nodeWorldY = this.node.position.y;   
    },

    update: function(dt){

        // 根据摇杆移动弧度用三角函数算出移动距离和方向
        if(isMove){
            if(this.player.position.y >= -84){
                this.player.setPositionY(-85);
            }
            else if(this.player.position.y <= -237){
                this.player.setPositionY(-236);
            }
            else if(this.player.position.x <= -355){
                this.player.setPositionX(-354);
            }
            else{
                this.player.setPosition(
                    this.player.position.x + Math.cos(angle) * this.velocity * dt, 
                    this.player.position.y + Math.sin(angle) * this.velocity * dt
                );
            }

            this.animMgr.onWalk();
        }

    }
});
