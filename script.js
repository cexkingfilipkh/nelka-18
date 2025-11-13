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
      'Zavri si oci.',
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
    let currentRotation = 0;

    spinButton.addEventListener('click', () => {
      if (isSpinning) return;
      
      isSpinning = true;
      spinButton.disabled = true;
      wheelResult.textContent = '';
      
      const baseRotation = 36;
      const fullRotations = 5;
      const randomOffset = (Math.random() - 0.5) * 10;
      
      currentRotation += fullRotations * 360;
      const totalRotation = currentRotation + baseRotation + randomOffset;
      
      wheel.style.transform = `rotate(${totalRotation}deg)`;
      
      setTimeout(() => {
        wheelResult.textContent = '1000%';
        isSpinning = false;
        spinButton.disabled = false;
        
        createCelebration();
      }, 4000);
    });

    function createCelebration() {
      if (!wheelCelebration) return;
      
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
      
      wheelCelebration.innerHTML = '';
      
      if (prefersReducedMotion) {
        return;
      }
      
      const sparkCount = isSmallScreen ? 18 : 32;
      const confettiCount = isSmallScreen ? 20 : 50;
      
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'celebration-spark';
        const size = Math.random() * 14 + 10;
        spark.style.left = Math.random() * 100 + '%';
        spark.style.top = '50%';
        spark.style.animationDelay = Math.random() * 0.5 + 's';
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.opacity = (0.45 + Math.random() * 0.4).toFixed(2);
        spark.style.animationDuration = (2.5 + Math.random() * 1.2).toFixed(2) + 's';
        wheelCelebration.appendChild(spark);
      }
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'celebration-confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '50%';
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.background = [
          'linear-gradient(135deg, #e3c6ff, #ab8cff)',
          'linear-gradient(135deg, #cdb0ff, #8a7af3)',
          'linear-gradient(135deg, #b894ff, #705ed9)',
          'linear-gradient(135deg, #d9bdfc, #9f88ff)'
        ][Math.floor(Math.random() * 4)];
        wheelCelebration.appendChild(confetti);
      }
      
      setTimeout(() => {
        wheelCelebration.innerHTML = '';
      }, 3000);
    }
  }
});
