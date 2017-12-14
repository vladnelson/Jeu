//-----------------------------------------------------------------------------------------------------
//Déclarations des variables
//-----------------------------------------------------------------------------------------------------
var ancienmot=""; //L'ancien mot avant de faire nouvelle partie
var lemot=""; //Le mots qui doit etre trouver
var lesMots=['carte','bouche','vladimir','ice','cerf-volant']; //Un tableau de mot 
var bool = true; //Le boolean qui permet de savoir si c'est l'init(true) ou New Partie(false)

//-----------------------------------------------------------------------------------------------------
//Evenements lors du chargement de la page
//-----------------------------------------------------------------------------------------------------
window.onload = function() {
//-----------------------------------------------------------------------------------------------------
//Les sélecteurs
//-----------------------------------------------------------------------------------------------------
  var nbrc =document.getElementById("NChance"); // Le compteur de chance 
  var btnNewPartie = document.getElementById("btnpendu"); //Le bouton Nouvelle partie du pendu 
  var SaisieJouer= document.getElementById("InputJouer"); //L'input de jeu
  var errorJouer= document.getElementById("ErrorMessage"); //Message d'erreur à propos des saisie de jouer
  var btnJouer=document.getElementById("BtnJouer"); //Bouton jouer
//-----------------------------------------------------------------------------------------------------
//Evenement sur le bouton Nouvelle partie
//-----------------------------------------------------------------------------------------------------
  btnNewPartie.addEventListener("click",function()
  {
    var un=parseInt(GenereNbrAleatoire(0,5)); // On convertit le nombre aléatoire en entier
    lemot=lesMots[un];// On stocke dans la variable un des mot de la liste
    console.log(lemot);
    if(bool==true)
    {
      bool=false;// L'intitiation a été faite
    
      CreationInput(lemot);
    }
    else{
      SuppressionInput(ancienmot)
      CreationInput(lemot);
    
    }
  });
//-----------------------------------------------------------------------------------------------------
//Evenement à chaque rentrer dans l'input Jouer
//-----------------------------------------------------------------------------------------------------
SaisieJouer.addEventListener("input",function()
{
  var myRegex = /^[A-Za-z]+$/;
 if(myRegex.test(SaisieJouer.value))
 {
   SaisieJouer.value=SaisieJouer.value.toUpperCase();
   errorM.remove();
 }
 else
 {
   var error = SaisieJouer.value;
   InitSaisieJouer("InputJouer");
   if(!(error==" "||error==""))
   {
      errorJouer.innerHTML="<a id='errorM'>Vous ne pouvez pas utiliser le caractère "+error+" .</a>";
      document.getElementById("errorM").style.color='red';
   }
 }
});
//-----------------------------------------------------------------------------------------------------
//Evenement clique sur le bouton jouer
//-----------------------------------------------------------------------------------------------------
btnJouer.addEventListener("click",function()
{
 for(d=0;d<lemot.length;d++)
 {
   var charMot= lemot[d].toUpperCase();
  if(charMot==SaisieJouer.value)
  {
    document.getElementsByName("ensembleI")[d].value=charMot;
    InitSaisieJouer("InputJouer");
  }
 }
});
} 
//-----------------------------------------------------------------------------------------------------
// Fonction pour générer un nombre aléatoire entre min et max
//-----------------------------------------------------------------------------------------------------
    function GenereNbrAleatoire(min, max) 
    {
      return Math.random() * (max - min) + min;
    }

//-----------------------------------------------------------------------------------------------------
// Fonction pour afficher l'enplacement d'entrée d'un mot
//-----------------------------------------------------------------------------------------------------
    function CreationInput(unMot)
    {
      ancienmot=unMot;
      for(var i=0;i<unMot.length;i++)
      {
        if (unMot[i] == '-')
        {
          document.getElementById("lesinputs").innerHTML+="<div class='input-field col s1' name='ensemble'><a></a></div>"
        }
        else
        {
          document.getElementById("lesinputs").innerHTML+="<div class='input-field col s1' name='ensemble'><input name='ensembleI' type='text' /></div>"
        }
      }
    }

//-----------------------------------------------------------------------------------------------------
//Fonction pour effacer l'emplacement des entrées des mots
//-----------------------------------------------------------------------------------------------------
    function SuppressionInput(unMot)
    {
      for(var j=1;j<unMot.length+1;j++)
      {
        var c=unMot.length-j;
        document.getElementsByName("ensemble")[c].remove();
      }
    }

//-----------------------------------------------------------------------------------------------------
//Fonction pour initialiser l'input jouer à blanc
//-----------------------------------------------------------------------------------------------------
    function InitSaisieJouer(ObjectInit)
    {
      document.getElementById(ObjectInit).value="";
    }
  