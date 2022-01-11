window.addEventListener('DOMContentLoaded', function(){
  const slider_volume = document.getElementById("volume");
  const audio = document.getElementById("music");
  audio.volume = slider_volume.value;
  slider_volume.addEventListener("input", e => {
    audio.volume = slider_volume.value;
  });
});

function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
};

document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );


//document.getElementById("line3").addEventListener("click", function() {
  //window.location.href = 'savepage.html';
//});