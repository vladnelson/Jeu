<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('header');
?>

 <div class="row">
    <div class="col s4 m2 l3">
        <!-- Promo Content 2 goes here -->
    </div>
    <div class="col s4 m2 l3">
         <a><input id="btnpendu" class="btn red " type="button" value="Nouvelle Partie F8"  > </a>
    </div>
    <div class="col s4 m2 l3">
        <!-- Promo Content 2 goes here -->
    </div>
 </div>
<div class="container">
    <div class="row">
        <div class="col s12">

            <div class="col s6">
                <div id="FramePendu1" >
                    
                    <div id="lesinputs" class='row'></div>  
                    <div id="LesAlphabet"></div> 
                </div>
            </div>

            <div class="col s6">
                <div id="FramePendu1" class="container">
                    <div class="row" >
                        <div>
                            <p> Chance : <a id="NChance"></a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<?php
$this->load->view('footer');
?>