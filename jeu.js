//****************//
//      class     //
//****************//

class Entite {
    constructor() {
        if (this.constructor === Entite) {
            throw new TypeError('La classe abstraite "Entite" ne peut pas être instancié');
        }
        this.velX = 0;
        this.velY = 0;
        this.posX = 0;//Coordonnées du coin en bas à gauche
        this.posY = 0;
        this.largeur = canvas.width / 16;
        this.hauteur = canvas.height / 11;
        this.vitesse = canvas.width * 0.0009;
        this.couleur = 'rgb(200, 50, 50)';
        this.surLeSol = true;
        this.vie = 9999;
    }

    etat() {
        if (this.vie > 0) return true;
        return false;
    }

    /**
     * Augmente la velocité Y et deplace l'entité pour simuler la gravité.
     * Baisse la vélocité X pour simuler la friction avec l'air et le sol.
     */
    frictionEtGravite() {
        this.velX *= friction;
        this.velY += gravite;
        this.posY += this.velY;
    }

    /**
     * Déplace l'entitée dans toutes les direction à l'aide des touches du clavier.
     * 
     * - Aller à gauche : DROITE ou D
     * - Aller à droite : GAUCHE ou Q
     * - Aller vers le haut (sauter) : HAUT ou ESPACE ou Z
     */
    deplacer() {
        if (touches_appuye[touche.DROITE] || touches_appuye[touche.D]) {
            this.velX += this.vitesse;
        }
        if (touches_appuye[touche.GAUCHE] || touches_appuye[touche.Q]) {
            this.velX += -this.vitesse;
        }
        if (touches_appuye[touche.HAUT] || touches_appuye[touche.ESPACE] || touches_appuye[touche.Z]) {
            this.saut();
        }
        this.posX += this.velX;
    }

    /**
     * Analyse si l'entité est entré en collision avec une autre entité.
     * 
     * @param lesEntites entités avec lesquelle on analyse la collision
     */
    verifierEntites(lesEntites) {
        lesEntites.forEach(entite => {
            if (entite !== this) {
                this.collisionEntite(entite);
            }
        });
    }

    /**
     * Analyse si l'entité est entré en collision avec une autre entité et la repositionne.
     * 
     * @param uneEntite entité avec laquelle on analyse la collision
     */
    collisionEntite(uneEntite) {
        if (this.posX < uneEntite.posX + uneEntite.largeur && this.posX + this.largeur > uneEntite.posX) {
            if (this.posY - this.hauteur < uneEntite.posY && this.posY > uneEntite.posY - uneEntite.hauteur) {
                if (this.posX + this.largeur <= uneEntite.posX + uneEntite.largeur) {
                    this.posX = uneEntite.posX - this.largeur - 1; //Décale l'entité vers la gauche
                } else {
                    this.posX = uneEntite.posX + this.largeur + 1; //Décale l'entité vers la droite
                }
                this.actionCollisionEntite(uneEntite);
            }
        }
    }

    /**
     * Action à réaliser après être rentré en collision avec une autre entité.
     * 
     * @param uneEntite entité avec laquelle l'entité en entré en collision
     */
    actionCollisionEntite(uneEntite) { }

    /**
     * Analyse si l'entité est entré en collision par le haut ou pas le bas,
     * avec toutes les plateformes et avec le sol.
     * 
     * @param lesPlateformes liste de toutes les plateformes
     */
    verifierSolEtPlateforme(lesPlateformes) {
        if (this.posY > canvas.height - canvas.height / 9.33) {
            this.posY = canvas.height - canvas.height / 9.33;
            this.velY = 0;
            this.surLeSol = true;
        }
        lesPlateformes.forEach(plat => {
            this.collisionPlateformePlafond(plat);
            this.collisionPlateformeSol(plat);
        });
    }

    /**
     * Analyse si l'entité est entré en collision avec le haut d'une plateforme (en tombant dessus).
     * 
     * @param unePlateforme plateforme avec laquelle l'entité en entré en collision
     */
    collisionPlateformeSol(unePlateforme) {
        if (this.velY > 0) {
            if (this.posY >= unePlateforme.posY - unePlateforme.hauteur && this.posY <= unePlateforme.posY) { //pieds dans la plateforme
                if (this.posX + this.largeur >= unePlateforme.posX && this.posX <= unePlateforme.posX + unePlateforme.largeur) { //entre les bords d'une plateforme
                    this.posY = unePlateforme.posY - unePlateforme.hauteur;
                    this.velY = 0;
                    this.surLeSol = true;
                    this.collisionBosse(unePlateforme.bosses);
                }
            }
        }
    }

    /**
     * Analyse si l'entité est entré en collision avec le bas d'une plateforme (en sautant dedans).
     * 
     * @param unePlateforme plateforme avec laquelle l'entité en entré en collision
     */
    collisionPlateformePlafond(unePlateforme) {
        if (this.velY < 0) {
            if (this.posY - this.hauteur >= unePlateforme.posY - unePlateforme.hauteur && this.posY - this.hauteur <= unePlateforme.posY) { //tête dans la plateforme
                if (this.posX + this.largeur >= unePlateforme.posX && this.posX <= unePlateforme.posX + unePlateforme.largeur) { //entre les bords d'une plateforme
                    this.velY = 0;
                    this.posY = unePlateforme.posY + this.hauteur + 1;
                    this.declencherBosse(unePlateforme);
                }
            }
        }
    }

    /**
     * Analyse si une tortue est entré en collision avec une bosse.
     * 
     * @param bosses liste des bosses d'une plateforme
     */
    collisionBosse(bosses) {
        if (this instanceof Tortue && bosses.length > 0) {
            bosses.forEach(bosse => {
                if (this.posX + this.largeur > bosse[0].posX && this.posX < bosse[0].posX + bosse[0].largeur) {
                    this.actionCollisionBosse();
                }
            });
        }
    }

    /**
     * Déclenche la création de la bosse sur une plateforme.
     * 
     * @param unePlateforme plateforme avec laquelle l'entité en entré en collision
     */
    declencherBosse(unePlateforme) {
        var valUneBosse = valBosse.CENTRE;
        if (this.posX + this.largeur / 2 < unePlateforme.posX + 30) {
            valUneBosse = valBosse.BORD_GAUCHE;
        } else if (this.posX + this.largeur / 2 > unePlateforme.posX + unePlateforme.largeur - 30) {
            valUneBosse = valBosse.BORD_DROIT;
        }
        var nouvelleBosse = new Bosse(this.posX + this.largeur / 2, unePlateforme.posY, valUneBosse, unePlateforme.posX, unePlateforme.posX + unePlateforme.largeur);
        unePlateforme.ajouterBosse(nouvelleBosse);
    }

    /**
     * Replace l'entitée lorsqu'elle dépace de l'écran pas les bords.
     * - Si elle sort par la droite, elle réapparait à gauche
     * - Si elle sort par la gauche, elle réapparait à droite
     */
    teleportationBords() {
        if (this.posX + this.largeur < 0) {
            this.posX = canvas.width;
        }
        if (this.posX > canvas.width) {
            this.posX = 0 - this.largeur;
        }
    }

    /**
     * Action à réaliser à chaque tick.
     */
    action() { }

    /**
     * Appel de toutes les fonctions necessaire au mouvement de l'entité.
     * 
     * @param lesPlateformes liste de toutes les plateformes
     */
    mouvement(lesPlateformes, lesEntites) {
        this.deplacer();
        this.frictionEtGravite();
        this.teleportationBords();
        this.verifierEntites(lesEntites);
        this.verifierSolEtPlateforme(lesPlateformes);
        this.action();
    }

    /**
     * Dessine une entité.
     */
    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Perso extends Entite {
    constructor(unePosX, unePosY) {
        super();
        this.posX = unePosX;
        this.posY = unePosY;
    }

    /**
     * Modifie la vélocité Y pour faire sauter le personnage.
     */
    saut() {
        if (this.surLeSol) {
            this.velY = -10.5;
            this.surLeSol = false;
        }
    }
}

class Tortue extends Entite {
    constructor() {
        super();
        this.hauteur = canvas.height / 20;
        this.vitesse = canvas.width * 0.0007;
        this.etatRenverse = false;
        this.vie = 2;
        this.couleur = 'rgb(50, 200, 50)';
        this.init();
        this.timer = 0;
        this.colere = true;
    }

    /**
     * Place la tortue dans un tuyau /!\ pas fait /!\
     */
    init() {
        this.posX = Math.floor(Math.random() * (canvas.width));
        this.posY = canvas.height / 10;
    }

    /**
     * Action à réaliser après être rentré en collision avec une autre entité.
     * 
     * @param uneEntite entité avec laquelle l'entité en entré en collision
     */
    actionCollisionEntite(uneEntite) {
        if (uneEntite instanceof Perso) {
            if (this.etatRenverse) {
                this.vie = 0;
            } else {
                uneEntite.vie -= 1;
            }
        } else {
            this.vitesse = -this.vitesse;
        }
    }

    /**
     * Action à réaliser après être rentré en collision avec une bosse.
     */
    actionCollisionBosse() {
        if (!this.etatRenverse) {
            this.etatRenverse = true;
            this.couleur = 'rgb(200, 200, 50)';
            //Faire un saut /!\ pas fait /!\
        }
        this.timer = 300;
    }

    /**
     * Action à réaliser à chaque tick.
     */
    action() {
        this.timer -= 1;
        if (this.etatRenverse && this.timer < 0) {
            this.etatRenverse = false;
            this.couleur = 'rgb(250, 150, 30)';
            this.vitesse = canvas.width * 0.0015;
            this.colere = true;
        }
    }

    /**
     * Déplace l'entitée vers la droite ou la gauche.
     */
    deplacer() {
        if (!this.etatRenverse) {
            this.velX += this.vitesse;
            this.posX += this.velX;
        }
    }
}

class Plateforme {
    constructor(unePosX, unePosY, uneLargeur) {
        this.posX = unePosX;
        this.posY = unePosY;
        this.largeur = uneLargeur;
        this.hauteur = canvas.height * 0.03;
        this.couleur = 'rgb(150, 150, 150)';
        this.bosses = [];
    }

    /**
     * Ajoute une bosse à la plateforme.
     * 
     * @param uneBosse bosse à ajouter
     */
    ajouterBosse(uneBosse) {
        this.bosses.push([uneBosse, 30])//[<uneBosse>, <timer>]
    }

    /**
     * Dessine la plateforme et ses éventuelles bosses.
     */
    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);

        //Dessiner les bosses.
        this.bosses.forEach(uneBosse => {
            uneBosse[0].dessiner();
            uneBosse[1] -= 1;
            //Si le timer est à 0
            if (uneBosse[1] == 0) {
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
        this.hauteur = canvas.height * 0.03;
        this.couleur = 'rgb(50, 50, 250)';
        this.decalerX(valPos, bordGauchePlat, bordDroitPlat);
    }

    /**
     * Decale la position de la bosse sur l'axe des abscisses et redéfini sa taille
     * en fonction de sa position.
     * 
     * @param val valeur de la position (BORD_DROIT, BORD_GAUCHE ou CENTRE)
     * @param leBordGauchePlat valeur sur l'axe des abscisses du bord gauche de la plateforme
     * @param leBordDroitPlat valeur sur l'axe des abscisses du bord droit de la plateforme
     */
    decalerX(val, leBordGauchePlat, leBordDroitPlat) {
        if (val === valBosse.BORD_GAUCHE) {
            this.posX = leBordGauchePlat;
            this.largeur = 30
        } else if (val === valBosse.BORD_DROIT) {
            this.posX = leBordDroitPlat - 30;
            this.largeur = 30
        }
    }

    /**
     * Dessine la bosse.
     */
    dessiner() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Jeu {
    init() {
        this.initPlateforme()
        this.initEntite();
        window.addEventListener('keyup', keyHandler);
        window.addEventListener('keydown', keyHandler);
        window.setInterval(this.loop, 14);
    }

    /**
     * Initialise toutes les plateformes.
     */
    initPlateforme() {
        //Première ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height / 3.7, canvas.width / 3))
        plateformes.push(new Plateforme(canvas.width * 2 / 3, canvas.height - canvas.height / 3.7, canvas.width / 3))

        //deuxième ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height / 2.26, canvas.width / 10))
        plateformes.push(new Plateforme(canvas.width - canvas.width / 10, canvas.height - canvas.height / 2.26, canvas.width / 10))
        plateformes.push(new Plateforme((canvas.width - canvas.width / 1.87) / 2, canvas.height - canvas.height / 2.12, canvas.width / 1.87))

        //troisième ligne
        plateformes.push(new Plateforme(0, canvas.height - canvas.height / 1.47, canvas.width / 2.3))
        plateformes.push(new Plateforme(canvas.width - canvas.width / 2.3, canvas.height - canvas.height / 1.47, canvas.width / 2.3))
    }

    initEntite() {
        entites.push(new Perso(canvas.width / 2, canvas.height * 0.9));
    }

    genererTortue() {
        if (getRandomInt(100) === 1) {
            entites.push(new Tortue());
        }
    }

    /**
     * Boucle principal du jeu.
     */
    loop() {
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        plateformes.forEach(plat => {
            plat.dessiner();
        });

        entites.forEach(uneEntite => {
            if (!uneEntite.etat()) { //verifie si l'entite est morte
                entites.splice(entites.indexOf(uneEntite), 1);
            }
            uneEntite.mouvement(plateformes, entites);
            uneEntite.dessiner();
        });

        //Création des tortues
        if (Math.random() < 0.004) {
            entites.push(new Tortue());
        }
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
const plateformes = [];
const entites = []

//énumération des touches
const touche = {
    DROITE: 39,
    D: 68,
    GAUCHE: 37,
    Q: 81,
    HAUT: 38,
    ESPACE: 32,
    Z: 90,
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
