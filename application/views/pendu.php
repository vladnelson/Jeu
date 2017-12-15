<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('header');
?>
<a><input id="btnpendu" class="btn red " type="button" value="Nouvelle Partie"  > </a> 
<div class="container">
    <div class="row">
        <div id="FramePendu1" >
            <table id="tab1">
             <tr>
                <td> Nombre de chance :</td>
                <td></td>
            </tr>
            <tr>
                <td>Manque</td>
                <td></td>
            </tr>
            </table> 
        </div>
        <div  class='col s9'> 
            <div id="lesinputs" class='row'> 
        </div>  
        <div id="LesAlphabet">
        </div>
        
    </div>
        <!-- Code pour récupérer le mot aléatoire -->
        <!-- <?php
        $handle = $name['full_path'];// on attribue le fichier a une variable
        $fichier=file_get_contents($handle); //On ouvre le fichier 
        
        ?> -->
        <!-- Code pour générer le mot aléatoire -->
        
        <!---->
       
        <div id="FramePendu1" class="container">
            <div class="row" >
                <div>
                    <p> Chance : <a id="NChance">7</a></p>
                 
                </div>
            </div>
        </div>  
    </div>
</div>

<?php
$this->load->view('footer');
?>