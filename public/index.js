let string = "";
let codeString = "";
let maxlength = 40;

document.querySelectorAll('.image').forEach((element,index) => {
     element.addEventListener('click',(event)=>{
       
          
          if(string.length<maxlength){

               subcode = (event.target.id);
               codeString = codeString.concat(subcode);

               
                    let appendCode = document.createElement('p');
                    appendCode.innerHTML = codeString;
                    document.querySelector('.code1').appendChild(appendCode);
               
               
              
               console.log(index);
             
               let image = document.createElement('img');
               image.src = element.src;
               document.querySelector('.code-img').appendChild(image);

               string = string + codeString;
                 
          }
          codeString = "";
     })
})


//Reset Button
document.querySelector('.btn').addEventListener('click',(event) => {
     window.location.reload();
})
