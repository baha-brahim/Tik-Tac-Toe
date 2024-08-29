window.addEventListener('load', () => {
    // Animation for the player1, vs and player2
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

    // Who's going to play
    const players = ["The Bot", "I'm playin"];
    const playerName = document.querySelectorAll('.drop-down-who');
    playerName.forEach((name, index) => {
        var i1 = 0;
        var i2 = 0;
        name.addEventListener('click', () => {
            console.log(name.classList);
            if (name.classList.contains("who1")) {
                document.querySelector('.who1 > p').textContent = players[i1];
                i1++;
            } else {
                document.querySelector('.who2 > p').textContent = players[i2];
                i2++;
            }

            if (i1 >= 2) {
                i1 = 0;
            }
            if (i2 >= 2) {
                i2 = 0;
            }
        });
    });

    // Enabling the difficulty and changing it
    const difficulty = document.querySelectorAll('.drop-down-diff');
    difficulty.forEach((diff, index) => {
        var i1 = 0;
        var i2 = 0;
        diff.addEventListener('click', () => {
            if (diff.classList.contains("diff1")) {
                document.querySelector('.down-diff1').classList.add('drop-color1');
                document.querySelector('.diff1 > p').textContent = ["Low Elo", "Med Elo", "High Elo"][i];
                i1++;
            } else {
                document.querySelector('.down-diff2').classList.add('drop-color2');
                document.querySelector('.diff2 > p').textContent = ["Low Elo", "Med Elo", "High Elo"][i];
                i2++;
            }
            if (i1 >= 3) {
                i1 = 0;
            }
            if (i2 >= 3) {
                i2 = 0;
            }
        });
    });
});
