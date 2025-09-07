// Initialize CodeMirror editors
let htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
    mode: "xml",
    theme: "dracula",
    lineNumbers: true
  });
  
  let cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true
  });
  
  let jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true
  });
  
  // Default content
  htmlEditor.setValue("<h1>Hello, world!</h1>");
  cssEditor.setValue("body { background: lightblue; text-align: center; }");
  jsEditor.setValue("console.log('Hello from JS!');");
  
  // Function to update preview
  function updatePreview() {
    let previewFrame = document.getElementById("preview");
    let html = htmlEditor.getValue();
    let css = "<style>" + cssEditor.getValue() + "</style>";
    let js = jsEditor.getValue();
  
    // Wrap JS with console forwarding
    let consoleScript = `
      <script>
        (function() {
          const oldLog = console.log;
          const oldErr = console.error;
          const oldWarn = console.warn;
  
          function send(type, args) {
            window.parent.postMessage({ type: type, message: args.join(" ") }, "*");
          }
  
          console.log = function(...args) { send("log", args); oldLog.apply(console, args); };
          console.error = function(...args) { send("error", args); oldErr.apply(console, args); };
          console.warn = function(...args) { send("warn", args); oldWarn.apply(console, args); };
        })();
      <\/script>
      <script>${js}<\/script>
    `;
  
    previewFrame.srcdoc = html + css + consoleScript;
  }
  
  // Listen for console messages from iframe
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type) {
      let output = document.getElementById("console-output");
      let msg = document.createElement("div");
  
      if (event.data.type === "log") {
        msg.style.color = "#0f0";
      } else if (event.data.type === "error") {
        msg.style.color = "red";
      } else if (event.data.type === "warn") {
        msg.style.color = "yellow";
      }
  
      msg.textContent = event.data.message;
      output.appendChild(msg);
      output.scrollTop = output.scrollHeight;
    }
  });
  
  // Clear console button
  document.getElementById("clear-console").addEventListener("click", () => {
    document.getElementById("console-output").innerHTML = "";
  });
  
  // Live update when typing
  htmlEditor.on("change", updatePreview);
  cssEditor.on("change", updatePreview);
  jsEditor.on("change", updatePreview);
  
  // Initial load
  updatePreview();
  