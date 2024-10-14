const gradientEffectElement = document.querySelector('.mouse-cursor-gradient-tracking');

gradientEffectElement.addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gradientEffectElement.style.setProperty('--x', x + 'px');
    gradientEffectElement.style.setProperty('--y', y + 'px');
});