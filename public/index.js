function code(){
     var img = document.getElementsByTagName("img");
    var pic = document.getElementById("gallary");
     var codey = '';


    
     
     for(i=0;i<img.length;i++){

        
       if(img[i].click ){
            console.log("True");
      //    var imgcode = img[i].alt;
        
        // var codey = codey+ imgcode;
          //console.log(codey);
         // document.getElementById('code1').innerHTML = codey;
          }
          else{
              
              console.log("False");
          }
     }

    
};
