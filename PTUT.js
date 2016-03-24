//CARTES

function Carte(i){
  var carte={
    id:i,
    nom:nom.tabCarte[i],
    nb:nb.tabCarte[i],
    type:type.tabCarte[i]
  };
  return carte;
}

function InitTabCarte(){
  this.tabCarte =[];
  this.tabCarte.push(AjoutTabC("Alcène",2,true));
  this.tabCarte.push(AjoutTabC("Acide",5,true));
  this.tabCarte.push(AjoutTabC("Alcool",2,true));
  this.tabCarte.push(AjoutTabC("Cétone",2,true));
  this.tabCarte.push(AjoutTabC("Chlorure d'acide",2,true));
  this.tabCarte.push(AjoutTabC("O3,H2O2",2,false));
  this.tabCarte.push(AjoutTabC("CrO3,H2SO4",2,false));
  this.tabCarte.push(AjoutTabC("OH-,X2",2,false));
  this.tabCarte.push(AjoutTabC("PX3",2,false));
  
}

function AjoutTabC(s,i,t){
  var carte={
    nom:s,
    nb:i,
    type:t
  };
  return carte;
}


//REACTIONS

function InitTabReaction(){
  this.tabReaction = [];
  this.tabReaction.push(AjoutTabR(0,5,1));
  this.tabReaction.push(AjoutTabR(2,6,1));
  this.tabReaction.push(AjoutTabR(3,7,1));
  this.tabReaction.push(AjoutTabR(1,8,4));
  
}

function AjoutTabR(i,j,k){
  this.un = i;
  this.deux = j;
  this.trois = k;
  var reaction={
    un:i,
    deux:j,
    trois:k
  };
  return reaction;
}

function VerifReac(tabR,x,y,z){
  for(var i=0;i<tabR.lenght;i++){
    if(tabR[i].un===x && tabR[i].deux===y && tabR[i].trois===z){
      return(true);
    }
  }
  return(false);
}



//PACKET CARTE


function Packet_Carte(tabC){
  this.packetF = [];
  this.packetR = [];
  this.carteMaxF=-1;
  this.carteMaxR=-1;
  var j;
  for(var i=0;i<tabC.length;i++){
    if(tabC[i].type){
      for(j=0;j<tabC[i].nb;j++){
        packetF.push(Carte(i));
        carteMaxF++;
      }
    }else{
      for(j=0;j<tabC[i].nb;j++){
        packetR.push(Carte(i));
        carteMaxR++;
      }  
    }
  }
}

function Tirer_Fonction(packet){
  var carte;
  if(packet.carteMaxF>0){
    var rand = Math.floor(Math.random() * packet.carteMaxF);
    carte = packet.packetF[rand];
    packet.packetF[rand] = packet.packetF[carteMaxF];
    packet.carteMaxF--;
  }else if(packet.carteMaxF===0){
    carte = packet.packetF[0];
    packet.carteMaxF--;
  }else{
    carte = null;
  }
  return (carte);
}

function Tirer_Reactif(packet){
  var carte;
  if(packet.carteMaxR>0){
    var rand = Math.floor(Math.random() * packet.carteMaxR);
    carte = packet.packetR[rand];
    packet.packetR[rand] = packet.packetR[carteMaxR];
    packet.carteMaxR--;
  }else if(packet.carteMaxR===0){
    carte = packet.packetR[0];
    packet.carteMaxR--;
  }else{
    carte = null;
  }
  return (carte);
}

//JOUEURS

function Joueur(s,i){
  this.nom = s;
  this.numero = i;
  /*if(Joueur.numero === undefined){
    Joueur.numero = 1;
  }else{
    Joueur.numero ++;
  }
  console.log(Person.count);*/
  this.score = 0;
}


//PARTIE

function Partie(){
  var tabC = new InitTabCarte().tabCarte;
  var tabR = new InitTabReaction().tabReaction;
  var a = tabR;
  var b = a[1].un;
  console.log(b);
  var jeu = Packet_Carte(tabC);
  /*var i;
  var tour = 1;
  var victoire = false;
  var ListeJoueur = new Array(Joueur("Pierre",1),Joueur("Jean",2));
  var table = [];
  var fosseF = [];
  var fosseR = [];
  table.push(Tirer_Fonction(jeu));
  table.push(Tirer_Fonction(jeu));
  table.push(Tirer_Reactif(jeu));
  table.push(Tirer_Reactif(jeu));*/
  
}






window.onload = function () {
  Partie();
};
