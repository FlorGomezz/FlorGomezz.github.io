let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#f17e96;" >Soy desarrolladora de software</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
