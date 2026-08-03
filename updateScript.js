// Load: https://www.nerdfonts.com/cheat-sheet
// Search for ' '. Scroll to the bottom
// Execute the following code. It will download nerdfont.csv and nerdfont.txt
var csv = ""; var txt = "";
var entries = Array.from(document.querySelectorAll(".column")).map(e => {
  var code = e.querySelector(".codepoint").innerText,
    name = e.querySelector(".class-name").innerText,
    uni = String.fromCodePoint(parseInt(code, 16));
  return { code, name, uni };
});
entries.sort((a, b) => a.name.localeCompare(b.name));
entries.forEach(({ code, name, uni }) => {
  csv += name + "," + code + "," + uni + "\n";
  txt += uni + " " + name.replaceAll("-", " ") + "\n";
})
var a = document.createElement('a'); document.body.appendChild(a);
a.href = window.URL.createObjectURL(new Blob([csv], {type: "text/csv"})); a.download = "nerdfont.csv", a.click();
a.href = window.URL.createObjectURL(new Blob([txt], {type: "text/txt"})); a.download = "nerdfont.txt", a.click();

