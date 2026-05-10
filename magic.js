const heart = document.getElementById('main-heart');

document.addEventListener('mousemove', (e) => {
    if (heart) {
        heart.style.left = (e.clientX - 20) + 'px';
        heart.style.top = (e.clientY - 20) + 'px';
    }

    const spark = document.createElement('div');
    spark.style.cssText = `
        position: fixed; left: ${e.clientX}px; top: ${e.clientY}px;
        width: 6px; height: 6px; background: #d4af37;
        border-radius: 50%; pointer-events: none; z-index: 9999;
    `;
    document.body.appendChild(spark);

    const destX = e.clientX + (Math.random() - 0.5) * 120;
    const destY = e.clientY + (Math.random() - 0.5) * 120;

    spark.animate([
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: `translate(${destX - e.clientX}px, ${destY - e.clientY}px) scale(0)` }
    ], { duration: 1000 }).onfinish = () => spark.remove();
});

document.addEventListener('mousedown', () => {
    if (heart) heart.style.transform = 'rotate(-45deg) scale(0.7)';
});
document.addEventListener('mouseup', () => {
    if (heart) heart.style.transform = 'rotate(-45deg) scale(1)';
});