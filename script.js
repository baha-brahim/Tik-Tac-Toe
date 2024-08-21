window.addEventListener('load', () => {
    const player1 = document.querySelector('.player1');
    const vs = document.querySelector('.vs-container');
    const player2 = document.querySelector('.player2');
    
    setTimeout(() => {
        player1.classList.remove('hidden');
        player1.classList.add('player1-animation');
    }, 600);

    setTimeout(() => {
        vs.classList.remove('hidden');
        vs.classList.add('vs-animation');
    }, 1200);
    
    setTimeout(() => {
        player2.classList.remove('hidden');
        player2.classList.add('player2-animation');
    }, 2000);
});
