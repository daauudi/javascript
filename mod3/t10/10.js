document.getElementById('source').addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;
  document.getElementById('target').textContent = ` your name's ${firstName} ${lastName}`;
});