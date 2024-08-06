var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Alondra Guerra')
  .pauseFor(300)
  .deleteChars(14)
  .typeString('<strong><span style="color: #c13d60;">Desarrolladora Frontend</span></strong>')
  .pauseFor(1000)
  .start();