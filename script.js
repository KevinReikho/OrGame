



window.addEventListener("load",parseJson);
// get le produit final des links
function getFinal(){


}

//parsing JSON
function parseJson() {
var data;
var req = new XMLHttpRequest();
var url = "transfo.json";

req.open("GET", url);
req.onerror = function() {
  console.log("Échec de chargement de Transfo.json");
};
req.onload = function () {
  if (req.status === 200) {
    console.log("oui");
    // parseJSon pour obtenir tout les produits finaux
     data = JSON.parse(req.responseText,function(k,v){
       k = k.replace(/\d/g,'');
       if (k!="reactif" && k != "fonction" && (k!='')){
       setLink(k);
       }
     });

  } else {
    console.log("Erreur " + req.status);
  }

};
req.send();

}




//fonction qui initialise tout les produit finaux dans la div listPF
function setLink(produit_final){

    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent=produit_final;
    a.href = "#"+produit_final;
    li.appendChild(a);
    document.getElementById("ulListPf").appendChild(li);
  
  console.log(produit_final);
}

// fonction qui va afficher la table
function affiche() {

}
