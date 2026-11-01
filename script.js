document.getElementById('add-btn').addEventListener('click', () => {
  const a = parseFloat(document.getElementById('num1').value) || 0;
  const b = parseFloat(document.getElementById('num2').value) || 0;
  console.log("Sum:", a + b);
  document.getElementById('output').textContent = a + b;
});