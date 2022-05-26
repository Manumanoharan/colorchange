 

var input=document.getElementsByClassName('color');
console.log(input);
for(i=0;i<input.length;i++){
    input[i].addEventListener('keyup',colorchange);
}

function colorchange(event){
    textcolor=event.target.value;
   event.target.style.color=textcolor;
}

