
 const mathSymbols = [
  '∫', '∑', '∏', '√', 'π', '∞', 'θ', 'Δ', 'λ', 'μ',
  'E=mc²', 'dy/dx', '∂', 'α', 'β', 'γ', 'φ', 'ω',
  '∇', '∮', 'ℝ', 'ℕ', 'ℤ', '∈', '∀', '∃', '±', '≠',
  'sin(x)', 'cos(x)', 'tan(x)', 'log(x)', '∛', 'lim',
  '∩', '∪', '⊂', '⊃', '≤', '≥', '≈', '∝'
];

function createMathSymbols() {
  const bg = document.getElementById('mathBg');
  const symbolCount = 100;

  for (let i = 0; i < symbolCount; i++) {
      const symbol = document.createElement('div');
      symbol.className = 'math-symbol';
      symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
      
      const x = Math.random() * 100;
      const duration = Math.random() * 25 + 10;
      const delay = Math.random() * -10;
      
      symbol.style.left = `${x}%`;
      symbol.style.animationDuration = `${duration}s`;
      symbol.style.animationDelay = `${delay}s`;
      
      bg.appendChild(symbol);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  
  setTimeout(() => {
      document.querySelector('.container').classList.add('visible');
  
      setTimeout(() => {
          document.getElementById('typewriterText').classList.add('typing');
  
          setTimeout(() => {
              document.querySelector('.enter-button').classList.add('visible');
              document.querySelector('.markButton').classList.add('visible');
          }, 1500);
      }, 500);
  }, 100);
  
  createMathSymbols();

  
  document.getElementById('enterButton').addEventListener('click', function() {
      const splash = document.getElementById('splash');
      splash.classList.add('active');
      
      
      setTimeout(() => {
          window.location.href = 'mainPage.html';
      }, 600);
   document.querySelector('.container').classList.add('visible');
    document.getElementById('typewriterText').classList.add('typing');
    document.querySelector('.enter-button').classList.add('visible');
    document.querySelector('.markButton').classList.add('visible');
  });
});
