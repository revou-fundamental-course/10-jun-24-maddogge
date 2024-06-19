const celsiusInput = document.getElementById('celsius');
const convertButton = document.getElementById('convert');
const fahrenheitOutput = document.getElementById('fahrenheit');
const calculationOutput = document.getElementById('calculation');

convertButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;

  fahrenheitOutput.textContent = fahrenheit.toFixed(2); // Display with 2 decimal places

  // Update the calculation formula
  calculationOutput.textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});
