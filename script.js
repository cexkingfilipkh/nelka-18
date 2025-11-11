document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const nameInput = document.getElementById('name');
  const dobInput = document.getElementById('dob');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = nameInput.value.trim();
      const dob = dobInput.value;
      
      if (name.toLowerCase() !== 'nela') {
        errorMessage.textContent = 'Zle meno.';
        errorMessage.style.display = 'block';
        return;
      }
      
      if (!dob) {
        errorMessage.textContent = 'Nespravny datum narodenia.';
        errorMessage.style.display = 'block';
        return;
      }
      
      const date = new Date(dob);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      
      if (month !== 11 || day !== 14 || year !== 2007) {
        errorMessage.textContent = 'Nespravny datum narodenia.';
        errorMessage.style.display = 'block';
        return;
      }
      
      window.location.href = 'success.html';
    });
    
    nameInput.addEventListener('input', () => {
      errorMessage.style.display = 'none';
    });
    
    dobInput.addEventListener('input', () => {
      errorMessage.style.display = 'none';
    });
  }

  const wishButton = document.getElementById('wishButton');
  const wishDisplay = document.getElementById('wishDisplay');

  if (wishButton && wishDisplay) {
    const birthdayWishes = [
      'Vsetko najlepsie k narodeninam laska',
      'Prajem ti hlavne vela zdravia a stastia',
      'Dufam ze sa ti splnia vsetky tvoje sny',
      'Dufam ze ta toto aspon trochu potesilo haha',
      'Si ta najkrajsia a najmilsia zena na ceeelom svete',
      'Tesim sa uz ked vyzdravies a poriadne sa spolu opijeme a zabavime 🥳',
      'Uz neviem ake priania pisat tak este raz LUBIM TA',
      'Spoznat teba bola vyhra v loterii zivota haha',
      'Ked toto citas dlzis mi pusu 😽',
      'Od srdiecka ti prajem vela zdravia',
      'Nemozem zabudnut ani na vela lasky',
      'Verim ze sa ti splni vsetko co si kedy chcela',
    ];

    let lastWishIndex = -1;

    wishButton.addEventListener('click', () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * birthdayWishes.length);
      } while (randomIndex === lastWishIndex && birthdayWishes.length > 1);
      
      lastWishIndex = randomIndex;
      const randomWish = birthdayWishes[randomIndex];
      
      wishDisplay.style.opacity = '0';
      setTimeout(() => {
        wishDisplay.textContent = randomWish;
        wishDisplay.style.opacity = '1';
      }, 200);
    });
  }

  const spinButton = document.getElementById('spinButton');
  const wheel = document.getElementById('wheel');
  const wheelResult = document.getElementById('wheelResult');
  const wheelCelebration = document.getElementById('wheelCelebration');

  if (spinButton && wheel && wheelResult) {
    let isSpinning = false;

    spinButton.addEventListener('click', () => {
      if (isSpinning) return;
      
      isSpinning = true;
      spinButton.disabled = true;
      wheelResult.textContent = '';
      
      const baseRotation = 36;
      const fullRotations = 5;
      const finalRotation = fullRotations * 360 + baseRotation;
      
      const randomOffset = (Math.random() - 0.5) * 10;
      const totalRotation = finalRotation + randomOffset;
      
      wheel.style.transform = `rotate(${totalRotation}deg)`;
      
      setTimeout(() => {
        wheelResult.textContent = '1000% ❤️❤️❤️';
        isSpinning = false;
        spinButton.disabled = false;
        
        createCelebration();
      }, 4000);
    });

    function createCelebration() {
      wheelCelebration.innerHTML = '';
      
      const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝'];
      for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '50%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        heart.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        wheelCelebration.appendChild(heart);
      }
      
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'celebration-confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '50%';
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.background = [
          'linear-gradient(135deg, #DC143C, #FF1493)',
          'linear-gradient(135deg, #FF1493, #FF69B4)',
          'linear-gradient(135deg, #FF69B4, #FFB6C1)',
          'linear-gradient(135deg, #DC143C, #FF1493)'
        ][Math.floor(Math.random() * 4)];
        wheelCelebration.appendChild(confetti);
      }
      
      setTimeout(() => {
        wheelCelebration.innerHTML = '';
      }, 3000);
    }
  }
});
