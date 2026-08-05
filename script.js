const toggleButtons = document.querySelectorAll('.toggle-translation');
const tipButton = document.getElementById('tipButton');
const tipText = document.getElementById('tipText');
const yearSpan = document.getElementById('year');
const sendButton = document.getElementById('sendButton');
const successMessage = document.getElementById('successMessage');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (toggleButtons) {
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const translation = document.getElementById(targetId);
      if (!translation) return;

      const isHidden = translation.classList.toggle('hidden');
      button.textContent = isHidden ? 'Show translation' : 'Hide translation';
    });
  });
}

if (tipButton && tipText) {
  const tips = [
    'Learn the Arabic alphabet first — it helps you read and pronounce words correctly.',
    'Practice writing the letters from right to left to become comfortable with the script.',
    'Listen to short Arabic phrases and repeat them aloud to improve pronunciation.',
    'Start with simple greetings and common words before moving to full sentences.',
    'Use flashcards for common vocabulary and review them daily.',
  ];

  tipButton.addEventListener('click', () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipText.textContent = randomTip;
  });
}

if (sendButton && successMessage) {
  sendButton.addEventListener('click', () => {
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 4500);
  });
}
