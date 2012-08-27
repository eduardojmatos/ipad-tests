window.addEventListener('load', function () {

  var fireDiv = document.getElementById("fireDiv");
  var touchArea = document.getElementById('touchArea');

  // disable select text for a drag item
  touchArea.style.webkitTouchCallout = "none";
  fireDiv.style.webkitTouchCallout = "none";

  // set dragen on div
  var dragOn = document.getElementById('dragOn');

  var el = document.getElementById("debugger");

  function debbug(text1, text2) {
    //el.getElementsByClassName("event_debugger_X")[0].innerHTML = text1;
    //el.getElementsByClassName("event_debugger_Y")[0].innerHTML = text2;
  }

  touchArea.addEventListener("touchstart", touchmove);
  touchArea.addEventListener("touchend", touchend);
  touchArea.addEventListener("touchleave", touchleave);

  touchArea.addEventListener("touchmove", touchmove, false );

  function touchstart (event) {
    debbug(event.touches[0].clientX, event.touches[0].clientY);
  }

  function touchend (event) {
    debbug(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  }

  function touchleave (event) {
    debbug(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  }

  function touchmove (event) {
    event.preventDefault();
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    debbug(x, y);
    followTouch(x, y);
  }

  function followTouch (x, y) {
    fireDiv.style.left = (x - 50) + "px";
    fireDiv.style.top = (y - 50) + "px";

    if ( (x - 50) === dragOn.offsetLeft && (y - 50) === dragOn.offsetTop ) {
      playVideo();
    }
  }

  function playVideo () {
    var videoContainer = document.getElementById('video');
    var video = document.getElementsByTagName('video')[0];

    video.play();
    videoContainer.className = 'videoPlay';
  }

});
