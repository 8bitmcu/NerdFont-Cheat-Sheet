// Load: https://www.nerdfonts.com/cheat-sheet
// Search for ' '. Scroll to the bottom
// Execute the following code. It will download nerdfont.csv and nerdfont.txt
var csv = ""; var txt = "";
document.querySelectorAll(".column").forEach(e => { 
  var code = e.querySelector(".codepoint").innerText, 
    name = e.querySelector(".class-name").innerText, 
    uni = String.fromCodePoint(parseInt(code, 16)); 
  csv += name + "," + code + "," + uni + "\n"; 
  txt += uni + " " + name.replaceAll("-", " ") + "\n";
})
var a = document.createElement('a'); document.body.appendChild(a);
var csvurl = window.URL.createObjectURL(new Blob([csv], {type: "text/csv"})); a.href = csvurl; a.download = "nerdfont.csv", a.click();
var txturl = window.URL.createObjectURL(new Blob([txt], {type: "text/txt"})); a.href = txturl; a.download = "nerdfont.txt", a.click();

