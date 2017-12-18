//-----------------------------------------------------------------------------------------------------
//Déclarations des variables
//-----------------------------------------------------------------------------------------------------
var ancienmot=""; //L'ancien mot avant de faire nouvelle partie
var lemot=""; //Le mots qui doit etre trouver
var lesMots=['carte','bouche','alfred','ice','voiture','argent','robin','batman','doranco','ottayah']; //Un tableau de mot 
var IsInit = true; //Le boolean qui permet de savoir si c'est l'init(true) ou New Partie(false)
var keys={};
var NChance = 7;
//-----------------------------------------------------------------------------------------------------
//Evenements lors du chargement de la page
//-----------------------------------------------------------------------------------------------------
window.onload = function() {
//-----------------------------------------------------------------------------------------------------
//Les sélecteurs
//-----------------------------------------------------------------------------------------------------
  var btnNewPartie = document.getElementById("btnpendu"); //Le bouton Nouvelle partie du pendu 
  var lesBtnAlphas=document.getElementById("LesAlphabet"); //Les boutons des lettres de l'alphabets
//-----------------------------------------------------------------------------------------------------
//Evenement sur le bouton Nouvelle partie
//-----------------------------------------------------------------------------------------------------
  btnNewPartie.addEventListener("click",function()
  {
    NewPartie() 
  });
//-----------------------------------------------------------------------------------------------------
//Evenement sur les boutons de l'alphabet
//-----------------------------------------------------------------------------------------------------
lesBtnAlphas.addEventListener("click",function(e)
  {
    var laTouche = e.target.innerHTML;
    AppuieTouche(laTouche);
    
  });
//-----------------------------------------------------------------------------------------------------
//Evenement sur les boutons de l'alphabet
//-----------------------------------------------------------------------------------------------------
window.addEventListener("keydown",function(e)
{
  v=e || event;
  v.IsUp=e.which ||e.keyCode;

  keys[v.IsUp]=e.type==='keydown';

  if(keys[16])
  {
    NewPartie();
    keys[16]=false;
  }
  var laTouche=e.key.toUpperCase();
  AppuieTouche(laTouche);
  
});
} 

//-----------------------------------------------------------------------------------------------------
// Fonction pour générer une nouvelle partie
//-----------------------------------------------------------------------------------------------------
function NewPartie()
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
}

//-----------------------------------------------------------------------------------------------------
// Fonction lorsqu'on sélection une touche ou un clique 
//-----------------------------------------------------------------------------------------------------
function AppuieTouche(laTouche)
{
  var nbrc =document.getElementById("NChance"); // Le compteur de chance 
  var toucheSelectionner=document.getElementById(laTouche);
  var IsTrouver=false;
  var IsPlein=true;
  var InputSelectionner= document.getElementsByName("ensembleI");
  var _nbChance=parseInt(nbrc.innerHTML);
  
  if(_nbChance>0)
  {
    if(toucheSelectionner!=null)
    {
      
      toucheSelectionner.classList.remove('grey');
      for (var x = 0; x < lemot.length; x++)
      {
        if(lemot[x].toUpperCase()==laTouche)
        {
          toucheSelectionner.classList.add('green');
          IsTrouver=true;
          InputSelectionner[x].value=laTouche;
        }
        if(InputSelectionner[x].value=="")
        {
          IsPlein=false;
        }
      }
      if(IsTrouver==false )
      {
        toucheSelectionner.classList.add('disableB');
        //toucheSelectionner.classList.add('red');
        NChance--;
        nbrc.innerHTML=NChance;
        if(NChance ==0)
        {
          setTimeout(function(){alert("You lose !!");},1);
          
        }
      }
      if(IsPlein==true)
      {
        setTimeout(function(){alert("Vous avez gagner !");},1); // Asynchrone
        
        NChance=7;
      }
    }
  }
  else
  {
    
    console.log("c fini");
    NChance=7;
  }
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
      _nbrc.innerHTML=NChance;     
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
