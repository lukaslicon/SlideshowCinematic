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
        this.load.image('beetle', 'assets/beetle.png');
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
        //text for title 
        this.add.text(25, 150, "In a world where society is full of bugs", {
            fontSize: 32,
            color: ('black'),
            stroke: '#1212E3',
            strokeThickness: 3
        })
        //bee
        this.time.delayedCall(2000, () => {
            const bee = this.add.image(-500, 400, 'bee');
            this.tweens.add({
                targets: bee,
                x: 150,
                duration: 1000,
                repeat: 0,
                ease: 'cubic.inOut',
                scale: .15
            });
            //text for fly
            this.add.text(85, 300, "The Good", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
            })   
        }, this);
        //beetle
        this.time.delayedCall(4000, () => {
            const beetle = this.add.image(2500, 400, 'beetle');
            this.tweens.add({
                scale: .15,
                targets: beetle,
                x: 650,
                duration: 1000,
                repeat: 0,
                ease: 'cubic.inOut',
    
            });
            //text for bee
            this.add.text(585, 300, "The Bad", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
                })
                       
        }, this);

        //fly
        this.time.delayedCall(6000, () => {
            const fly = this.add.image(400, 2000, 'fly');
            this.tweens.add({
                scale: .65,
                targets: fly,
                y: 400,
                duration: 1000,
                repeat: 0,
                ease: 'cubic.inOut',
            });
        //text for bee
            this.add.text(290, 300, "The Annoying", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
                })    
        }, this);
        
        

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
        this.time.delayedCall(10000, () => {
            this.cameras.main.fadeOut();    
        }, this);
            this.time.delayedCall(11000, () => {
                this.scene.start('SceneC');    
        }, this);
    }
}


//fourth scene, menu scene, goes back to studio name
class SceneC extends Phaser.Scene{
    constructor()
    {
        super("SceneC");
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
    scene: [SceneA, SceneB, SceneC],
}

let game = new Phaser.Game(config);

