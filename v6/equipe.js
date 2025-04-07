  function mostrarDetalhes(id) {
      const div = document.getElementById(id);
      div.classList.toggle('ativo');
    }
	function mostrarDetalhes(id) {
    const div = document.getElementById(id);
    div.classList.toggle('ativo');
  }

  // Efeito de entrada ao rolar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // opcional, só entra uma vez
      }
    });
  }, {
    threshold: 0.1
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    observer.observe(card);
  });