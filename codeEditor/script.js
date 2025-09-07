const htmlEditor = document.getElementById("html-code");
const cssEditor = document.getElementById("css-code");
const jsEditor = document.getElementById("js-code");
const preview = document.getElementById("preview");
const consoleOutput = document.getElementById("console-output");

function updatePreview() {
    const html = htmlEditor.value;
    const css = `<style>${cssEditor.value}</style>`;
    const js = `<script>
      const oldLog = console.log;
      console.log = function(msg) {
        oldLog(msg);
        document.getElementById("console-output").innerHTML += msg + "<br>";
      };
      try {
        ${jsEditor.value}
      } catch (err) {
        document.getElementById("console-output").innerHTML += "Error: " + err + "<br>";
      }
    <\/script>`;
  
    const output = html + css + js;
    preview.srcdoc = output;
  
    // Save to localStorage
    localStorage.setItem("html", html);
    localStorage.setItem("css", cssEditor.value);
    localStorage.setItem("js", jsEditor.value);
  }

  htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);

window.onload = () => {
    htmlEditor.value = localStorage.getItem("html") || "";
    cssEditor.value = localStorage.getItem("css") || "";
    jsEditor.value = localStorage.getItem("js") || "";
    updatePreview();
  };

  document.getElementById("clear-btn").addEventListener("click", () => {
    htmlEditor.value = "";
    cssEditor.value = "";
    jsEditor.value = "";
    consoleOutput.innerHTML = "";
    updatePreview();
  });
  
  document.getElementById("download-btn").addEventListener("click", () => {
    const blob = new Blob([preview.srcdoc], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();
  });

  
  const htmlCM = CodeMirror.fromTextArea(htmlEditor, { mode: "xml", lineNumbers: true });
const cssCM = CodeMirror.fromTextArea(cssEditor, { mode: "css", lineNumbers: true });
const jsCM = CodeMirror.fromTextArea(jsEditor, { mode: "javascript", lineNumbers: true });

htmlCM.on("change", updatePreview);
cssCM.on("change", updatePreview);
jsCM.on("change", updatePreview);
