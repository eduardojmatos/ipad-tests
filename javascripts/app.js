window.addEventListener('load', function () {

  // disable select text for a drag item
  document.getElementById('touchArea').style.webkitTouchCallout = "none";
  document.getElementById('fireDiv').style.webkitTouchCallout = "none";

  // set dragen on div
  var dragOn = document.getElementById('dragOn');

  var el = document.getElementById("debugger");

  function debbug(text1, text2) {
    //el.getElementsByClassName("event_debugger_X")[0].innerHTML = text1;
    //el.getElementsByClassName("event_debugger_Y")[0].innerHTML = text2;
  }

  document.getElementById("touchArea").addEventListener("touchstart", touchmove);
  document.getElementById("touchArea").addEventListener("touchend", touchend);
  document.getElementById("touchArea").addEventListener("touchleave", touchleave);

  document.getElementById("touchArea").addEventListener("touchmove", touchmove, false );

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
    var fireDiv = document.getElementById("fireDiv");
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
