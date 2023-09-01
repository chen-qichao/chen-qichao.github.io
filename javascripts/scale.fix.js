var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

function toggleAbstract() {
    var content = document.querySelector(".toggle-content");
    var icon = document.getElementById("caretIcon");
    
    if(content.style.display === "none") {
        content.style.display = "block";
        icon.classList.replace('fa-caret-right', 'fa-caret-down');
    } else {
        content.style.display = "none";
        icon.classList.replace('fa-caret-down', 'fa-caret-right');
    }
}
