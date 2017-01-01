window.addEventListener('keyup',function(event) {
  // Query div and audio elements
  var selector = '[data-key-code="%i%"]'.replace('%i%',event.code);
  var div_key = document.querySelector('.key' + selector);
  var audio_key = document.querySelector('audio' + selector);

  if (div_key != null && audio_key != null)
  {
    // Run animation
    div_key.classList.add('playing');
    setTimeout(function() { div_key.classList.remove('playing') ;},100);
    // Play audio
    audio_key.currentTime = 0;
    audio_key.play();
  }
});
