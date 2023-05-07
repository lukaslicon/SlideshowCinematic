//first scene, studio introduction //done
class SceneA extends Phaser.Scene{
    constructor()
    {
        super("SceneA");
    }
    preload (){       
    this.load.image('logo', 'assets/buggyGames.png');
}

    create (){
        this.cameras.main.fadeIn();
        this.add.sprite(400,300,'logo',)
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
        console.log("finish preloading");
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
        this.add.text(5, 150, "In a world where society consists of bugs", {
            fontSize: 32,
            color: ('black'),
            stroke: '#1212E3',
            strokeThickness: 3
        })

        let rect1 = new Phaser.Geom.Rectangle(5, 190, 790, 5);
        let rect2 = new Phaser.Geom.Rectangle(5, 140, 790, 5);
        let graphics1 = this.add.graphics({ fillStyle: { color: 0x0000ff } });
        let graphics2 = this.add.graphics({ fillStyle: { color: 0x000000 } });
        graphics1.fillRectShape(rect1);
        graphics1.fillRectShape(rect2);

        

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
            //text for bee
            this.add.text(105, 300, "The Good", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
            })   
            let rectBee = new Phaser.Geom.Rectangle(105, 325, 100, 5);   
            graphics2.fillRectShape(rectBee);  
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
            //text for beetle
            this.add.text(605, 300, "The Bad", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
                })
            let rectBeetle = new Phaser.Geom.Rectangle(605, 325, 90, 5);   
            graphics2.fillRectShape(rectBeetle);              
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
        //text for fly
            this.add.text(325, 300, "The Annoying", {
                fontSize: 20,
                color: ('black'),
                stroke: '#000000',
                strokeThickness: 1
                })
            let rectFly = new Phaser.Geom.Rectangle(322.5, 325, 150, 5);   
            graphics2.fillRectShape(rectFly);     
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
    this.load.image('mountains', 'assets/menuArts.png');       
    this.load.image('menuTitle', 'assets/menuTitle.png'); 
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
        this.add.image(
           400,//x
           300,//y
           'mountains',
        )
        this.add.circle(650, 125, 80, 0xFCB71A); //circle
        this.add.image(
            200,//x
            175,//y
            'menuTitle',
        )
        .setScale(.13) //resize
        this.add.text(30, 170, "PLAY\nSETTINGS\nCREDITS\nQUIT", {
            fontSize: 32,
            color: ('black'),
            stroke: '#000000',
            strokeThickness: 3
        })
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

