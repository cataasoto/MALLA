function toggle(element) {
  if (element.classList.contains('aprobado')) return;

  element.classList.add('aprobado');
  const cod = element.dataset.codigo;

  document.querySelectorAll('.curso').forEach(curso => {
    const reqs = curso.dataset.prerreq.split(',').filter(r => r);
    const allMet = reqs.every(r => {
      const el = document.querySelector(`.curso[data-codigo='${r}']`);
      return el && el.classList.contains('aprobado');
    });

    if (allMet) {
      curso.style.opacity = '1';
    }
  });
}
