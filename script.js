let snake = document.querySelector('.snake');
let currentPositionX = 0;
let currentPositionY = 0;

window.addEventListener('keydown', (event) => {
    if(event.key === "ArrowDown") {
        console.log('you clicked down');

        currentPositionY += 2;

       
        console.log(currentPositionY);
    }

    if(event.key === "ArrowUp") {
        console.log('you clicked up');

        currentPositionY -= 2;

       
        console.log(currentPositionY);
    }
   
    if(event.key === 'ArrowLeft') {
        console.log('you clicked left');
    
        currentPositionX -= 2;
        
        
        console.log(currentPositionX);
    }

    if(event.key === 'ArrowRight') {
        console.log('you clicked right');
    
        currentPositionX += 2;
        
      
        console.log(currentPositionX);
    }
    snake.style.transform = `translate(${currentPositionX}rem, ${currentPositionY}rem)`;
});


let point = document.querySelector('.point');
point.style.transform = 'translate(20rem, 20rem)'

let randomPlacePoint = () => {

    let XCord = Math.floor(Math.random() * 64);
    let YCord = Math.floor(Math.random() * 46)

    point.style.transform = `translate(${XCord}rem, ${YCord}rem)`;
}

// setInterval(() => {
//     randomPlacePoint();
// }, 5000);

// let pointIntersect = point.getBoundingClientRect();
// let snakeIntersect = snake.getBoundingClientRect();
let options = {
    threshold: 1.0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry);
    randomPlacePoint();
     
      }
    });
  }, options);

 
    observer.observe(point);
    // observer.observe(snake);
