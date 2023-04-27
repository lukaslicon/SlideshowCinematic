//first scene, studio introduction //done
class SceneA extends Phaser.Scene{
    constructor()
    {
        super("SceneA");
    }
    preload (){       
    this.load.image('logo', 'assets/BuggyGames.png');}
    create (){
        this.cameras.main.fadeIn();

        this.imageObject = this.add.image(
            400,//x
            250,//y
            'logo',
        )
        //next scene
        this.time.delayedCall(4000, () => {
        this.cameras.main.fadeOut();    
    }, this);
        this.time.delayedCall(5000, () => {
            this.scene.start('SceneB');    
    }, this);
}
}

//second scene, tired of bugs scene
class SceneB extends Phaser.Scene{
    constructor()
    {
        super("SceneB");
    }
    preload (){
        this.load.image('grass', 'assets/grass.png');
        this.load.image('fly', 'assets/fly.png');
        this.load.image('bee', 'assets/bee.png');
        this.load.audio('music', 'assets/audio/music.mp3');
    }
    create (){
        this.cameras.main.fadeIn();

        //background img
        this.imageObject = this.add.image(
            400,//x
            250,//y
            'grass',
        )
        this.imageObject.setScale(1.25) 

        //fly
        const fly = this.add.image(-1500, 400, 'fly');
        this.tweens.add({
            targets: fly,
            x: 150,
            duration: 2000,
            repeat: 0,
            ease: 'cubic.in',
            scale: .6
        });

        //bee
        let bee = this.add.image(2000, 400, 'bee');

        this.tweens.add({
            scale: .15,
            targets: bee,
            x: 650,
            duration: 2000,
            repeat: 0,
            ease: 'cubic.in',

        });



        //music
        this.music = this.sound.add('music');
        let musicConfig = {
            mute:false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

        //next scene
        this.time.delayedCall(9000, () => {
            this.cameras.main.fadeOut();    
        }, this);
            this.time.delayedCall(10000, () => {
                this.scene.start('SceneC');    
        }, this);
    }
}

//third scene, explanation scene
class SceneC extends Phaser.Scene{
    constructor()
    {
        super("SceneC");
    }
    preload (){
    this.load.image('grass', 'assets/grass.png');       
    }
    create (){
        
        this.cameras.main.fadeIn();
        this.imageObject = this.add.image(
            400,//x
            250,//y
            'grass',
        )
        this.imageObject.setScale(1.25) //resize

        //next scene
        this.time.delayedCall(4000, () => {
            this.cameras.main.fadeOut();    
        }, this);
            this.time.delayedCall(5000, () => {
                this.scene.start('SceneD');    
        }, this);
}
}

//fourth scene, menu scene, goes back to studio name
class SceneD extends Phaser.Scene{
    constructor()
    {
        super("SceneD");
    }
    preload (){
    this.load.image('mountains', 'assets/Menuart.jpg');       
    this.load.audio('musicS', 'assets/audio/musicSped.wav');
    }
    create (){
        this.game.sound.stopAll(); //stop current music
        this.music = this.sound.add('musicS'); //play new music
        let musicConfig = {
            mute:false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig); //play music
        this.cameras.main.fadeIn();
        this.imageObject = this.add.image(
            400,//x
            300,//y
            'mountains',
        )
        this.imageObject.setScale(.13) //resize


}
}



config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600, 
    backgroundColor: 0xFFFFFF,
    scene: [SceneA, SceneB, SceneC, SceneD],
}

let game = new Phaser.Game(config);

