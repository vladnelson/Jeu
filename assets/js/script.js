//-----------------------------------------------------------------------------------------------------
//Déclarations des variables
//-----------------------------------------------------------------------------------------------------
var ancienmot=""; //L'ancien mot avant de faire nouvelle partie
var lemot=""; //Le mots qui doit etre trouver
var lesMots=['carte','bouche','vladimir','ice','voiture','argent','plan','wiscande','darvine','otaria']; //Un tableau de mot 
var IsInit = true; //Le boolean qui permet de savoir si c'est l'init(true) ou New Partie(false)
//-----------------------------------------------------------------------------------------------------
//Evenements lors du chargement de la page
//-----------------------------------------------------------------------------------------------------
window.onload = function() {
//-----------------------------------------------------------------------------------------------------
//Les sélecteurs
//-----------------------------------------------------------------------------------------------------
  var nbrc =document.getElementById("NChance"); // Le compteur de chance 
  var btnNewPartie = document.getElementById("btnpendu"); //Le bouton Nouvelle partie du pendu 
//-----------------------------------------------------------------------------------------------------
//Evenement sur le bouton Nouvelle partie
//-----------------------------------------------------------------------------------------------------
  btnNewPartie.addEventListener("click",function()
  {
    var un=parseInt(GenereNbrAleatoire(0,lesMots.length)); // On convertit le nombre aléatoire en entier
    lemot=lesMots[un];// On stocke dans la variable un des mot de la liste
    console.log(lemot);
    if(IsInit==true)
    {
      IsInit=false;// L'intitiation a été faite
      CreationInput(lemot);
    }
    else{
      SuppressionInput(ancienmot)
      CreationInput(lemot);
    
    }
  });
//-----------------------------------------------------------------------------------------------------
//Evenement sur les boutons de l'alphabet
//-----------------------------------------------------------------------------------------------------
  document.getElementById("LesAlphabet").addEventListener("click",function(e)
  {
    var laTouche = e.target.innerHTML;
    var toucheSelectionner=document.getElementById(laTouche);
    var IsTrouver=false;
    toucheSelectionner.classList.remove('grey');
    for (var x = 0; x < lemot.length; x++)
    {
      if(lemot[x].toUpperCase()==laTouche)
      {
        toucheSelectionner.classList.add('green');
        IsTrouver=true;
        document.getElementsByName("ensembleI")[x].value=laTouche;
      }
    }
    if(IsTrouver==false)
    {
      toucheSelectionner.classList.add('red');
      nbrc.innerHTML=parseInt(nbrc.innerHTML)-1;
    }
    IsTrouver=false;
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
    function CreationInput(_unMot)
    {
      var _nbrc =document.getElementById("NChance");
      var _lesInputsSaisies = document.getElementById("lesinputs");
      var _lesBoutonsAlphabets =document.getElementById("LesAlphabet");
      var _codeAlphat=65;
      ancienmot=_unMot;
      
      //Boucle jusqu'a la fin de la taille du mot
      for(var i=0;i<_unMot.length;i++)
      {
        if (_unMot[i] == '-')
        {
          _lesInputsSaisies.innerHTML+="<div class='input-field col s1' name='ensemble'><a></a></div>"
        }
        else
        {
          _lesInputsSaisies.innerHTML+="<div class='input-field col s1' name='ensemble'><input name='ensembleI' type='text' readonly/></div>"
        }
      }

      //Boucle jusqu'a la fin des nombres de l'alphabet
      for(var c=0;c<26;c++ )
      { 
        _lesBoutonsAlphabets.innerHTML+="<a class='btn-floating btn-large waves-effect waves-light grey' id='&#"+(_codeAlphat+c)+"' name='LesAlphats'  >&#"+(_codeAlphat+c)+"</a>";
      } 
      _nbrc.innerHTML=7;     
    }

//-----------------------------------------------------------------------------------------------------
//Fonction pour effacer l'emplacement des entrées des mots
//-----------------------------------------------------------------------------------------------------
    function SuppressionInput(_unMot)
    {
      var _lesInputsSaisies = document.getElementsByName("ensemble");
      var _lesButtonsAlphab = document.getElementsByName("LesAlphats");
      for(var j=1;j<_unMot.length+1;j++)
      {
        var c=_unMot.length-j;
        _lesInputsSaisies[c].remove();
      }
      for(var h=1;h<26+1;h++)
      {
        var d=26-h;
        _lesButtonsAlphab[d].remove();
      }
    }
