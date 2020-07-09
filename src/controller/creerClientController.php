<?php
require_once '../model/db.php';

// var_dump($_POST['creerClientSubmit']);
// echo("</br>");
if(isset($_POST['creerClientSubmit'])){
    extract($_POST);

   if($clientChoisi=='1'){

   //var_dump($_POST);
    //die;

    
    
     $sql="insert into clientsimple (`id`, `nom`, `prenom`, `adresseclient`, `email1`,`numerotelephone`,
      `profession`,`cni`, `datenaissance`, `salaire`) values(NULL,'$nomclient',
      '$prenomclient','$adresseclient','$emailclient','$phoneclient','$professionclient','$numident',
      '$datenais', $salaireclient)";
     $a = $db->exec($sql);
    //   $tab = [
    //       'nom'=>$nomclient,
    //       'prenom'=>$prenomclient,
    //       'adresseclient'=>$adresseclient,
    //       'e-mail'=>$emailclient,
    //       'numerotelephone'=>$phoneclient,
    //       'profession'=>$professionclient,
    //       'cni'=>$numident,
    //       'datenaissance'=>$datenais
    //     ];
        //$a = $db->prepare($sql)->execute($tab);

        // echo"<br/><br/><br/>";
        // var_dump($sql);
        // $b = $a->execute($tab);
    //     echo"<br/><br/><br/>";
    //  var_dump($tab);

    if($a){
     echo 'le client est inserer';
  }
     else{
     echo 'le client est non inserer';
     }
 } else {
    if($clientChoisi=='3'){
        $salaireclient = (float) $salaireclient;
        $sql="insert into clientsimple (`id`, `nom`, `prenom`, `adresseclient`, `email1`,`numerotelephone`, 
        `profession`,`cni`, `datenaissance`, `salaire`, `nomemployeur`, `raisonsocial`, `telephoneemploy`, 
        `adresseemployeur`, `ninea`, `Email`) values(NULL,'$nomclient','$prenomclient','$adresseclient',
        '$emailclient','$phoneclient','$professionclient','$numident','$datenais', $salaireclient,'$moral',
        '$raismoral','$telemoral','$adresemoral','$ninea','$emailmoral')";
     $a = $db->exec($sql);
     if($a){
        echo 'le client est inserer';
     }
        else{
        echo 'le client est non inserer';
        }
    }
 } if($clientChoisi=='4'){
        //var_dump($_POST);
        // die;

         $sql="insert into clientmoral(`id`, `nom`, `raisonsocial`, `telephone`, `adresse`, `ninea`, `email`)
         values(null,'$moral','$raismoral','$telemoral','$adresemoral','$ninea','$emailmoral')";
         $a= $db->exec($sql);
         if($a){
            echo 'le client est inserer';
        }else{
            echo 'le client est non insrer';
        }

    }
}
?>
