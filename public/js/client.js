    // LE CLIENT CHOISI
    // var typeClientChoisi = 0;
    var clientChoisi = document.getElementById("clientChoisi");

    //
    var validation=document.getElementById("envoyer");
    var nomclient=document.getElementById("nomclient");
    var prenomclient=document.getElementById("prenomclient");
    var adresseclient=document.getElementById("adresseclient");
    var emailclient=document.getElementById("emailclient");
    var phoneclient=document.getElementById("phoneclient");
    var professionclient=document.getElementById("professionclient");
    var cni=document.getElementById("numident");
    var date=document.getElementById("datenais");
    var salaireclient=document.getElementById("salaireclient");
    var cni1=document.getElementById("idcli");
    var nommoral=document.getElementById("moral");
    var rais=document.getElementById("raismoral");
    var telemoral=document.getElementById("telemoral");
    var adres=document.getElementById("adresmoral");
    var ninea=document.getElementById("ninea");
    var email=document.getElementById("emailmoral");
    var num1=document.getElementById("nom_manquant");
    var num2=document.getElementById("prenom_manquant");//permet de recuperer le message a afficher s'il y'a
    var num3=document.getElementById("adresse_manquant");// erruer.
    var num4=document.getElementById("phone_manquant");
    var num5=document.getElementById("cni_manquant");
    var num6=document.getElementById("date_manquant");
    var num8=document.getElementById("idcli_manquant");
    var num7=document.getElementById("sal_manquant");
    var num10=document.getElementById("moral_manquant");
    var num11=document.getElementById("rais_manquant");
    var num12=document.getElementById("tel_manquant");
    var num13=document.getElementById("adres_manquant");
    var num14=document.getElementById("ninea_manquant");
    var num15=document.getElementById("ema_manquant");
    var email1=document.getElementById("email_manquant");
    var mail=/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;//Controler le champ par une regex avec la methode
    var pseudo=/[a-zA-ZéèÉÈ]/;                               // test qui verifie la prsence des carractére
    var tel=/[0-9]/;
    function cache(e){
        document.getElementById("nom").style.display="none";
        document.getElementById("second").style.display="none";
        document.getElementById("four").style.display="none";
        
     }
       var nouv=document.getElementById("nouveau");
       nouv.addEventListener("click" ,vise);
         function vise(e){
          // e.preventDefault();
          clientChoisi.value = document.getElementById("nouveau").value;
           document.getElementById("nom").style.display="";
           document.getElementById("second").style.display="none";
           document.getElementById("four").style.display="none";
           clientId.style.display="none";
           employe.style.display="none";
           morale.style.display="none";
           validation.addEventListener('click',f_valid);
           function f_valid(e){
            //  e.preventDefault();
             if(nomclient.value==""){
               num1.textContent="le nom est obligatoire";
               num1.style.color="red";
             }
             if(prenomclient.value==""){
               num2.textContent="le prenom est obligatoire";
               num2.style.color="red";
             }
             if(adresseclient.value==""){
               num3.textContent="l'adresse est obligatoire";
               num3.style.color="red";
             }
             if(phoneclient.value==""){
               num4.textContent="telephone  obligatoire";
               num4.style.color="red";
             }
             if(cni.value==""){
               num5.textContent="le cni est obligatoire";
               num5.style.color="red";
             }
             if(date.value==""){
               num6.textContent="la date de naissance est obligatoire";
               num6.style.color="red";
             }
             else{
               alert("le formulaire est envoyer");
             }
           }
         }

         var clientId=document.getElementById("clientid");
          clientId.addEventListener("click" , vise1);
           function vise1(e){
            clientChoisi.value = document.getElementById("clientid").value;
             document.getElementById("second").style.display="";
             document.getElementById("nom").style.display="none";
             document.getElementById("four").style.display="none";
             employe.style.display="none";
             morale.style.display="none";
             nouv.style.display="none";
             validation.addEventListener('click',g_valid);
             function g_valid(e){
              //  e.preventDefault();
               if(cni1.value==""){
               num8.textContent="veuillez saisir le numero d'identification";
               num8.style.color="red";
               }
               else{
                 alert("le formulaire est envoyer");
               }
             }
           }
        
           var employe=document.getElementById("clientemploy");
              employe.addEventListener("click",vise2);
               function vise2(e){
                clientChoisi.value = document.getElementById("clientemploy").value;
                 document.getElementById("second").style.display="none";
                 document.getElementById("nom").style.display="";
                 document.getElementById("four").style.display="";
                 morale.style.display="none";
                 nouv.style.display="none";
                 clientId.style.display="none";
                 validation.addEventListener('click',h_valid);

                 function h_valid(e){
                  //  e.preventDefault();
                   if(nomclient.value==""){
                    num1.textContent="le nom est obligatoire";
                    num1.style.color="red";
                  }
                  if(prenomclient.value==""){
                    num2.textContent="le prenom est obligatoire";
                    num2.style.color="red";
                  }
                  if(adresseclient.value==""){
                    num3.textContent="l'adresse est obligatoire";
                    num3.style.color="red";
                  }
                  if(phoneclient.value==""){
                    num4.textContent="telephone est obligatoire";
                    num4.style.color="red";
                  }
                  if(cni.value==""){
                    num5.textContent="le cni est obligatoire";
                    num5.style.color="red";
                  }
                  if(date.value==""){
                    num6.textContent="la date de naissance est obligatoire";
                    num6.style.color="red";
                  }
                  if(salaireclient.value==""){
                    num7.textContent="renseigner votre salaire";
                    num7.style.color="red";
                  }
                  if(nommoral.valu==""){
                    num10.textContent=" renseigner le nom  de l'employeur";
                    num10.style.color="red";
                  }
                  if(rais.vaslue==""){
                    num11.textContent="remplir ce champ";
                    num11.style.color="red";
                  }
                  
                  if(adres.value==""){
                    num13.textContent="renseigner l'adresse de l'employeur";
                    num13.style.color="red";
                  }
                  if(ninea.value==""){
                    num14.textContent="renseigner le ninea de l'entreprise";
                    num14.style.color="red";
                  }
                  else{
                    alert("le formulaire est envoye");
                  }
                 }
               }

               var morale=document.getElementById("clientmoral");
                morale.addEventListener("click",vise3);
                function vise3(e){
                  clientChoisi.value = document.getElementById("clientmoral").value;
                  document.getElementById("second").style.display="none";
                  document.getElementById("nom").style.display="none";
                  document.getElementById("four").style.display="";
                  nouv.style.display="none";
                  clientId.style.display="none";
                  morale.style.display="none";
                  validation.addEventListener('click',t_valid);
                  function t_valid(e){
                    if(nommoral.valu==""){
                      num10.textContent=" renseigner le nom  de l'employeur";
                      num10.style.color="red";
                    }
                    if(rais.vaslue==""){
                      num11.textContent="remplir ce champ";
                      num11.style.color="red";
                    }
                    if(telemoral.value==""){
                      num12.textContent="renseigner le telephone de l'employeur";
                      num12.style.color="red";
                    }
                    if(adres.value==""){
                      num13.textContent="renseigner l'adresse de l'employeur";
                      num13.style.color="red";
                    }
                    if(ninea.value==""){
                      num14.textContent="renseigner le ninea de l'entreprise";
                      num14.style.color="red";
                    }
                    if(email.value==""){
                      num15.textContent="veuillez renseigner l'email";
                      num15.style.color="red";
                    }
                    else{
                      alert("le formulaire est envoye");
                    }
                  }
                }

            