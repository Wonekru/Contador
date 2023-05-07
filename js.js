let numero = 0;
const displayNumero = document.getElementById("numero");
const botonIncrementar = document.getElementById("incrementar");
const botonDisminuir = document.getElementById("disminuir");
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function() {
  numero = 0;
  displayNumero.textContent = numero;
  updateNeonClass();
});

botonIncrementar.addEventListener("click", () => {
  numero++;
  displayNumero.textContent = numero;
  updateNeonClass();
});

botonDisminuir.addEventListener("click", () => {
  numero--;
  displayNumero.textContent = numero;
  updateNeonClass();
});

function updateNeonClass() {
  if (numero > 0) {
    displayNumero.classList.add('green-neon');
    displayNumero.classList.remove('red-neon');
  } else if (numero < 0) {
    displayNumero.classList.add('red-neon');
    displayNumero.classList.remove('green-neon');
  } else {
    displayNumero.classList.remove('red-neon');
    displayNumero.classList.remove('green-neon');
  }
}

