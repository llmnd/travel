function validate() {
      
  var nom = document.getElementById("nom");
  var prenom = document.getElementById("prenom");
  var selection = document.getElementById("selection");
  
       if( nom.value == "" ) {
          alert( "S'il vous plaît, veuillez entrer votre NOM" );
          document.FormValid.nom.focus() ;
          return false;
       }
       
       if( prenom.value == "" )
       {
          alert( "S'il vous plaît, veuillez entrer votre PRENOM" );
          document.FormValid.prenom.focus() ;
          return false;
       }
       
   if( selection.value == "-1" )
       {
          alert( "S'il vous plaît, veuillez choisir votre CIVILITÉ" );
          document.FormValid.selection.focus() ;
          return false;
       }
   
   if( document.FormValid.email.value == "" )
       {
          alert( "S'il vous plaît, veuillez entrer votre E-MAIL" );
          document.FormValid.email.focus() ;
          return false;
       }
   
   if( document.FormValid.message.value == "" )
       {
          alert( "S'il vous plaît, veuillez entrer votre MESSAGE" );
          document.FormValid.message.focus() ;
          return false;
       }
   
       return( true );
    }
  
function radioValidation(){

      var radPro = document.getElementsByName("radPro");
      var radProValue = false;

      for(var i=0; i<radPro.length;i++){
          if(radPro[i].checked == true){
              radProValue = true;    
          }
      }
      if(!radProValue){
          alert("Veuillez entrer votre perso");
          return false;
      }

  }