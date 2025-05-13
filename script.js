const botoes = document.querySelectorAll('.faq-pergunta');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const resposta = botao.nextElementSibling;
    const estaAberta = resposta.classList.contains('aberta');

    // Fecha todas as outras
    document.querySelectorAll('.faq-resposta').forEach(r => r.classList.remove('aberta'));
    document.querySelectorAll('.faq-pergunta').forEach(b => b.classList.remove('ativa'));

    // Se não estava aberta, abre
    if (!estaAberta) {
      resposta.classList.add('aberta');
      botao.classList.add('ativa');
    }
  });
});
