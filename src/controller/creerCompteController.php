<?php
require_once '../model/db.php';

if(isset($_POST['creerCompteSubmit'])){
    extract($_POST);
   // var_dump($_POST);
     //   die;
    /* ["numagence"]=> string(8) "def2322u
*/ 

    if($compteChoisi=='1'){
        
    $fraisOuv = (float)$frais;
    $sdl="insert into comptefrais (`id`, `NumeroAgence`, `numeroCompte`, `cleRIB`, 
    `DateOuverture`, `MontantInitial`, `FraisOuverture`) values(null,'$numagence','$numcompte','$rib','$date',$montant0,$frais)";
     $a=$db->exec($sdl);
     if($a){
        echo 'les donnees sont entres dans la table';
     }else{
         echo 'les donnees ne sont pas envoyer';
     }
    }else{
    if($compteChoisi=='3'){

        $sdl="insert into comptefrais(`id`, `NumeroAgence`, `numeroCompte`, `cleRIB`, `DateOuverture`, `MontantInitial`, `FraisOuverture`, `DateBloquage`, `DateDebloquage`) VALUES(null,'$numagence','$numcompte','$rib','$date',$montant0,$frais,'$date1','$date2')";
        $a=$db->exec($sdl);
        if($a){
            echo 'le compte est inserer';
        }else{
            echo "le compte n'est pas inserer";
        }
    }
}
    if($compteChoisi=='2'){
        $sdl="insert into compteagios(`id`, `NumeroAgence`, `NumeroCompte`, `CleRIB`, `DateOuverture`, `MontantInitial`, `Agios`) values(null,'$numagence','$numcompte','$rib','$date',$montant0,$agios)";
        $a=$db->exec($sdl);
        if($a){
            echo "le compte est inserer";
        }else{
            echo "le compte n'est pas inserer";
        }
    }
}