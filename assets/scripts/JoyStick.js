cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        thumb: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        this.radius = this.node.width / 2;

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            let pos = self.convertToNodePos(event.getLocation());
            let p = cc.p(0, 0);

            if(pos.x > 50 || pos.x < -50){
                
                p.x = Math.cos(Math.atan2(pos.y, pos.x)) * self.radius;
                p.y = Math.sin(Math.atan2(pos.y, pos.x)) * self.radius;
                self.thumb.setPosition(p);
            }
            else{
                self.thumb.setPosition(pos);
            }
            cc.log("y: " + pos.y);
            cc.log("pos.x: " + pos.x + ", pos.y: " + pos.y);
            
        }, this);
    }, 

    convertToNodePos: function(pos){

        if(pos.x > 100){
            pos.x = pos.x - 100;
        }
        else {
            pos.x = -(100 - pos.x);
        }

        if(pos.y > 100){
            pos.y = pos.y - 100;
        }
        else {
            pos.y = -(100 - pos.y);
        }
        return pos;
    },

    calculateY: function(x){
        let pow = function (param){
            return param * param;
        }

        return Math.sqrt(pow(this.radius) - pow(x - 0)) + 0;
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
