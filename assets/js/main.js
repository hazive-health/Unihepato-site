// ===== SCROLL REVEAL =====
(function () {
  if (!('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-reveal-ready');

  const semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animarContador(el) {
    const alvo = parseInt(el.dataset.numero, 10);
    if (isNaN(alvo) || semAnimacao) return;

    const duracao = 1200;
    const inicio = performance.now();

    function passo(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      el.textContent = Math.round(progresso * alvo);
      if (progresso < 1) requestAnimationFrame(passo);
    }

    el.textContent = '0';
    requestAnimationFrame(passo);
  }

  const elementos = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revelado');
        const contador = entry.target.querySelector('[data-numero]');
        if (contador) animarContador(contador);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  elementos.forEach(function (el) {
    const grupo = el.closest('[data-stagger-grupo]');
    if (grupo) {
      const irmaos = Array.from(grupo.querySelectorAll('.reveal'));
      el.style.transitionDelay = (irmaos.indexOf(el) * 100) + 'ms';
    }
    observer.observe(el);
  });
})();

// ===== MENU MOBILE =====
(function () {
  const botao = document.getElementById('header-hamburguer');
  const nav = document.getElementById('header-nav');

  if (!botao || !nav) return;

  botao.addEventListener('click', function () {
    const aberto = nav.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-label', 'Abrir menu');
    });
  });
})();

// ===== CARROSSEL DE EQUIPE =====
(function () {
  const carrossel = document.getElementById('equipe-carrossel');
  if (!carrossel) return;

  const trilho = carrossel.querySelector('.equipe-trilho');
  const slides = Array.from(trilho.querySelectorAll('.medico-card'));
  const dotsContainer = document.getElementById('equipe-dots');
  const btnAnterior = carrossel.querySelector('.equipe-seta--anterior');
  const btnProximo = carrossel.querySelector('.equipe-seta--proximo');

  slides.forEach(function (_, indice) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'equipe-dot';
    dot.setAttribute('aria-label', 'Ir para o médico ' + (indice + 1));
    dot.addEventListener('click', function () {
      irParaSlide(indice);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll('.equipe-dot'));

  function slideAtual() {
    return Math.round(trilho.scrollLeft / trilho.clientWidth);
  }

  function irParaSlide(indice) {
    const alvo = (indice + slides.length) % slides.length;
    trilho.scrollTo({ left: alvo * trilho.clientWidth, behavior: 'smooth' });
  }

  function atualizarDots() {
    const atual = slideAtual();
    dots.forEach(function (dot, indice) {
      dot.classList.toggle('ativo', indice === atual);
    });
  }

  btnAnterior.addEventListener('click', function () {
    irParaSlide(slideAtual() - 1);
  });

  btnProximo.addEventListener('click', function () {
    irParaSlide(slideAtual() + 1);
  });

  trilho.addEventListener('scroll', function () {
    window.requestAnimationFrame(atualizarDots);
  });

  atualizarDots();
})();

// ===== FAQ ACORDEÃO =====
(function () {
  const perguntas = document.querySelectorAll('.faq-pergunta');

  perguntas.forEach(function (botao) {
    const resposta = botao.nextElementSibling;

    botao.addEventListener('click', function () {
      const estaAberto = botao.getAttribute('aria-expanded') === 'true';

      perguntas.forEach(function (outroBotao) {
        outroBotao.setAttribute('aria-expanded', 'false');
        outroBotao.nextElementSibling.style.maxHeight = null;
      });

      if (!estaAberto) {
        botao.setAttribute('aria-expanded', 'true');
        resposta.style.maxHeight = resposta.scrollHeight + 'px';
      }
    });
  });
})();

// ===== ANO ATUAL NO FOOTER =====
(function () {
  const elementoAno = document.getElementById('ano-atual');
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
})();
