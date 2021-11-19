//****************//
//      class     //
//****************//
class Perso {
    constructor() {
        this.velX = 0;
        this.velY = 0;
        this.posX = 300;
        this.posY = canvas.height;
        this.largeur = canvas.width/16;
        this.hauteur = canvas.height/11;
        this.vitesse = canvas.width * 0.0009;
        this.couleur = 'rgb(200, 50, 50)';
        this.surLeSol = true;
    }

    frictionEtGravite(){
        this.velX *= friction;
        this.velY += gravite;
        this.posY += this.velY;
    }

    saut(){
        if(this.surLeSol){
            this.velY = -10.2;
            this.surLeSol = false;
        }
    }

    deplacer(){
        if(touches_appuye[touche.DROITE]) {
            this.velX += this.vitesse;
        }
        if(touches_appuye[touche.GAUCHE]) {
            this.velX += -this.vitesse;
        }
        if(touches_appuye[touche.HAUT]) {
            this.saut();
        }
        this.posX += this.velX;
    }

    verifierSolEtPlateforme(lesPlateformes){
        if(this.posY > canvas.height - canvas.height/9.33){
            this.posY = canvas.height - canvas.height/9.33;
            this.velY = 0;
            this.surLeSol = true;
        }
        lesPlateformes.forEach(plat => {
            this.collisionPlateformePlafond(plat);
            this.collisionPlateformeSol(plat);
        });
    }

    collisionPlateformeSol(unePlateforme){
        if(this.velY > 0){
            if(this.posY >= unePlateforme.posY - unePlateforme.hauteur && this.posY <= unePlateforme.posY){ //pieds dans la plateforme
                if(this.posX + this.largeur >= unePlateforme.posX && this.posX <= unePlateforme.posX + unePlateforme.largeur){ //entre les bords d'une plateforme
                    this.posY = unePlateforme.posY - unePlateforme.hauteur;
                    this.velY = 0;
                    this.surLeSol = true;
                }
            }
        }
    }

    collisionPlateformePlafond(unePlateforme){
        if(this.velY < 0){
            if(this.posY - this.hauteur >= unePlateforme.posY - unePlateforme.hauteur && this.posY - this.hauteur <= unePlateforme.posY){ //tête dans la plateforme
                if(this.posX + this.largeur >= unePlateforme.posX && this.posX <= unePlateforme.posX + unePlateforme.largeur){ //entre les bords d'une plateforme
                    this.velY = 0;
                    this.declencherBosse(unePlateforme);
                }
            }
        }
    }

    declencherBosse(unePlateforme){
        var valUneBosse = valBosse.CENTRE;
        if(this.posX + this.largeur/2 < unePlateforme.posX + 30){
            console.log("gauche");
            valUneBosse = valBosse.BORD_GAUCHE;
        } else if(this.posX + this.largeur/2 > unePlateforme.posX + unePlateforme.largeur - 30){
            console.log("droiche");
            valUneBosse = valBosse.BORD_DROIT;
        }
        var nouvelleBosse = new Bosse(this.posX + this.largeur/2, unePlateforme.posY, valUneBosse, unePlateforme.posX, unePlateforme.posX + unePlateforme.largeur);
        unePlateforme.ajouterBosse(nouvelleBosse);
    }

    teleportationBords(){
        if(this.posX + this.largeur < 0){
            this.posX = canvas.width;
        }
        if(this.posX > canvas.width){
            this.posX = 0 - this.largeur;
        }
    }

    mouvement(lesPlateformes){
        this.deplacer();
        this.frictionEtGravite();
        this.teleportationBords();
        this.verifierSolEtPlateforme(lesPlateformes);
    }

    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Plateforme {
    constructor(unePosX, unePosY, uneLargeur) {
        this.posX = unePosX;
        this.posY = unePosY;
        this.largeur = uneLargeur;
        this.hauteur = canvas.height*0.03;
        this.couleur = 'rgb(150, 150, 150)';
        this.bosses = [];
    }

    ajouterBosse(uneBosse){
        this.bosses.push([uneBosse, 30])//[<unBosse>, <timer>]
    }

    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);

        //Dessiner les bosses
        this.bosses.forEach(uneBosse => {
            uneBosse[0].dessiner();
            uneBosse[1] -= 1;
            //Si le timer est à 0
            if(uneBosse[1] == 0){
                this.bosses.splice(this.bosses.indexOf(uneBosse), 1);
            }
        });
    }
}

class Bosse {
    constructor(unePosX, unePosY, valPos, bordGauchePlat, bordDroitPlat) {
        this.posX = unePosX - 30;
        this.posY = unePosY;
        this.largeur = 60;
        this.hauteur = canvas.height*0.03;
        this.couleur = 'rgb(50, 50, 250)';
        this.decalerX(valPos, bordGauchePlat, bordDroitPlat);
    }

    decalerX(val, leBordGauchePlat, leBordDroitPlat){
        if(val === valBosse.BORD_GAUCHE){
            //console.log("ok")
            this.posX = leBordGauchePlat;
            this.largeur = 30
        } else if(val === valBosse.BORD_DROIT){
            this.posX = leBordDroitPlat - 30;
            this.largeur = 30
        }
    }

    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Jeu{
    init(){
        this.initPlateforme()
        window.addEventListener('keyup', keyHandler);
        window.addEventListener('keydown', keyHandler);
        window.setInterval(this.loop, 14);
    }

    initPlateforme(){
        //Première ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height/3.7, canvas.width/3))
        plateformes.push(new Plateforme(canvas.width * 2/3, canvas.height - canvas.height/3.7, canvas.width/3))

        //deuxième ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height/2.26, canvas.width/10))
        plateformes.push(new Plateforme(canvas.width - canvas.width/10, canvas.height - canvas.height/2.26, canvas.width/10))
        plateformes.push(new Plateforme((canvas.width - canvas.width/1.87)/2, canvas.height - canvas.height/2.12, canvas.width/1.87))

        //troisième ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height/1.47, canvas.width/2.3))
        plateformes.push(new Plateforme(canvas.width - canvas.width/2.3, canvas.height - canvas.height/1.47, canvas.width/2.3))
    }

    loop() {
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        plateformes.forEach(plat => {
            plat.dessiner();
        });
        perso.mouvement(plateformes);
        perso.dessiner();
    }
}

//********************//
//      variables     //
//********************//

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const touches_appuye = [];
const friction = 0.75;
const gravite = 0.5;
const perso = new Perso();
const plateformes = [];

//énumération des touches
const touche = {
    DROITE: 39,
    GAUCHE: 37,
    HAUT: 38,
}

//énumération valeurs d'une bosse
const valBosse = {
    BORD_DROIT: 1,
    CENTRE: 2,
    BORD_GAUCHE: 3,
}

function keyHandler(e) {
    touches_appuye[e.keyCode] = e.type == 'keydown';
}

var jeu = new Jeu();
jeu.init();
