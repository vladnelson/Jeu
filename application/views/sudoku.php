<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('header');
?>


<div id="FrameSudoku" class="container">
    <h2>SUDOKU </h2>
    <a><input class="btn red " type="button" value="Nouvelle Partie"  > </a> 

    <table>

    <?php
    for ($i=0; $i <3; $i++) { 
     ?>
        <tr>
            <?php 
            for ($j=0; $j <3 ; $j++) { 
            ?>
                <td>
                <table id="lescarres">
                    <?php
                    for($a=0;$a<3;$a++){

                    ?>
                    <tr>
                    <?php
                    for($b=0;$b<3;$b++){

                    ?> 
                        <td>
                        <input type="text" name="<?php echo  "Tc".($j+1)."Tl".($i+1)."C".($b+1)."L".($a+1) ?>+" id="b">
                        </td>

                        <?php 
                         } 
                    ?>
                    </tr>

                    <?php 
                         } 
                    ?>
                </table>
                </td>
            <?php
            }
            ?>
       
       
    </tr>

     <?php
       
    }
    ?>
       

    </table>

</div>

<?php
$this->load->view('footer');
?>