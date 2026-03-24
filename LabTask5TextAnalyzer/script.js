const inputText = document.getElementById("inputText");
const analyzeBtn = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

function analyzeTextContent(text) {
  const totalCharacters = text.length;
  const totalWords = text.trim() ? text.trim().split(/\s+/).length : 0;
  const reversedText = text.split("").reverse().join("");

  return {
    totalCharacters,
    totalWords,
    reversedText,
  };
}

function renderResults(data) {
  result.innerHTML = `
    <ul class="result-list">
      <li><strong>Total Characters:</strong> ${data.totalCharacters}</li>
      <li><strong>Total Words:</strong> ${data.totalWords}</li>
      <li>
        <strong>Reversed Text:</strong>
        <p class="reversed">${data.reversedText || "(empty)"}</p>
      </li>
    </ul>
  `;
}

analyzeBtn.addEventListener("click", () => {
  const text = inputText.value;

  if (!text.trim()) {
    result.innerHTML = '<p class="result-message">Please enter some text first.</p>';
    return;
  }

  const analysis = analyzeTextContent(text);
  renderResults(analysis);
});
