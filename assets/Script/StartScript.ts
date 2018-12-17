

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScript extends cc.Component {

    @property(cc.Node)
    SetNode:cc.Node = null;
    @property(cc.Node)
    HelpNode:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}


    openGameSc(){
        this.destroy();
        cc.director.loadScene("G_MainScene");
    }

    openHelpSc(){
        let self = this;
        self.HelpNode.active = true;
        self.node.getChildByName("Help").active = false;
        self.node.getChildByName("Start").active = false;
    }

    openSetSc(){
        // this.destroy();
        let self = this;
        self.SetNode.active = true;
        self.node.getChildByName("Setting").active = false;
        self.node.getChildByName("Start").active = false;
    }
}
