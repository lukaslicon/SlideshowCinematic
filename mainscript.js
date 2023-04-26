//first scene, studio introduction
class SceneA extends Phaser.Scene{
    constructor()
    {
        super({key:"sceneA"});
    }
    preload (){       
    this.load.image('studioLogo', 'assets/buggyGames.png');}
    create (){
        this.cameras.main.fadeIn();
        this.add.sprite(400, 300, 'studioLogo').setAlpha(0.2);
        this.time.delayedCall(4000, () => {
        this.cameras.main.fadeOut();    
    }, this);
        this.time.delayedCall(5000, () => {
            this.scene.start('sceneB');    
    }, this);
}
}

//second scene, tired of bugs scene
class SceneB extends Phaser.Scene{
    constructor()
    {
        super("sceneB");
    }
    preload (){}
    create (){
        this.cameras.main.fadeIn();

    }
}

//third scene, explanation scene

//fourth scene, menu scene, goes back to studio name

config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600, 
    backgroundColor: 0x000000,
    scene: [SceneA, SceneB],
}

let game = new Phaser.Game(config);