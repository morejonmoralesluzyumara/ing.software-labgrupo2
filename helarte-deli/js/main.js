const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Formulario demostrativo: no envía datos a ningún servidor.
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, msg = document.getElementById('msg');
  if (!f.nombre.value.trim() || !f.mensaje.value.trim()) {
    msg.textContent = 'Completa tu nombre y el mensaje para enviar la consulta.';
    return;
  }
  msg.textContent = 'Consulta registrada. Pronto habilitaremos el canal de atención oficial.';
  f.reset();
});
