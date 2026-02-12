
import { TextureMan } from "./Texture/TextureManager.js"
import { Texture } from "./Texture/Texture.js";

import { ImageMan } from "./Image/ImageManager.js"
import { Image } from "./Image/Image.js"

import { SpriteMan } from "./Sprite/SpriteManager.js";
import { Sprite } from "./Sprite/Sprite.js";

import { setActiveScene } from './Globals.js';

export default class Game extends Phaser.Scene {

    constructor() {
        super({ key: "Game" });

    }
    // ---------------------------------------------------
    // Phaser lifecycle
    // ---------------------------------------------------

    init() {
        console.log("Game initialized");

        // So that scene in availble in all files
        setActiveScene(this);

        TextureMan.Create(1, 1);

        ImageMan.Create(5, 2);

        SpriteMan.Create(4, 2);

        this.redSpeed = 2.0;
    }

    preload() {

        //load default texture
        this.load.image(Texture.psDefaultPhaserTexture, "./assets/HotPink.png");


        TextureMan.Add(Texture.Name.Aliens, "assets/kindpng_4810910.png");
        TextureMan.Add(Texture.Name.Birds, "assets/Birds.png");
        TextureMan.Add(Texture.Name.PacMan, "assets/PacMan.png");
        TextureMan.Add(Texture.Name.Stitch, "assets/stitch.png");
    }

    create() {
        console.log("===== Manager Tests Begin =====");




        let crabImage = this.textures.get(Texture.Name.Aliens);

        crabImage.add('crab', 0, 118, 27, 95, 70);

        this.add.sprite(200, 200, Texture.Name.Aliens, 'crab');


        //   // --- angry birds ---

        //         ImageMan.Add(Image.Name.RedBird, Texture.Name.Birds, 47, 41, 48, 46);
        //         ImageMan.Add(Image.Name.YellowBird, Texture.Name.Birds, 124, 34, 60, 56);
        //         ImageMan.Add(Image.Name.GreenBird, Texture.Name.Birds, 246, 135, 99, 72);
        //         ImageMan.Add(Image.Name.WhiteBird, Texture.Name.Birds, 139, 131, 84, 97);

        // // --- Pacman Ghosts ---

        //         ImageMan.Add(Image.Name.RedGhost, Texture.Name.PacMan, 616, 148, 33, 33);
        //         ImageMan.Add(Image.Name.PinkGhost, Texture.Name.PacMan, 663, 148, 33, 33);
        //         ImageMan.Add(Image.Name.BlueGhost, Texture.Name.PacMan, 710, 148, 33, 33);
        //         ImageMan.Add(Image.Name.OrangeGhost, Texture.Name.PacMan, 757, 148, 33, 33);

        //     // --- Alines ---
        //         ImageMan.Add(Image.Name.Alien_Crab, Texture.Name.Aliens, 26, 201, 95, 63);
        //         ImageMan.Add(Image.Name.Alien_Octopus, Texture.Name.Aliens, 559, 64, 92, 64);
        //         ImageMan.Add(Image.Name.Alien_Squid, Texture.Name.Aliens, 464, 64, 63, 63);
        //         ImageMan.Add(Image.Name.Alien_UFO, Texture.Name.Aliens, 122, 491, 96, 45);

        //     // --- Stitch ---
        //         ImageMan.Add(Image.Name.Stitch, Texture.Name.Stitch, 0, 0, 300, 410);



        // let RedBirdImage = this.textures.get(Texture.Name.Birds);

        // RedBirdImage.add('redBird', 0, 47, 41, 48, 46);

        ImageMan.Add(Image.Name.RedBird, Texture.Name.Birds, 47, 41, 48, 46);

        this.pRedBird = SpriteMan.Add(Sprite.Name.RedBird, Image.Name.RedBird, Texture.Name.Birds, 50, 500, 1, 1);

        //this.add.sprite(400, 200, Texture.Name.Birds, Image.Name.RedBird);


        // let SitchImage = this.textures.get(Texture.Name.Stitch);

        // SitchImage.add('stitch', 0, 0, 0, 300, 410);

        //ImageMan.Add(Image.Name.Stitch, Texture.Name.Stitch, 0, 0, 300, 410);

        //this.add.sprite(400, 400, Texture.Name.Stitch, Image.Name.Stitch);




        console.log("===== Manager Tests End =====");
    }

    update(time, delta) {

        //console.log("===== Game Update =====");
        // Game loop placeholder
        if (this.pRedBird.x > this.scale.width || this.pRedBird.x < 0.0) {
            this.redSpeed *= -1.0;
        }
        this.pRedBird.x += this.redSpeed;
        this.pRedBird.Update();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // This tells Phaser to start using your Game class defined above
    scene: [Game]
};

// This "turns the key" to start the engine
export const game = new Phaser.Game(config);




