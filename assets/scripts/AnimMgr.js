cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.animComp = this.getComponent(cc.Animation);
        this.nodeName = this.node.name;
        let animState = this.animComp.play('');
        animState.wrapMode = cc.WrapMode.Loop;
        animState.repeatCount = Infinity;
    },

    onAttack: function(){
        this.animComp.play(this.nodeName + '_attack');
    },

    onIdle: function(){
        this.animComp.play(this.nodeName + '_idle');
    },

    onWalk: function(){
        this.animComp.play(this.nodeName + '_walk');
    },

    onKnockout: function(){
        this.animComp.play(this.nodeName + '_knockout');
    },

    onHurt: function(){
        this.animComp.play(this.nodeName + '_hurt');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
