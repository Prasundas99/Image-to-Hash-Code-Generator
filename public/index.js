let codeString = "";
let maxlength = 15;

document.querySelectorAll('.image').forEach((element,index) => {
     element.addEventListener('click',(event)=>{
          event.preventDefault();
          if(codeString.length<maxlength){
               subcode = (event.target.id);
               codeString = codeString.concat(subcode);
               let appendCode = document.createElement('p');
               appendCode.innerHTML = codeString;
               document.querySelector('.code1').appendChild(appendCode);
               let image = document.createElement('img');
               image.src = element.src;
               document.querySelector('.code-img').appendChild(image);

          }
     })
})

document.querySelector('.btn').addEventListener('click',(event) => {
     window.location.reload();
})