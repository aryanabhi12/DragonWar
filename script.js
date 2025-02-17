
score=0;
cross=true;

audio=new Audio('music.mp3');
audiogo=new Audio('gameover.wav');

audio.play();




//Dino movements
document.onkeydown=function(e){
    console.log("Key code is ",e.keyCode);
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },1100); 
    }

    if(e.keyCode==39)
        {
            dino=document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left=dinoX+150+"px";
        }

      
    if(e.keyCode==37)
        {
            dino=document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left=dinoX-112+"px";
        }  
}

// Collision checking
setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');

    // Dino coordinates
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    // Obstacle coordinates
    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    console.log(`Obstacle Position: ${ox}, ${oy}`);
    
    // Checking the difference
    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    //console.log(`Offsets: X=${offsetX}, Y=${offsetY}`);
    
    // Collision detection
    if (offsetX < 113 && offsetY < 50) { // Adjusted Y threshold for better accuracy
        gameOver.innerHTML='Game Over- Relod to start again';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        audio.pause();

    }

    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>
        {
            cross=true;
        },1000);
        setTimeout(()=>
        {
            
        aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur= 0.1;
        obstacle.style.annimationDuration=newDur +'s';
        },500);
    }

}, 10);



function updateScore(score){
    let scoreC = document.querySelector('.scoreC');
    scoreC.innerHTML="Your Score: "+score;
}
