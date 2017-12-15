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
      var nomAlphat=65;
      ancienmot=unMot;
      for(var i=0;i<unMot.length;i++)
      {
        if (unMot[i] == '-')
        {
          document.getElementById("lesinputs").innerHTML+="<div class='input-field col s1' name='ensemble'><a></a></div>"
        }
        else
        {
          document.getElementById("lesinputs").innerHTML+="<div class='input-field col s1' name='ensemble'><input name='ensembleI' type='text' readonly/></div>"
        }
      }
      for(var c=0;c<26;c++ )
      {
        
        document.getElementById("LesAlphabet").innerHTML+="<a class='btn-floating btn-large waves-effect waves-light grey' id='&#"+(nomAlphat+c)+"' name='LesAlphats'  >&#"+(nomAlphat+c)+" </a>";
        //document.getElementsByName("LesAlphats")[c].style.fontSize='15px';
        
      }
      document.getElementById("LesAlphabet").addEventListener("click",function(e)
      {
        var laTouche = e.target.innerHTML;
        console.log(parseInt(laTouche.length));
        console.log(laTouche.substring(0,1));
        console.log(laTouche.substring(1,1));
        var l=document.getElementById(laTouche.substring(0,1));
        console.log(l);
        l.classList.remove('grey');
      });
      
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
