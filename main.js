let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #000000;">Artista digital, ilustracion conceptual performatica y futura Curadora </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
