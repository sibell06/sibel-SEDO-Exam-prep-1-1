function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

['add', 'subtract'].forEach(op => {
  document.getElementById(`btn-${op}`)
    .addEventListener('click', () => {
      const a = Number(document.getElementById('a').value);
      const b = Number(document.getElementById('b').value);
      document.getElementById('result').textContent = window[op](a, b);
    });
});