function createSlider(container) {
  const slider = container.querySelector('.slider');
  const cards = slider.querySelectorAll('.card');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  
  let currentIndex = 0;
  let cardWidth = cards[0].offsetWidth + 25;

  function updateCardWidth() {
      const containerWidth = container.offsetWidth - 140;
      cardWidth = cards[0].offsetWidth + 25;
      return Math.floor(containerWidth / cardWidth);
  }

  function goToSlide(index) {
      const visibleCards = updateCardWidth();
      currentIndex = Math.min(Math.max(index, 0), Math.ceil(cards.length / visibleCards) - 1);
      const offset = -currentIndex * (visibleCards * cardWidth);
      slider.style.transform = `translateX(${offset}px)`;
      updateNavigation();
  }

  function updateNavigation() {
      const visibleCards = updateCardWidth();
      const maxIndex = Math.ceil(cards.length / visibleCards) - 1;
      prevBtn.disabled = currentIndex <= 0;
      nextBtn.disabled = currentIndex >= maxIndex;
  }

  prevBtn.addEventListener('click', () => {
      if (!prevBtn.disabled) {
          currentIndex--;
          goToSlide(currentIndex);
      }
  });

  nextBtn.addEventListener('click', () => {
      if (!nextBtn.disabled) {
          currentIndex++;
          goToSlide(currentIndex);
      }
  });

  // Download button functionality
  const downloadButtons = container.querySelectorAll('.download-button');
  downloadButtons.forEach(button => {
      button.addEventListener('click', function() {
          if (!this.classList.contains('loading')) {
              const progressBar = this.querySelector('.progress');
              const downloadText = this.querySelector('.download-text');
              
              this.classList.add('loading');
              downloadText.textContent = 'Downloading...';
              
              let progress = 0;
              const interval = setInterval(() => {
                  progress += 1;
                  progressBar.style.width = `${progress}%`;
                  
                  if (progress >= 100) {
                      clearInterval(interval);
                      setTimeout(() => {
                          this.classList.remove('loading');
                          downloadText.textContent = 'Download';
                          progressBar.style.width = '0';
                      }, 500);
                  }
              }, 30);
          }
      });
  });

  window.addEventListener('resize', () => {
      cardWidth = cards[0].offsetWidth + 25;
      goToSlide(currentIndex);
  });

  updateNavigation();
}

// Initialize all sliders
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider-container');
  sliders.forEach(container => createSlider(container));
});