//****************//
//      class     //
//****************//
class chargerSprites {
	constructor() {
		this.chargerSpritesTortues();
		this.chargerSpritesMario();
        this.chargerSpritesBosse();
        this.chargerSpritesBouleDeFeu();
	}

	chargerSpritesTortues(){
		for (var i = 0; i < 25; i++) {
		 	spritesTortues[i] = new Array(5);
		}

		let decalRouge = 11;

		//avancer
    	spritesTortues[0][0] = new Image();
    	spritesTortues[0][0].src = 'sprites/tortue/marche_1.png';

    	spritesTortues[0][1] = new Image();
    	spritesTortues[0][1].src = 'sprites/tortue/marche_2.png';

    	spritesTortues[0][2] = new Image();
    	spritesTortues[0][2].src = 'sprites/tortue/marche_3.png';

    	spritesTortues[0][3] = new Image();
    	spritesTortues[0][3].src = 'sprites/tortue/marche_4.png';

    	spritesTortues[0][4] = new Image();
    	spritesTortues[0][4].src = 'sprites/tortue/marche_5.png';

    	spritesTortues[1][0] = new Image();
    	spritesTortues[1][0].src = 'sprites/tortue/marche_1_inv.png';

    	spritesTortues[1][1] = new Image();
    	spritesTortues[1][1].src = 'sprites/tortue/marche_2_inv.png';

    	spritesTortues[1][2] = new Image();
    	spritesTortues[1][2].src = 'sprites/tortue/marche_3_inv.png';

    	spritesTortues[1][3] = new Image();
    	spritesTortues[1][3].src = 'sprites/tortue/marche_4_inv.png';

    	spritesTortues[1][4] = new Image();
    	spritesTortues[1][4].src = 'sprites/tortue/marche_5_inv.png';

    	//retournement
    	spritesTortues[2][0] = new Image();
    	spritesTortues[2][0].src = 'sprites/tortue/retournement_1.png';

    	spritesTortues[2][1] = new Image();
    	spritesTortues[2][1].src = 'sprites/tortue/retournement_2.png';

    	spritesTortues[2][2] = new Image();
    	spritesTortues[2][2].src = 'sprites/tortue/retournement_3.png';

    	spritesTortues[2][3] = new Image();
    	spritesTortues[2][3].src = 'sprites/tortue/sortir_1.png';

    	spritesTortues[2][4] = new Image();
    	spritesTortues[2][4].src = 'sprites/tortue/boule_1.png';

    	spritesTortues[3][0] = new Image();
    	spritesTortues[3][0].src = 'sprites/tortue/retournement_1_inv.png';

    	spritesTortues[3][1] = new Image();
    	spritesTortues[3][1].src = 'sprites/tortue/retournement_2_inv.png';

    	spritesTortues[3][2] = new Image();
    	spritesTortues[3][2].src = 'sprites/tortue/retournement_3_inv.png';

    	spritesTortues[3][3] = new Image();
    	spritesTortues[3][3].src = 'sprites/tortue/sortir_1_inv.png';

    	spritesTortues[3][4] = new Image();
    	spritesTortues[3][4].src = 'sprites/tortue/boule_1_inv.png';

    	//sort
    	spritesTortues[4][0] = new Image();
    	spritesTortues[4][0].src = 'sprites/tortue/boule_1.png';

    	spritesTortues[4][1] = new Image();
    	spritesTortues[4][1].src = 'sprites/tortue/sortir_1.png';

    	spritesTortues[4][2] = new Image();
    	spritesTortues[4][2].src = 'sprites/tortue/retournement_3.png';

    	spritesTortues[5][0] = new Image();
    	spritesTortues[5][0].src = 'sprites/tortue/boule_1_inv.png';

    	spritesTortues[5][1] = new Image();
    	spritesTortues[5][1].src = 'sprites/tortue/sortir_1_inv.png';

    	spritesTortues[5][2] = new Image();
    	spritesTortues[5][2].src = 'sprites/tortue/retournement_3_inv.png';

    	//agiter
    	spritesTortues[6][0] = new Image();
    	spritesTortues[6][0].src = 'sprites/tortue/agite_1.png';

    	spritesTortues[6][1] = new Image();
    	spritesTortues[6][1].src = 'sprites/tortue/retournement_2.png';

    	spritesTortues[7][0] = new Image();
    	spritesTortues[7][0].src = 'sprites/tortue/agite_1_inv.png';

    	spritesTortues[7][1] = new Image();
    	spritesTortues[7][1].src = 'sprites/tortue/retournement_2_inv.png';

    	//revenir dans la coquille
    	spritesTortues[8][0] = new Image();
    	spritesTortues[8][0].src = 'sprites/tortue/sorti_1.png';

    	spritesTortues[8][1] = new Image();
    	spritesTortues[8][1].src = 'sprites/tortue/sorti_2.png';

    	spritesTortues[8][2] = new Image();
    	spritesTortues[8][2].src = 'sprites/tortue/sorti_3.png';

    	spritesTortues[8][3] = new Image();
    	spritesTortues[8][3].src = 'sprites/tortue/sorti_4.png';

    	spritesTortues[8][4] = new Image();
    	spritesTortues[8][4].src = 'sprites/tortue/sorti_5.png';

    	spritesTortues[9][0] = new Image();
    	spritesTortues[9][0].src = 'sprites/tortue/sorti_1_inv.png';

    	spritesTortues[9][1] = new Image();
    	spritesTortues[9][1].src = 'sprites/tortue/sorti_2_inv.png';

    	spritesTortues[9][2] = new Image();
    	spritesTortues[9][2].src = 'sprites/tortue/sorti_3_inv.png';

    	spritesTortues[9][3] = new Image();
    	spritesTortues[9][3].src = 'sprites/tortue/sorti_4_inv.png';

    	spritesTortues[9][4] = new Image();
    	spritesTortues[9][4].src = 'sprites/tortue/sorti_5_inv.png';

    	spritesTortues[10][0] = new Image();
    	spritesTortues[10][0].src = 'sprites/tortue/revivre_1.png';

    	spritesTortues[10][1] = new Image();
    	spritesTortues[10][1].src = 'sprites/tortue/revivre_2.png';

    	spritesTortues[10][2] = new Image();
    	spritesTortues[10][2].src = 'sprites/tortue/revivre_3.png';

    	spritesTortues[10][3] = new Image();
    	spritesTortues[10][3].src = 'sprites/tortue/revivre_4.png';

    	spritesTortues[10][4] = new Image();
    	spritesTortues[10][4].src = 'sprites/tortue/revivre_5.png';

    	spritesTortues[10][5] = new Image();
    	spritesTortues[10][5].src = 'sprites/tortue/revivre_6.png';

    	//--- tortue rouge ---//

    	//avancer
    	spritesTortues[0 + decalRouge][0] = new Image();
    	spritesTortues[0 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_marche_1.png';

    	spritesTortues[0 + decalRouge][1] = new Image();
    	spritesTortues[0 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_marche_2.png';

    	spritesTortues[0 + decalRouge][2] = new Image();
    	spritesTortues[0 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_marche_3.png';

    	spritesTortues[0 + decalRouge][3] = new Image();
    	spritesTortues[0 + decalRouge][3].src = 'sprites/tortue_rouge/rouge_marche_4.png';

    	spritesTortues[0 + decalRouge][4] = new Image();
    	spritesTortues[0 + decalRouge][4].src = 'sprites/tortue_rouge/rouge_marche_5.png';

    	spritesTortues[1 + decalRouge][0] = new Image();
    	spritesTortues[1 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_marche_1_inv.png';

    	spritesTortues[1 + decalRouge][1] = new Image();
    	spritesTortues[1 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_marche_2_inv.png';

    	spritesTortues[1 + decalRouge][2] = new Image();
    	spritesTortues[1 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_marche_3_inv.png';

    	spritesTortues[1 + decalRouge][3] = new Image();
    	spritesTortues[1 + decalRouge][3].src = 'sprites/tortue_rouge/rouge_marche_4_inv.png';

    	spritesTortues[1 + decalRouge][4] = new Image();
    	spritesTortues[1 + decalRouge][4].src = 'sprites/tortue_rouge/rouge_marche_5_inv.png';

    	//retournement
    	spritesTortues[2 + decalRouge][0] = new Image();
    	spritesTortues[2 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_retournement_1.png';

    	spritesTortues[2 + decalRouge][1] = new Image();
    	spritesTortues[2 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_retournement_2.png';

    	spritesTortues[2 + decalRouge][2] = new Image();
    	spritesTortues[2 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_retournement_3.png';

    	spritesTortues[2 + decalRouge][3] = new Image();
    	spritesTortues[2 + decalRouge][3].src = 'sprites/tortue_rouge/rouge_sortir_1.png';

    	spritesTortues[2 + decalRouge][4] = new Image();
    	spritesTortues[2 + decalRouge][4].src = 'sprites/tortue_rouge/rouge_boule_1.png';

    	spritesTortues[3 + decalRouge][0] = new Image();
    	spritesTortues[3 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_retournement_1_inv.png';

    	spritesTortues[3 + decalRouge][1] = new Image();
    	spritesTortues[3 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_retournement_2_inv.png';

    	spritesTortues[3 + decalRouge][2] = new Image();
    	spritesTortues[3 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_retournement_3_inv.png';

    	spritesTortues[3 + decalRouge][3] = new Image();
    	spritesTortues[3 + decalRouge][3].src = 'sprites/tortue_rouge/rouge_sortir_1_inv.png';

    	spritesTortues[3 + decalRouge][4] = new Image();
    	spritesTortues[3 + decalRouge][4].src = 'sprites/tortue_rouge/rouge_boule_1_inv.png';

    	//sort
    	spritesTortues[4 + decalRouge][0] = new Image();
    	spritesTortues[4 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_boule_1.png';

    	spritesTortues[4 + decalRouge][1] = new Image();
    	spritesTortues[4 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_sortir_1.png';

    	spritesTortues[4 + decalRouge][2] = new Image();
    	spritesTortues[4 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_retournement_3.png';

    	spritesTortues[5 + decalRouge][0] = new Image();
    	spritesTortues[5 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_boule_1_inv.png';

    	spritesTortues[5 + decalRouge][1] = new Image();
    	spritesTortues[5 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_sortir_1_inv.png';

    	spritesTortues[5 + decalRouge][2] = new Image();
    	spritesTortues[5 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_retournement_3_inv.png';

    	//agiter
    	spritesTortues[6 + decalRouge][0] = new Image();
    	spritesTortues[6 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_agite_1.png';

    	spritesTortues[6 + decalRouge][1] = new Image();
    	spritesTortues[6 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_retournement_2.png';

    	spritesTortues[7 + decalRouge][0] = new Image();
    	spritesTortues[7 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_agite_1_inv.png';

    	spritesTortues[7 + decalRouge][1] = new Image();
    	spritesTortues[7 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_retournement_2_inv.png';

    	//revenir dans la coquille
    	spritesTortues[8 + decalRouge][0] = new Image();
    	spritesTortues[8 + decalRouge][0].src = 'sprites/tortue/sorti_1.png';

    	spritesTortues[8 + decalRouge][1] = new Image();
    	spritesTortues[8 + decalRouge][1].src = 'sprites/tortue/sorti_2.png';

    	spritesTortues[8 + decalRouge][2] = new Image();
    	spritesTortues[8 + decalRouge][2].src = 'sprites/tortue/sorti_3.png';

    	spritesTortues[8 + decalRouge][3] = new Image();
    	spritesTortues[8 + decalRouge][3].src = 'sprites/tortue/sorti_4.png';

    	spritesTortues[8 + decalRouge][4] = new Image();
    	spritesTortues[8 + decalRouge][4].src = 'sprites/tortue/sorti_5.png';

    	spritesTortues[9 + decalRouge][0] = new Image();
    	spritesTortues[9 + decalRouge][0].src = 'sprites/tortue/sorti_1_inv.png';

    	spritesTortues[9 + decalRouge][1] = new Image();
    	spritesTortues[9 + decalRouge][1].src = 'sprites/tortue/sorti_2_inv.png';

    	spritesTortues[9 + decalRouge][2] = new Image();
    	spritesTortues[9 + decalRouge][2].src = 'sprites/tortue/sorti_3_inv.png';

    	spritesTortues[9 + decalRouge][3] = new Image();
    	spritesTortues[9 + decalRouge][3].src = 'sprites/tortue/sorti_4_inv.png';

    	spritesTortues[9 + decalRouge][4] = new Image();
    	spritesTortues[9 + decalRouge][4].src = 'sprites/tortue/sorti_5_inv.png';

    	spritesTortues[10 + decalRouge][0] = new Image();
    	spritesTortues[10 + decalRouge][0].src = 'sprites/tortue_rouge/rouge_revivre_1.png';

    	spritesTortues[10 + decalRouge][1] = new Image();
    	spritesTortues[10 + decalRouge][1].src = 'sprites/tortue_rouge/rouge_revivre_2.png';

    	spritesTortues[10 + decalRouge][2] = new Image();
    	spritesTortues[10 + decalRouge][2].src = 'sprites/tortue_rouge/rouge_revivre_3.png';

    	spritesTortues[10 + decalRouge][3] = new Image();
    	spritesTortues[10 + decalRouge][3].src = 'sprites/tortue_rouge/rouge_revivre_4.png';

    	spritesTortues[10 + decalRouge][4] = new Image();
    	spritesTortues[10 + decalRouge][4].src = 'sprites/tortue_rouge/rouge_revivre_5.png';

    	spritesTortues[10 + decalRouge][5] = new Image();
    	spritesTortues[10 + decalRouge][5].src = 'sprites/tortue_rouge/rouge_revivre_6.png';
	}

	chargerSpritesMario(){
		spritesMario[0] = new Image();
    	spritesMario[0].src = 'sprites/mario/mario_statique.png';

    	spritesMario[1] = new Image();
    	spritesMario[1].src = 'sprites/mario/mario_statique_inv.png';

    	spritesMario[2] = new Image();
    	spritesMario[2].src = 'sprites/mario/mario_saute.png';

    	spritesMario[3] = new Image();
    	spritesMario[3].src = 'sprites/mario/mario_saute_inv.png';

    	spritesMario[4] = new Image();
    	spritesMario[4].src = 'sprites/mario/mario_marche_1.png';

    	spritesMario[5] = new Image();
    	spritesMario[5].src = 'sprites/mario/mario_marche_2.png';

    	spritesMario[6] = new Image();
    	spritesMario[6].src = 'sprites/mario/mario_marche_3.png';

    	spritesMario[7] = new Image();
    	spritesMario[7].src = 'sprites/mario/mario_marche_4.png';

    	spritesMario[8] = new Image();
    	spritesMario[8].src = 'sprites/mario/mario_marche_5.png';

    	spritesMario[9] = new Image();
    	spritesMario[9].src = 'sprites/mario/mario_marche_1_inv.png';

    	spritesMario[10] = new Image();
    	spritesMario[10].src = 'sprites/mario/mario_marche_2_inv.png';

    	spritesMario[11] = new Image();
    	spritesMario[11].src = 'sprites/mario/mario_marche_3_inv.png';

    	spritesMario[12] = new Image();
    	spritesMario[12].src = 'sprites/mario/mario_marche_4_inv.png';

    	spritesMario[13] = new Image();
    	spritesMario[13].src = 'sprites/mario/mario_marche_5_inv.png';
	}

    chargerSpritesBosse(){
		spritesBosse[0] = new Image();
    	spritesBosse[0].src = 'sprites/bosse/droit.png';

    	spritesBosse[1] = new Image();
    	spritesBosse[1].src = 'sprites/bosse/centre.png';

    	spritesBosse[2] = new Image();
    	spritesBosse[2].src = 'sprites/bosse/gauche.png';
	}

	chargerSpritesBouleDeFeu(){
		for (var i = 0; i < 4; i++) {
		 	spritesBouleDeFeu[i] = new Array(9);
		}

		//spawn
		spritesBouleDeFeu[0][0] = new Image();
    	spritesBouleDeFeu[0][0].src = 'sprites/boule_de_feu/spawn_1.png';

    	spritesBouleDeFeu[0][1] = new Image();
    	spritesBouleDeFeu[0][1].src = 'sprites/boule_de_feu/spawn_2.png';

    	spritesBouleDeFeu[0][2] = new Image();
    	spritesBouleDeFeu[0][2].src = 'sprites/boule_de_feu/spawn_3.png';

    	spritesBouleDeFeu[0][3] = new Image();
    	spritesBouleDeFeu[0][3].src = 'sprites/boule_de_feu/spawn_4.png';

    	spritesBouleDeFeu[0][4] = new Image();
    	spritesBouleDeFeu[0][4].src = 'sprites/boule_de_feu/spawn_5.png';

    	spritesBouleDeFeu[0][5] = new Image();
    	spritesBouleDeFeu[0][5].src = 'sprites/boule_de_feu/spawn_6.png';

    	//avance
    	spritesBouleDeFeu[1][0] = new Image();
    	spritesBouleDeFeu[1][0].src = 'sprites/boule_de_feu/tourne_1.png';

    	spritesBouleDeFeu[1][1] = new Image();
    	spritesBouleDeFeu[1][1].src = 'sprites/boule_de_feu/tourne_2.png';

    	spritesBouleDeFeu[1][2] = new Image();
    	spritesBouleDeFeu[1][2].src = 'sprites/boule_de_feu/tourne_3.png';

    	//mort
    	spritesBouleDeFeu[2][0] = new Image();
    	spritesBouleDeFeu[2][0].src = 'sprites/boule_de_feu/mort_1.png';

    	spritesBouleDeFeu[2][1] = new Image();
    	spritesBouleDeFeu[2][1].src = 'sprites/boule_de_feu/mort_2.png';

    	spritesBouleDeFeu[2][2] = new Image();
    	spritesBouleDeFeu[2][2].src = 'sprites/boule_de_feu/mort_3.png';

    	spritesBouleDeFeu[2][3] = new Image();
    	spritesBouleDeFeu[2][3].src = 'sprites/boule_de_feu/mort_4.png';

    	spritesBouleDeFeu[2][4] = new Image();
    	spritesBouleDeFeu[2][4].src = 'sprites/boule_de_feu/mort_5.png';

    	spritesBouleDeFeu[2][5] = new Image();
    	spritesBouleDeFeu[2][5].src = 'sprites/boule_de_feu/mort_6.png';

    	spritesBouleDeFeu[2][6] = new Image();
    	spritesBouleDeFeu[2][6].src = 'sprites/boule_de_feu/mort_7.png';

    	spritesBouleDeFeu[2][7] = new Image();
    	spritesBouleDeFeu[2][7].src = 'sprites/boule_de_feu/mort_8.png';

    	spritesBouleDeFeu[2][8] = new Image();
    	spritesBouleDeFeu[2][8].src = 'sprites/boule_de_feu/mort_9.png';
	}
}

class Entite {
    constructor() {
        if (this.constructor === Entite) {
            throw new TypeError('La classe abstraite "Entite" ne peut pas être instancié');
        }
        this.velX = 0;
        this.velY = 0;
        this.posX = 0;//Coordonnées du coin en bas à gauche
        this.posY = 0;
        this.largeur = canvas.width * 0.0625;
        this.hauteur = canvas.height * 0.09375;
        this.vitesse = canvas.width * 0.0008;
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
        if (this.posY > canvas.height * 0.9285) {
            this.posY = canvas.height * 0.9285;
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
        if (this.posX + this.largeur / 2 < unePlateforme.posX + (canvas.width * 0.0625)/2) {
            valUneBosse = valBosse.BORD_GAUCHE;
        } else if (this.posX + this.largeur / 2 > unePlateforme.posX + unePlateforme.largeur - (canvas.width * 0.0625)/2) {
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
        this.teleportationBords();
        if(this.vie > 0){
            this.frictionEtGravite();
            this.verifierEntites(lesEntites);
            this.verifierSolEtPlateforme(lesPlateformes);
            this.verifierTuyaux(lesTuyaux);
        }
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
    }

    /**
     * Modifie la vélocité Y pour faire sauter le personnage.
     */
    saut() {
        if (this.surLeSol && this.velY === 0) {
            this.velY = -canvas.height * 0.021;
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
            	if(horloge % 2 === 0) this.spriteActif = 9 + ((this.spriteActif - 8) % 5);
            } else {
            	this.spriteActif = 3; //saute vers la droite
            }
        }
        if (touches_appuye[touche.GAUCHE] || touches_appuye[touche.Q]) {
            this.velX += -this.vitesse;
            //modifie le sprite quand le personnage avance à gauche
            if(this.surLeSol){
            	if(this.spriteActif < 4) this.spriteActif = 4;
            	if(horloge % 2 === 0) this.spriteActif = 4 + (this.spriteActif - 3) % 5;
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
        ctx.drawImage(spritesMario[this.spriteActif], this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Tortue extends Entite{
    constructor(unePosX, unePosY, sens) {
        super();
        this.posX = unePosX;
        this.posY = unePosY;
        this.hauteur = canvas.height * 0.0625;
        this.vitesse = sens * Math.abs(canvas.width * 0.0004);
        this.etatRenverse = false;
        this.vie = 2;
        this.couleur = 'rgb(50, 200, 50)';
        this.timer = 0;
        this.colere = false;
        this.ancienneVitesse = this.vitesse;
        this.catSpriteActif = 0;
        this.spriteActif = 0;
        this.catSpriteActif2 = 0;
        this.spriteActif2 = 0;
        this.regHorloge = 0;
        this.bAnimSortir = false;
        this.bAnimAgiter = false;
        this.bAnimRelever = false;
        this.valPlus = 0;
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
            this.timer = 400;
            this.saut(posBosse);
            if(this.vitesse > 0){
	        	this.catSpriteActif = 3 + this.valPlus;
	        } else {
	        	this.catSpriteActif = 2 + this.valPlus;
	        }
	        this.spriteActif = 0;
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
        this.velY = -canvas.height * 0.011;
        this.surLeSol = false;
    }

    /**
     * Action à réaliser à chaque tick.
     */
    action() {
        this.timer -= 1;
        //se met en colère
        if (this.etatRenverse && this.timer < 0) {
            this.etatRenverse = false;
            this.couleur = 'rgb(250, 150, 30)';
            this.vitesse = this.ancienneVitesse * 1.5;
            this.colere = true;
            this.bAnimAgiter = false;
            this.bAnimRelever = false;
        	this.regHorloge = 0;
        }
        //revient à l'état normal
        if (!this.etatRenverse && this.timer > 0) {
            this.vitesse = this.ancienneVitesse;
            this.couleur = 'rgb(50, 200, 50)';
            this.bAnimAgiter = false;
            this.bAnimSortir = false;
            this.bAnimRelever = false;
        	this.regHorloge = 0;
        }
        if(this.bAnimSortir){
        	this.anim_sortir();
        }
        if(this.bAnimAgiter){
        	this.anim_agiter();
        }
        if(this.bAnimRelever){
        	this.anim_relever();
        }
        if(this.colere){
        	this.valPlus = 11;
        }
    }

    /**
     * Déplace l'entitée vers la droite ou la gauche.
     */
    deplacer() {
        if (this.timer > 370 || !this.etatRenverse) {
        	//animation avancer
        	if(!this.etatRenverse){
	        	if(this.vitesse > 0){
	        		this.catSpriteActif = 1 + this.valPlus;
	        	} else {
	        		this.catSpriteActif = 0 + this.valPlus;
	        	}
	        	if(horloge % 3 === 0) this.spriteActif = (this.spriteActif + 1) % 5;

	        	//animation renverse
	        	} else{
	        		if(horloge % 6 === 0 && this.spriteActif < 4){
	        			this.spriteActif = this.spriteActif + 1;
	        		}
	        	}
	        //avancer
            this.velX += this.vitesse;
            this.posX += this.velX;
        } else {
        	if(this.catSpriteActif == 3 + this.valPlus || this.catSpriteActif == 2 + this.valPlus){ //a finir
        		this.bAnimSortir = true;
        	}
        }
    }

    /**
     * Animation tortue qui sort de sa coquille
     */
    anim_sortir(){
    	//choisir le sens
		if(this.vitesse > 0){
    		this.catSpriteActif = 5 + this.valPlus;
    	} else {
    		this.catSpriteActif = 4 + this.valPlus;
    	}
		this.spriteActif = 0;
    	//tortue sort sa tête
    	this.saveHorloge();
    	if(horloge - this.regHorloge > 30){
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 60){
	    	this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 100){
	    		this.spriteActif = 0;
				this.bAnimSortir = false;
	    		this.bAnimAgiter = true;
	    		this.regHorloge = 0;
	    }
    }

    /**
     * Animation tortue retourné qui s'agite
     */
    anim_agiter(){
    	this.saveHorloge();
		//choisir le sens
		if(this.vitesse > 0){
    		this.catSpriteActif = 7 + this.valPlus;
    	} else {
    		this.catSpriteActif = 6 + this.valPlus;
    	}
    	if(horloge % 60 === 0){
    		this.spriteActif = 0;
    	} else if(horloge % 30 === 0){
    		this.spriteActif = 1;
    	}
    	if(horloge - this.regHorloge > 180){
			this.bAnimSortir = false;
			this.bAnimAgiter = false;
            this.bAnimRelever = true;
            this.regHorloge = 0;
	    }
    }

    anim_relever(){
    	this.saveHorloge();
    	//choisir le sens
		if(this.vitesse > 0){
    		this.catSpriteActif2 = 9 + this.valPlus;
    		this.catSpriteActif = 10 + this.valPlus;
    	} else {
    		this.catSpriteActif2 = 8 + this.valPlus;
    		this.catSpriteActif = 10 + this.valPlus;
    	}
    	this.spriteActif2 = 0;
    	this.spriteActif = 0;
    	if(horloge - this.regHorloge > 20){
			this.spriteActif2 = 1;
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 30){
			this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 40){
			this.spriteActif2 = 2;
			this.spriteActif = 3;
	    }
	    if(horloge - this.regHorloge > 50){
			this.spriteActif2 = 3;
			this.spriteActif = 4;
	    }
	    if(horloge - this.regHorloge > 60){
	    	this.spriteActif2 = 4;
			this.spriteActif = 5;
	    }
    }

    saveHorloge(){
    	if(this.regHorloge === 0){
    		this.regHorloge = horloge;
    	}
    }

    dessiner() {
        ctx.drawImage(spritesTortues[this.catSpriteActif][this.spriteActif], this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);

        if(this.bAnimRelever){
        	if(this.vitesse > 0){
        		ctx.drawImage(spritesTortues[this.catSpriteActif2][this.spriteActif2], this.posX - this.largeur, this.posY - this.hauteur, this.largeur, this.hauteur);
        	} else {
        		ctx.drawImage(spritesTortues[this.catSpriteActif2][this.spriteActif2], this.posX + this.largeur, this.posY - this.hauteur, this.largeur, this.hauteur);
        	}
        }
    }
}

class BouleDeFeu {
    constructor(unePosX, unePosY, sens, type) {
        this.velX = 0;
        this.velY = 0;
        this.posX = unePosX;
        this.posY = unePosY;
        this.vitesse = sens * Math.abs(canvas.width * 0.004);
        this.vie = 1;
        this.largeur = canvas.width * 0.0625;
        this.hauteur = canvas.height / 14;
        this.rayon = this.largeur/2;
        this.timer = 1000;
        this.type = type; //type 0 : avance tout droit; type 1 : rebondi
        this.actif = false;
        this.catSpriteActif = 0;
        this.spriteActif = 0;
        this.regHorloge = horloge;
    }

    animSpawn(){
    	if(this.actif == true || this.vie == 0){
    		return;
    	}
    	if(horloge - this.regHorloge > 15){
			this.spriteActif = 3;
	    }
	    if(horloge - this.regHorloge > 30){
			this.spriteActif = 0;
	    }
	    if(horloge - this.regHorloge > 45){
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 60){
			this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 75){
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 100){
			this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 115){
			this.spriteActif = 0;
	    }
	    if(horloge - this.regHorloge > 130){
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 145){
			this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 160){
			this.spriteActif = 3;
	    }
	    if(horloge - this.regHorloge > 175){
			this.spriteActif = 4;
	    }
	    if(horloge - this.regHorloge > 190){
			this.spriteActif = 5;
	    }
	    if(horloge - this.regHorloge > 205){
			this.spriteActif = 3;
	    }
	    if(horloge - this.regHorloge > 220){
			this.spriteActif = 4;
	    }
	    if(horloge - this.regHorloge > 235){
			this.spriteActif = 5;
			this.regHorloge = 0;
	    }
    }

    animAvancer(){
    	if(horloge % 10 == 0){
			this.spriteActif++;
	    }
	    if(this.spriteActif == 3){
			this.spriteActif = 0;
	    }
    }

    animMort(){
    	if(this.actif == true || this.vie != 2){
    		return;
    	}
    	this.catSpriteActif = 2;
    	if(horloge - this.regHorloge > 15){
			this.spriteActif = 0;
	    }
	    if(horloge - this.regHorloge > 30){
			this.spriteActif = 1;
	    }
	    if(horloge - this.regHorloge > 45){
			this.spriteActif = 2;
	    }
	    if(horloge - this.regHorloge > 60){
			this.spriteActif = 3;
	    }
	    if(horloge - this.regHorloge > 75){
			this.spriteActif = 4;
	    }
	    if(horloge - this.regHorloge > 100){
			this.spriteActif = 5;
	    }
	    if(horloge - this.regHorloge > 115){
			this.spriteActif = 6;
	    }
	    if(horloge - this.regHorloge > 130){
			this.spriteActif = 7;
	    }
	    if(horloge - this.regHorloge > 145){
			this.spriteActif = 8;
	    }
	    if(horloge - this.regHorloge > 160){
			this.vie = 0;
	    }
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
    	this.animSpawn();
    	this.animMort();
        this.timer -= 1;
        if (this.timer < 0) {
            this.vie = 0;
            this.actif = false;
        }
        if(this.actif === false && this.timer < 750 && this.timer > 500){
        	this.actif = true;
        	this.catSpriteActif = 1;
        	this.spriteActif = 0;
        }
    }

    /**
     * Si type 0, la boule avance tout droit.
     * Si type 1, la boule rebondi.
     */
    deplacer() {
    	if(this.type === 0){
    		this.animAvancer();
    		this.velY = 0;
            this.posX += this.vitesse;
    	}
    }

    /**
     * Détrui la boule de feu quand elle touche un bord
     */
    toucherBords() {
        if (this.posX - this.rayon < 0 || this.posX + this.rayon*2 > canvas.width) {
            this.vie = 2;
            this.actif = false;
            this.posX = this.posX - this.vitesse;
            this.regHorloge = horloge;
        }
    }

    /**
     * Appel de toutes les fonctions necessaire au mouvement de la boule.
     * 
     * @param lesPlateformes liste de toutes les plateformes
     */
    mouvement(lesPlateformes, lesPersos) {
    	if(this.actif){
    		this.deplacer();
	        this.toucherBords();
	        this.verifierPersos(lesPersos);
    	}
        this.action();
        //this.verifierSolEtPlateforme(lesPlateformes);
    }

    /**
     * Dessine la boule.
     */
    dessiner() {
    	ctx.drawImage(spritesBouleDeFeu[this.catSpriteActif][this.spriteActif], this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Plateforme {
    constructor(unePosX, unePosY, uneLargeur) {
        this.posX = unePosX;
        this.posY = unePosY;
        this.largeur = uneLargeur;
        this.hauteur = canvas.height * 0.036;
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
        //ctx.fillStyle = this.couleur;
        //ctx.fillRect(this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);

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
        this.largeur = canvas.width * 0.0625;
        this.hauteur = canvas.height / 14;
	this.posX = unePosX - this.largeur / 2;
        this.posY = unePosY + 1;
        this.couleur = 'rgb(50, 50, 250)';
        this.valPos = valPos;
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
            this.posX = leBordGauchePlat - 1;
        } else if (val === valBosse.BORD_DROIT) {
            this.posX = 1 + leBordDroitPlat - this.largeur;
        }
    }

    /**
     * Dessine la bosse.
     */
    dessiner() {
        ctx.drawImage(spritesBosse[this.valPos-1], this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Tuyau {
    constructor(unePosX, unePosY, unType, unSens) {
        this.posX = unePosX;
        this.posY = unePosY;
        this.largeur = canvas.width/16;
        this.hauteur = canvas.height / 14;
        this.couleur = 'rgb(0, 100, 0)';
        this.liaison;
        this.sens = unSens;//0 : tuyau à gauche; 1 : tuyau à droite
        this.type = unType;//0 : entrée; 1 : sortie
        this.sprite = new Image();
        this.initTuyau();
    }

    initTuyau(){
        if(this.sens === 0){
    	    this.sprite.src = 'sprites/tuyaux/tuyau_gauche.png';
        } else {
            this.sprite.src = 'sprites/tuyaux/tuyau_droit.png';
        }
    }

    teleporter(uneEntite){
        if(this.type === 0){
            uneEntite.posY = this.liaison.posY;
            uneEntite.posX = this.liaison.posX;
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
        ctx.drawImage(this.sprite, this.posX, this.posY - this.hauteur, this.largeur, this.hauteur);
    }
}

class Jeu {
    init() {
        this.num = 0;
        this.initPlateforme()
        this.initEntite();
        this.initTuyaux();
        this.initSprites();
        window.addEventListener('keyup', keyHandler);
        window.addEventListener('keydown', keyHandler);
        this.intervalId = window.setInterval(this.loop, 14);
    }

    /**
     * Initialise toutes les plateformes.
     */
    initPlateforme() {
        //Première ligne
        plateformes.push(new Plateforme(0, canvas.height * 0.75, canvas.width * 0.34375))
        plateformes.push(new Plateforme(canvas.width * 0.65625, canvas.height * 0.75, canvas.width * 0.34375))

        //deuxième ligne
        plateformes.push(new Plateforme(0, canvas.height * 0.5714, canvas.width * 0.125))
        plateformes.push(new Plateforme(canvas.width - canvas.width * 0.125, canvas.height * 0.5714, canvas.width * 0.125))
        plateformes.push(new Plateforme(canvas.width * 0.21875, canvas.height * 0.5357, canvas.width * 0.5625))

        //troisième ligne
        plateformes.push(new Plateforme(0, canvas.height * 0.3214, canvas.width * 0.4375))
        plateformes.push(new Plateforme(canvas.width - canvas.width * 0.4375, canvas.height * 0.3214, canvas.width * 0.4375))
    }

    initEntite() {
        persos.push(new Perso(canvas.width / 2, canvas.height * 0.7));
    }

    initTuyaux() {
        //tuyaux d'entrée
        tuyaux.push(new Tuyau(0, canvas.height * 0.9241, 0, 0));
        tuyaux.push(new Tuyau(canvas.width - canvas.width/16, canvas.height * 0.9241, 0, 1));

        //tuyaux de sortie
        tuyaux.push(new Tuyau(canvas.width * 0.0625, canvas.height * 0.1384, 1, 0));
        tuyaux.push(new Tuyau(canvas.width * 0.875, canvas.height * 0.1384, 1, 1));

        //liaison des tuyaux d'entrées et de sorties
        tuyaux[0].setLiaison(tuyaux[2]);
        tuyaux[1].setLiaison(tuyaux[3]);
    }

    initSprites(){
    	let sprites = new chargerSprites();
    	spriteFond.src = 'sprites/fond/le_fond_clean.png';
    }

    resetAll(){
    	window.clearInterval(jeu.intervalId);
    	plateformes = [];
		entites = [];
		boules = [];
		persos = [];
		tuyaux = [];
		horloge = 0;
    }

    /**
     * Boucle principal du jeu.
     */
    loop() {
        horloge++;

        //Le fond
        ctx.drawImage(spriteFond, 0, 0, canvas.width, canvas.height);

        //Les bosses
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
        if (this.num < 0.003 && entites.length < 6) {
            if(this.num % 2 === 0){
                entites.push(new Tortue(tuyaux[2].posX, tuyaux[2].posY - 15, 1));
            } else {
                entites.push(new Tortue(tuyaux[3].posX, tuyaux[3].posY - 15, -1));
            }
        }

        //Création des boules de feu
        this.num = Math.random();
        if (this.num < 0.0015 && boules.length < 2) {
        	this.num = Math.floor(Math.random() * 4);
        	if(this.num === 0){
                boules.push(new BouleDeFeu(30, canvas.height * 0.85, 1, 0));
            } else if(this.num === 1){
                boules.push(new BouleDeFeu(30, canvas.height * 0.65, 1, 0));
            }else if(this.num === 2){
                boules.push(new BouleDeFeu(30, canvas.height * 0.45, 1, 0));
            }else if(this.num === 3){
                boules.push(new BouleDeFeu(30, canvas.height * 0.2, 1, 0));
            }
        }
    }
}

//********************//
//      variables     //
//********************//

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var touches_appuye = [];
var friction = 0.80;
var gravite = canvas.height / 1200;
var plateformes = [];
var entites = [];
var boules = [];
var persos = [];
var tuyaux = [];
let horloge = 0;
let spritesTortues = [];
let spritesMario = [];
let spritesBosse = [];
let spritesBouleDeFeu = [];
let spriteFond = new Image();
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
