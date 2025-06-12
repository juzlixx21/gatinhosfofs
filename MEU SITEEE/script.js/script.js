// Cria patinhas flutuando
const pawCount = 15;
for (let i = 0; i < pawCount; i++) {
  const paw = document.createElement('div');
  paw.className = 'paw';
  paw.textContent = '🐾';
  paw.style.left = Math.random() * 100 + 'vw';
  paw.style.animationDuration = (5 + Math.random() * 5) + 's';
  paw.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(paw);
}

// Botão miau
const miauBtn = document.getElementById('miauBtn');
const miauSound = document.getElementById('miauSound');
miauBtn.addEventListener('click', () => miauSound.play());

// Cartinha com digitação
const cartinha = document.getElementById('cartinha');
const mensagemEl = document.getElementById('mensagem');
let typed = false;

miauBtn.addEventListener('click', () => {
  if (!typed) {
    cartinha.classList.remove('hidden');
    const text = "Só tá faltando o gatinho de gravata (você) 🫵🫦";
    let i = 0;
    const interval = setInterval(() => {
      mensagemEl.textContent += text[i] || '';
      i++;
      if (i > text.length) clearInterval(interval);
    }, 70);
    typed = true;
  }
});
