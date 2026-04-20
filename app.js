const camaras = [
  'Fábrica 02 (Reino/Minas)',
  'Fábrica 01 (Parmesão)',
  'Câmara 10 (Resfriamento Tradicional)',
  'Câmara 11 (Salga Tradicional)',
  'Câmara 01 (Salga Parmesão)',
  'Câmara 02 (Resfriamento Parmesão)',
  'Câmara 22 (Resfriamento Minas/Reino)',
  'Câmara 23 (Salga Minas/Reino)'
];

const lista = document.getElementById('lista');

camaras.forEach((nome, index) => {
  const div = document.createElement('div');
  div.className = 'camara';

  div.innerHTML = `
    <strong>${nome}</strong><br>
    <div class='inputs'>
      <input placeholder='1ª Temp' value='${localStorage.getItem(index + '_t1') || ''}' oninput="salvar(${index}, 't1', this.value)">
      <input placeholder='2ª Temp' value='${localStorage.getItem(index + '_t2') || ''}' oninput="salvar(${index}, 't2', this.value)">
    </div>`;

  lista.appendChild(div);
});

function salvar(index, campo, valor) {
  localStorage.setItem(index + '_' + campo, valor);
}
