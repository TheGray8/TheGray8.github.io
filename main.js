let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#ff3f7c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff3f7c;">Soy estudiante de la carrera Ingeniería en Sistemas Computacionales...</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
