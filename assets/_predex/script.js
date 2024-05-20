
var showAlert = window.location.hash;
if (!(showAlert == "#")) {
  document.getElementById("popup").addEventListener("click", function () {
    this.style.display = "none";
  });
} else {
  document.getElementById("popup").style.display = "none";
}
