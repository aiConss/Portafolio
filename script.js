const canvas = document.getElementById("snow");
const ctx = canvas.getContext('2d');
let width, height;
let snowflakes;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.documentElement.scrollHeight; 
    createSnowflakes(); // Volver a crear los copos de nieve al redimensionar
}

function createSnowflakes() {
    snowflakes = Array.from({ length: Math.ceil(height / 5) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random()
    }));
}

function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.y += snowflake.speed;
        if (snowflake.y > height) {
            snowflake.y = -snowflake.radius;
            snowflake.x = Math.random() * width;
        }
    });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, width, height);
    snowflakes.forEach(snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
        ctx.fill();
    });
}

function animate() {
    updateSnowflakes();
    drawSnowflakes();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize); 
window.addEventListener('scroll', resize); 
resize();
animate();

function toggleSection(id) {
    
    const element = document.getElementById(id);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    } else {
        element.classList.add('visible');
    }
}
