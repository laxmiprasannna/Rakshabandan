document.addEventListener('scroll', () => {
    const card = document.querySelector('.card');
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Trigger when 80% of the screen is shown

    // This is a simple animation on scroll.
    // When the card is in view, we can add a class to animate it.
    if (cardPosition < screenPosition) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    } else {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
    }
});