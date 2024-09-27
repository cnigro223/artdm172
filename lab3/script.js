const mousePositionDisplay = document.getElementById('mouse-position');
const animatedCard = document.getElementById('animated-card');

document.addEventListener('mousemove', (event) => {
    mousePositionDisplay.textContent = `Focus your energy: X: ${event.clientX}, Y: ${event.clientY}`;
});


document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;


    animatedCard.style.transform = `translateY(${y - 60}px) translateX(${x - 50}px)`;
    animatedCard.style.opacity = 1; 
    console.log(`Current position of animated card is X: ${x}, Y: ${y}`);

    
    
}, false);
