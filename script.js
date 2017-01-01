window.addEventListener('keyup',function(event) {
  if (event.defaultPrevented)
  {
    return;
  }

  // Find key pressed (keyA -> A)
  var key_code = event.code[event.code.length-1];
  // Change to ASCII
  var key_ascii_code = key_code.charCodeAt(0);
  // Query div and audio elements
  var selector = '[data-key="%i%"]'.replace('%i%',key_ascii_code);
  var div_key = document.querySelector('div' + selector);
  var audio_key = document.querySelector('audio' + selector);

  if (div_key != null && audio_key != null)
  {
    // Run animation
    div_key.classList.add('playing');
    setTimeout(function() { div_key.classList.remove('playing') ;},100);
    // Play audio
    audio_key.play();
  }

},true);
