class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        my.sprite.legOne = this.add.sprite(this.bodyX+70, this.bodyY+120, "monsterParts", "leg_yellowC.png");
        my.sprite.legTwo = this.add.sprite(this.bodyX-70, this.bodyY+130, "monsterParts", "leg_yellowB.png");
        my.sprite.legTwo.flipX = true;
        my.sprite.armOne = this.add.sprite(this.bodyX+90, this.bodyY+70, "monsterParts", "arm_redD.png");
        my.sprite.armTwo = this.add.sprite(this.bodyX-80, this.bodyY+70, "monsterParts", "arm_redA.png");
        my.sprite.armTwo.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteA.png");
        my.sprite.eyeOne = this.add.sprite(this.bodyX, this.bodyY-40, "monsterParts", "eye_red.png");
        my.sprite.eyeTwo = this.add.sprite(this.bodyX-40, this.bodyY, "monsterParts", "eye_yellow.png");
        my.sprite.eyeThree = this.add.sprite(this.bodyX+40, this.bodyY, "monsterParts", "eye_blue.png");
        my.sprite.mouthOne = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthB.png");
        my.sprite.mouthTwo = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthF.png");
        my.sprite.mouthTwo.visible = false;
        my.sprite.earOne = this.add.sprite(this.bodyX+75, this.bodyY-75, "monsterParts", "detail_dark_ear.png");
        my.sprite.earTwo = this.add.sprite(this.bodyX-75, this.bodyY-75, "monsterParts", "detail_blue_ear.png");
        my.sprite.earTwo.flipX = true;

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) => {
            console.log("S key pressed");
            my.sprite.mouthOne.visible = true;
            my.sprite.mouthTwo.visible = false;
        });
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            console.log("F key pressed");
            my.sprite.mouthOne.visible = false;
            my.sprite.mouthTwo.visible = true;
        });
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) {
            console.log("A key is down (polling)");
            for (let part in my.sprite) {
                my.sprite[part].x -= 1;
            }
        }
        if (this.dKey.isDown) {
            console.log("D key is down (polling)");
            for (let part in my.sprite) {
                my.sprite[part].x += 1;
            }
        }

    }

}