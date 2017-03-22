
// var playerFSM = new StateMachine({

//     transitions: [
//         {name: 'toStart', from: 'none', to: 'idle'},
//         {name: 'toIdle', from: ['attack', 'walk', 'hurt'], to: 'idle'},
//         {name: 'toHurt', from: 'idle', to: 'hurt'},
//         {name: 'toKnockout', from: 'hurt', to: 'knockout'},
//         {name: 'toWalk', from: 'idle', to: 'walk'},
//         {name: 'toAttack', from: 'idle', to: 'attack'},
//         {name: 'toEnd', from: 'knockout', to: 'none'}
//     ],
//     methods: {
//         onWalk: function(angle){
//             playerFSM.toWalk();

//         },
//         onIdle: function(){

//         },
//         onAttack: function(){

//         },
//         onKnockout: function(){

//         },
//         onHurt: function(){

//         },
//         onEnd: function(){

//         }
//     }

// });
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        // playerFSM.toStart();
        this.animMgr = this.node.getComponent('AnimMgr');
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

// module.exports = {
//     playerFSM,
// }