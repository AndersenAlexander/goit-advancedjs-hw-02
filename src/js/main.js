import "../css/style.css";
import javascriptLogo from "../img/javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Topic 4: Asynchronous JavaScript and Promises.</h1>
    <div class="card">
      <a href="1-timer.html">
        <button class="btn">Countdown Timer</button>
      </a>
      <a href="2-snackbar.html">
        <button class="btn">Promise Generator</button>
      </a>
    </div>
    <p class="read-the-docs">By Alexander Andersen</p>
  </div>
`;
