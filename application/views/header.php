<!DOCTYPE html>
<html lang="fr-fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="<?php echo base_url('assets/css/style.css'); ?>">  
    <script src="<?php echo base_url('assets/js/script.js'); ?>" ></script>
<!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Jeu A</title>
</head>
<body>

<nav class=" brown darken-2" role="navigation">
    <div>
        <ul>
            <li><a href="<?php echo site_url("Welcome")?>">Accueil</a></li>
            <li><a href="<?php echo site_url("Welcome/sudoku")?>">Sudoku</a></li>
            <li><a href="<?php echo site_url("Welcome/pendu")?>">Le pendu</a></li>
            <li><a href="<?php echo site_url("Welcome/incconu")?>">Inconnu</a></li>
        </ul>
    </div>    
</nav>    
