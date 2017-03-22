cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.onIdle();
    },

    onAttack: function(){
        if(this.animState.name !== 'player_attack'){
            this.animState = this.animComp.play(this.nodeName + '_attack');
        }
        
    },

    onIdle: function(){
        this.animComp = this.getComponent(cc.Animation);
        this.nodeName = this.node.name;
        
        this.animState = this.animComp.play(this.nodeName + '_idle');
        this.animState.wrapMode = cc.WrapMode.Loop;
        this.animState.repeatCount = Infinity;
    },

    onWalk: function(){
        if(this.animState.name !== 'player_walk'){
            
            this.animState = this.animComp.play(this.nodeName + '_walk');
            this.animState.wrapMode = cc.WrapMode.Loop;
            this.animState.repeatCount = Infinity;
        }
        
    },

    onKnockout: function(){
        this.animState = this.animComp.play(this.nodeName + '_knockout');
    },

    onHurt: function(){
        this.animState = this.animComp.play(this.nodeName + '_hurt');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
