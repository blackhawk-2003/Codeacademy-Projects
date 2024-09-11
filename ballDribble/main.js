let ball = document.getElementById('float-circle');

// Write your code below

let up= function(event){
    console.log(event.key);
    if(event.key === 'ArrowUp'){
        ball.style.bottom='250px';
    }

}

let down= function(){
  ball.style.bottom='50px';
}

document.addEventListener('keydown',up);
document.addEventListener('keyup',down);