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
        this.vie = 1;
        this.timerPlafond = 0;
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
        if (this.timerPlafond <= 0) {
            this.posY += this.velY;
        } else {
            this.timerPlafond--; //rester coller au plafond
            this.velY = 0;
        }
    }

    /**
     * Analyse si l'entité est entrée dans un tuyau.
     * 
     * @param lesTuyaux tuyaux avec lesquel on analyse la collision
     */
    verifierTuyaux(lesTuyaux) {
        lesTuyaux.forEach(tuyau => {
            if (!(this instanceof Perso)) {
                this.collisionTuyau(tuyau);
            }
        });
    }

    collisionTuyau(tuyau){
        if(this.posY - this.hauteur < tuyau.posY && this.posY > tuyau.posY - tuyau.hauteur){ //regarde si l'entitée est à la hauteur du tuyau
            if(tuyau.sens === 0){ //tuyau à gauche
                if(this.posX <= tuyau.posX + tuyau.largeur){ //toucher l'entrée du tuyaux
                    this.actionCollisionTuyau(tuyau);
                }
            } else { //tuyau à droite
                if(this.posX + this.largeur> tuyau.posX){ //toucher l'entrée du tuyaux
                    this.actionCollisionTuyau(tuyau);
                }
            }
        }
    }

    actionCollisionTuyau(tuyau){
        this.posY = tuyau.posY - 1;
        this.velY = 0;
        if(tuyau.sens === 0 && this.posX < tuyau.posX || tuyau.sens === 1 && this.posX + this.largeur > tuyau.posX + tuyau.largeur){
            tuyau.teleporter(this);
        }
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
     * @param unePlateforme plateforme avec laquelle l'entité en entrée en collision
     */
    collisionPlateformePlafond(unePlateforme) {
        if (this.velY < 0) {
            if (this.posY - this.hauteur >= unePlateforme.posY - unePlateforme.hauteur && this.posY - this.hauteur <= unePlateforme.posY) { //tête dans la plateforme
                if (this.posX + this.largeur >= unePlateforme.posX && this.posX <= unePlateforme.posX + unePlateforme.largeur) { //entre les bords d'une plateforme
                    this.velY = 0;
                    this.posY = unePlateforme.posY + this.hauteur + 1;
                    this.declencherBosse(unePlateforme);
                    this.timerPlafond = 15;
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
                    if (this.posX + this.largeur / 2 < bosse[0].posX + bosse[0].largeur * 0.40) {
                        this.actionCollisionBosse(1);//entite sur la partie gauche de la bosse
                    } else if (this.posX + this.largeur / 2 > bosse[0].posX + bosse[0].largeur * 0.60) {
                        this.actionCollisionBosse(3);//entite sur la partie droite de la bosse
                    } else {
                        this.actionCollisionBosse(2);//entite sur la partie centrale de la bosse
                    }
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
    mouvement(lesPlateformes, lesEntites, lesTuyaux) {
        this.deplacer();
        this.frictionEtGravite();
        this.teleportationBords();
        this.verifierEntites(lesEntites);
        this.verifierSolEtPlateforme(lesPlateformes);
        this.verifierTuyaux(lesTuyaux);
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
        this.spriteActif = 0;
        this.sprites = [];
        this.initSprites();
    }

    initSprites(){
    	this.sprites[0] = new Image();
    	this.sprites[0].src = 'sprites/mario/mario_statique.png';

    	this.sprites[1] = new Image();
    	this.sprites[1].src = 'sprites/mario/mario_statique_inv.png';

    	this.sprites[2] = new Image();
    	this.sprites[2].src = 'sprites/mario/mario_saute.png';

    	this.sprites[3] = new Image();
    	this.sprites[3].src = 'sprites/mario/mario_saute_inv.png';

    	this.sprites[4] = new Image();
    	this.sprites[4].src = 'sprites/mario/mario_marche_1.png';

    	this.sprites[5] = new Image();
    	this.sprites[5].src = 'sprites/mario/mario_marche_2.png';

    	this.sprites[6] = new Image();
    	this.sprites[6].src = 'sprites/mario/mario_marche_3.png';

    	this.sprites[7] = new Image();
    	this.sprites[7].src = 'sprites/mario/mario_marche_4.png';

    	this.sprites[8] = new Image();
    	this.sprites[8].src = 'sprites/mario/mario_marche_5.png';

    	this.sprites[9] = new Image();
    	this.sprites[9].src = 'sprites/mario/mario_marche_1_inv.png';

    	this.sprites[10] = new Image();
    	this.sprites[10].src = 'sprites/mario/mario_marche_2_inv.png';

    	this.sprites[11] = new Image();
    	this.sprites[11].src = 'sprites/mario/mario_marche_3_inv.png';

    	this.sprites[12] = new Image();
    	this.sprites[12].src = 'sprites/mario/mario_marche_4_inv.png';

    	this.sprites[13] = new Image();
    	this.sprites[13].src = 'sprites/mario/mario_marche_5_inv.png';
    }

    /**
     * Modifie la vélocité Y pour faire sauter le personnage.
     */
    saut() {
        if (this.surLeSol && this.velY === 0) {
            this.velY = -9.5;
            this.surLeSol = false;

            if(this.vitesse > 0){
            	this.spriteActif = 2;
            } else {
            	this.spriteActif = 1;
            }
        }
    }

    /**
     * Action à réaliser après être rentré en collision avec une autre entité.
     * 
     * @param uneEntite entité avec laquelle l'entité en entré en collision
     */
    actionCollisionEntite(uneEntite) {
        if (!(uneEntite instanceof Perso)) {
            if (uneEntite.etatRenverse) {
                uneEntite.vie = 0;
            } else {
                this.vie -= 1;
                console.log("perte de vie")
            }
        }
    }

    /**
     * Déplace l'entitée dans toutes les direction à l'aide des touches du clavier.
     * 
     * - Aller à gauche : DROITE ou D
     * - Aller à droite : GAUCHE ou Q
     * - Aller vers le haut (sauter) : HAUT ou ESPACE ou Z
     */
    deplacer() {
    	//modifie le sprite quand le personnage est immobile
    	if(this.velX < Math.abs(this.vitesse) && this.velX > 0 && this.surLeSol){
    		this.spriteActif = 1;
    	} else if(this.velX > -Math.abs(this.vitesse) && this.velX < 0 && this.surLeSol){
    		this.spriteActif = 0;
    	}
        if (touches_appuye[touche.DROITE] || touches_appuye[touche.D]) {
            this.velX += this.vitesse;
            //modifie le sprite quand le personnage avance à droite
            if(this.surLeSol){
            	if(this.spriteActif < 9) this.spriteActif = 9;
            	this.spriteActif = 9 + ((this.spriteActif - 8) % 5);
            } else {
            	this.spriteActif = 3; //saute vers la droite
            }
        }
        if (touches_appuye[touche.GAUCHE] || touches_appuye[touche.Q]) {
            this.velX += -this.vitesse;
            //modifie le sprite quand le personnage avance à gauche
            if(this.surLeSol){
            	if(this.spriteActif < 4) this.spriteActif = 4;
            	this.spriteActif = 4 + (this.spriteActif - 3) % 5;
            } else {
            	this.spriteActif = 2; //saute vers la gauche
            }
        }
        if (touches_appuye[touche.HAUT] || touches_appuye[touche.ESPACE] || touches_appuye[touche.Z]) {
            this.saut();
        }
        this.posX += this.velX;
    }

    /**
     * Dessine une entité.
     */
    dessiner() {
        ctx.drawImage(this.sprites[this.spriteActif], this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Tortue extends Entite{
    constructor(unePosX, unePosY, sens) {
        super();
        this.posX = unePosX;
        this.posY = unePosY;
        this.hauteur = canvas.height / 20;
        this.vitesse = sens * Math.abs(canvas.width * 0.0007);
        this.etatRenverse = false;
        this.vie = 2;
        this.couleur = 'rgb(50, 200, 50)';
        this.timer = 0;
        this.colere = true;
        this.ancienneVitesse = this.vitesse;
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
     * 
     * @param posBosse position de l'entité sur la bosse
     *      - 1 : partie gauche
     *      - 2 : partie centrale
     *      - 3 : partie droite
     */
    actionCollisionBosse(posBosse) {
        if (!this.etatRenverse && this.timer < 0) {
            this.etatRenverse = true;
            this.couleur = 'rgb(200, 200, 50)';
            this.timer = 300;
            this.saut(posBosse);
        } else {
            this.etatRenverse = false;
            this.timer = 30;
            this.saut(posBosse);
        }
    }

    /**
     * Fait sauter la tortue de trois manières différentes, vers la gauche, vers la droite ou tout droit.
     * 
     * @param posBosse position de l'entité sur la bosse
     *      - 1 : partie gauche
     *      - 2 : partie centrale
     *      - 3 : partie droite
     */
    saut(posBosse) {
        if (this.vitesse !== 0) this.ancienneVitesse = -this.vitesse;
        if (posBosse === 1) {
            this.vitesse = -Math.abs(this.vitesse);
        } else if (posBosse === 3) {
            this.vitesse = Math.abs(this.vitesse);
        } else {
            this.vitesse = 0;
        }
        this.velY = -6;
        this.surLeSol = false;
    }

    /**
     * Action à réaliser à chaque tick.
     */
    action() {
        this.timer -= 1;
        if (this.etatRenverse && this.timer < 0) {
            this.etatRenverse = false;
            this.couleur = 'rgb(250, 150, 30)';
            this.vitesse = this.ancienneVitesse * 1.5;
            this.colere = true;
        }
        if (!this.etatRenverse && this.timer > 0) {
            this.vitesse = this.ancienneVitesse;
            this.couleur = 'rgb(50, 200, 50)';
        }
    }

    /**
     * Déplace l'entitée vers la droite ou la gauche.
     */
    deplacer() {
        if (this.timer > 270 || !this.etatRenverse) {
            this.velX += this.vitesse;
            this.posX += this.velX;
        }
    }
}

class BouleDeFeu {
    constructor(unePosX, unePosY, sens, type) {
        this.velX = 0;
        this.velY = 0;
        this.posX = unePosX;
        this.posY = unePosY;
        this.rayon = canvas.height / 30;
        this.vitesse = sens * Math.abs(canvas.width * 0.004);
        this.vie = 1;
        this.couleur = 'rgb(255, 0, 0)';
        this.timer = 1000;
        this.type = type; //type 0 : avance tout droit; type 1 : rebondi
    }

    etat() {
        if (this.vie > 0) return true;
        return false;
    }

    /**
     * Analyse si la boule est entrée en collision avec un Perso.
     * 
     * @param perso avec lesquel on analyse la collision
     * @return boolean
     * 		- true : la boule touche le perso
     * 		- false : la boule ne touche pas le perso
     */
    collision(perso) {
    	var cercleDistanceX = Math.abs(this.posX - (perso.posX + perso.largeur/2));
        var cercleDistanceY = Math.abs(this.posY - (perso.posY - perso.hauteur/2));

    	if (cercleDistanceX > (perso.largeur/2 + this.rayon)) {
    		return false;
    	}
    	if (cercleDistanceY > (perso.hauteur/2 + this.rayon)) {
    		return false;
    	}
    	if (cercleDistanceX <= (perso.largeur/2)) {
    		return true;
    	}
    	if (cercleDistanceY <= (perso.hauteur/2)) {
    		return true;
    	}
    	var cornerDistance_sq = (cercleDistanceX - perso.largeur/2)^2 + (cercleDistanceY - perso.hauteur/2)^2;
    	return (cornerDistance_sq <= (this.rayon^2));
    }

    /**
     * Analyse si la boule est entrée en collision avec un Perso.
     * 
     * @param lesPersos persos avec lesquels on analyse la collision
     */
    verifierPersos(lesPersos) {
        lesPersos.forEach(unPerso => {
        	if(this.collision(unPerso)){
        		unPerso.vie -= 1;
            	this.vie = 0;
        	}
        });
    }

    /**
     * Action à réaliser à chaque tick.
     */
    action() {
        this.timer -= 1;
        if (this.timer < 0) {
            this.vie = 0;
        }
    }

    /**
     * Si type 0, la boule avance tout droit.
     * Si type 1, la boule rebondi.
     */
    deplacer() {
    	if(this.type === 0){
    		this.velY = 0;
            this.posX += this.vitesse;
    	}
    }

    /**
     * Détrui la boule de feu quand elle touche un bord
     */
    toucherBords() {
        if (this.posX - this.rayon < 0 || this.posX + this.rayon > canvas.width) {
            this.vie = 0;
        }
    }

    /**
     * Appel de toutes les fonctions necessaire au mouvement de la boule.
     * 
     * @param lesPlateformes liste de toutes les plateformes
     */
    mouvement(lesPlateformes, lesPersos) {
        this.deplacer();
        this.toucherBords();
        this.verifierPersos(lesPersos);
        this.action();
        //this.verifierSolEtPlateforme(lesPlateformes);
    }

    /**
     * Dessine la boule.
     */
    dessiner() {
    	ctx.beginPath();
        ctx.fillStyle = this.couleur;
        ctx.arc(this.posX, this.posY, this.rayon, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
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
        this.bosses.push([uneBosse, 20])//[<uneBosse>, <timer>]
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

class Tuyau {
    constructor(unePosX, unePosY, unType, unSens) {
        this.posX = unePosX;
        this.posY = unePosY;
        this.largeur = canvas.width/10;
        this.hauteur = canvas.height / 15;
        this.couleur = 'rgb(0, 100, 0)';
        this.liaison;
        this.sens = unSens;//0 : tuyau à gauche; 1 : tuyau à droite
        this.type = unType;//0 : entrée; 1 : sortie
    }

    teleporter(uneEntite){
        if(this.type === 0){
            uneEntite.posY = this.liaison.posY;
            if(this.sens === 0){
                uneEntite.vitesse = Math.abs(uneEntite.vitesse);
            } else {
                uneEntite.vitesse = -Math.abs(uneEntite.vitesse);
            }
        }
    }

    /**
     * modifie la tuyau lié à ce tuyau.
     * Seulement si les deux tuyaux sont de types différents.
     */
    setLiaison(unTuyau){
        if(this.type !== unTuyau.type){
            this.liaison = unTuyau;
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
        this.num = 0;
        this.initPlateforme()
        this.initEntite();
        this.initTuyaux();
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
        persos.push(new Perso(canvas.width / 2, canvas.height * 0.7));
    }

    initTuyaux() {
        //tuyaux d'entrée
        tuyaux.push(new Tuyau(0, canvas.height - canvas.height / 9.33, 0, 0));
        tuyaux.push(new Tuyau(canvas.width - canvas.width/10, canvas.height - canvas.height / 9.33, 0, 1));

        //tuyaux de sortie
        tuyaux.push(new Tuyau(0, canvas.height * 0.15, 1, 0));
        tuyaux.push(new Tuyau(canvas.width - tuyaux[2].largeur, canvas.height * 0.15, 1, 1));

        //liaison des tuyaux d'entrées et de sorties
        tuyaux[0].setLiaison(tuyaux[2]);
        tuyaux[1].setLiaison(tuyaux[3]);
    }

    /**
     * Boucle principal du jeu.
     */
    loop() {
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);//fond
        ctx.fillStyle = 'rgb(91, 60, 17)';
        ctx.fillRect(0, canvas.height - canvas.height / 9.33, canvas.width, canvas.height/9.33);//fond

        //Les plateformes
        plateformes.forEach(plat => {
            plat.dessiner();
        });

        //Les entités sans le perso
        entites.forEach(uneEntite => {
            if (!uneEntite.etat()) { //verifie si l'entite est morte
                entites.splice(entites.indexOf(uneEntite), 1);
            }
            uneEntite.mouvement(plateformes, entites, tuyaux);
            uneEntite.dessiner();
        });

        //Les tuyaux
        tuyaux.forEach(tuyau => {
            tuyau.dessiner();
        });

        //Les boules de feu
        boules.forEach(uneBoule => {
            if (!uneBoule.etat()) { //verifie si l'entite est morte
                console.log("destruction")
                boules.splice(boules.indexOf(uneBoule), 1);
            }
            uneBoule.mouvement(plateformes, persos);
            uneBoule.dessiner();
        });

        //Les personnages
        persos.forEach(unPerso => {
            if (!unPerso.etat()) { //verifie si l'entite est morte
                persos.splice(persos.indexOf(unPerso), 1);
            }
            unPerso.mouvement(plateformes, entites, tuyaux);
            unPerso.dessiner();
        });

        //Création des tortues
        this.num = Math.random();
        if (this.num < 0.003) {
            if(this.num % 2 === 0){
                entites.push(new Tortue(tuyaux[2].posX, tuyaux[3].posY - 15, 1));
            } else {
                entites.push(new Tortue(tuyaux[2].posX, tuyaux[3].posY - 15, -1));
            }
        }

        //Création des boules de feu
        this.num = Math.random();
        if (this.num < 0.002) {
        	this.num = Math.floor(Math.random() * 4);
        	if(this.num === 0){
                boules.push(new BouleDeFeu(30, canvas.height * 0.85, 1, 0));
            } else if(this.num === 1){
                boules.push(new BouleDeFeu(30, canvas.height * 0.6, 1, 0));
            }else if(this.num === 2){
                boules.push(new BouleDeFeu(30, canvas.height * 0.4, 1, 0));
            }else if(this.num === 3){
                boules.push(new BouleDeFeu(30, canvas.height * 0.2, 1, 0));
            }
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
const gravite = 0.4;
const plateformes = [];
const entites = [];
const boules = [];
const persos = [];
const tuyaux = [];

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
