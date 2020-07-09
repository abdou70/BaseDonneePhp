var validation=document.getElementById("envoyer");

var compteChoisi=document.getElementById("compteChoisi");

var xewel=document.getElementById("xewel");
var courant=document.getElementById("courant");
var bloque=document.getElementById("bloque");
var numagence=document.getElementById("numagence");
var numcompte=document.getElementById("numcompte");
var rib=document.getElementById("rib");
var date=document.getElementById("date");
var montant0=document.getElementById("montant0");
var frais=document.getElementById("frais");
var agios=document.getElementById("agios");
var date1=document.getElementById("date1");
var date2=document.getElementById("date2");
var num1=document.getElementById("num_manquant");
var num2=document.getElementById("compte_manquant");//permet de recuperer le message a afficher s'il y'a
var num3=document.getElementById("rib_manquant");// erruer.
var num4=document.getElementById("date_manquant");
var num5=document.getElementById("frais_manquant");
var num6=document.getElementById("agios_manquant");
var num7=document.getElementById("date1_manquant");
var num8=document.getElementById("date2_manquant");


   function invisible(e){
     document.getElementById("compte").style.display="none";
     document.getElementById("ouv").style.display="none";
     document.getElementById("cour").style.display="none";
     document.getElementById("bloq").style.display="none";
 }

  xewel.addEventListener("click", vue);
  function vue(e){
    compteChoisi.value=document.getElementById("xewel").value;
    document.getElementById("compte").style.display="";
     document.getElementById("ouv").style.display="";
     document.getElementById("cour").style.display="none";
     document.getElementById("bloq").style.display="none";
     courant.style.display="none"
     bloque.style.display="none";
  console.log(" louuu khew");
     validation.addEventListener("click", g_valid);
      function g_valid(e){
          //e.preventDefault();
        if(numagence.value==""){
           // e.preventDefault();
            num1.textContent="le numero d'agence est obligatoire";
            num1.style.color="red";
        }  
        if(numcompte.value==""){
            //e.preventDefault();
            num2.textContent="le numero de compte est obligatoire";
            num2.style.color="red";
        }  
        if(rib.value==""){
           // e.preventDefault();
            num3.textContent="RIB de compte est obligatoire";
            num3.style.color="red";
        }
        if(date.value==""){
           // e.preventDefault();
            num4.textContent="la date d'ouverture est obligatoire";
            num4.style.color="red";
        }
        if(frais.value==""){
           // e.preventDefault();
            num5.textContent="la date d'ouverture est obligatoire";
            num5.value="";
            num5.style.color="red";
        }
        else{
           // e.preventDefault();
            alert("le formulaire est envoyé");
            return true;
        }
    }
  }
  courant.addEventListener("click", vue1);
  function vue1(e){
    compteChoisi.value=document.getElementById("courant").value ;
    document.getElementById("compte").style.display="";
     document.getElementById("ouv").style.display="none";
     document.getElementById("cour").style.display="";
     document.getElementById("bloq").style.display="none";
     xewel.style.display="none"
     bloque.style.display="none";

     validation.addEventListener("click", f_valid);
        function f_valid(e){
            // e.preventDefault();
            if(numagence.value==""){
              //  e.preventDefault();
                num1.textContent="le numero d'agence est obligatoire";
                num1.style.color="red";
            }  
            if(numcompte.value==""){
              //  e.preventDefault();
                num2.textContent="le numero de compte est obligatoire";
                num2.style.color="red";
            }  
            if(rib.value==""){
              //  e.preventDefault();
                num3.textContent="RIB de compte est obligatoire";
                num3.style.color="red";
            }
            if(date.value==""){
               // e.preventDefault();
                num4.textContent="la date d'ouverture est obligatoire";
                num4.style.color="red";
            }

        if(agios.value==""){
           // e.preventDefault();
            num6.textContent="l'agios d'ouverture est obligatoire";
            num6.style.color="red";
        }
        else{
            //e.preventDefault();
            alert("le formulaire est envoyé");
            return true;
        }
    }
  }
  bloque.addEventListener("click", vue2);
  function vue2(e){
    compteChoisi.value=document.getElementById("bloque").value;
    document.getElementById("compte").style.display="";
     document.getElementById("ouv").style.display="";
     document.getElementById("cour").style.display="none";
     document.getElementById("bloq").style.display="";
     xewel.style.display="none"
     courant.style.display="none";

     validation.addEventListener("click", h_valid);
     function h_valid(e){
      // e.preventDefault();
       if(numagence.value==""){
          // e.preventDefault();
           num1.textContent="le numero d'agence est obligatoire";
           num1.style.color="red";
       }  
       if(numcompte.value==""){
          // e.preventDefault();
           num2.textContent="le numero de compte est obligatoire";
           num2.style.color="red";
       }  
       if(rib.value==""){
           //e.preventDefault();
           num3.textContent="RIB de compte est obligatoire";
           num3.style.color="red";
       }
       if(date.value==""){
          // e.preventDefault();
           num4.textContent="la date d'ouverture est obligatoire";
           num4.style.color="red";
       }
       if(frais.value==""){
          // e.preventDefault();
           num5.textContent="la date d'ouverture est obligatoire";
           num5.style.color="red";
       }
  
       if(date1.value==""){
          // e.preventDefault();
           num7.textContent="la date de bloquage est obligatoire";
           num7.style.color="red";
       }

       if(date2.value==""){
          // e.preventDefault();
           num8.textContent="la date d'ouverture est obligatoire";
           num8.style.color="red";
       }

       else{
           //e.preventDefault();
           alert("le formulaire est envoyé");
           return true;
       }
   }

  }

      
        
        
       

     