class JimmyGame extends Phaser.Scene{
    constructor(){
        super("jimmyGame");
    }

}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600, 
    backgroundColor: 0xA62FCF,
    scene: [JimmyGame],
}

let game = new Phaser.Game(config);