window.addEventListener('load', function () {

  var fireDiv = document.getElementById("fireDiv");
  var touchArea = document.getElementById('touchArea');
  var lineIn = document.getElementById('lineIn');
  var timeOnTouch = 0;
  var starInterval;
  var animationIsStarted = false;
  var animationTimeStart = 2000;

  // disable select text for a drag item
  touchArea.style.webkitTouchCallout = "none";
  fireDiv.style.webkitTouchCallout = "none";

  // set dragen on div
  var dragOn = document.getElementById('dragOn');

  var el = document.getElementById("debugger");

  function debbug(text1, text2) {
    /*el.getElementsByClassName("event_debugger_X")[0].innerHTML = text1;
    console.log("----- debugger ------");
    console.log(text1, text2);
    el.getElementsByClassName("event_debugger_Y")[0].innerHTML = text2;*/
  }

  touchArea.addEventListener("touchstart", touchmove);
  touchArea.addEventListener("touchend", touchend);
  touchArea.addEventListener("touchleave", touchleave);

  touchArea.addEventListener("touchmove", touchmove, false );

  /*function touchstart (event) {
    debbug(event.touches[0].clientX, event.touches[0].clientY);
  }*/

  function touchend (event) {
    if ( animationIsStarted ) {
      removeTouchEvents();
    }

    timeOnTouch = 0;
    clearInterval(starInterval);

    debbug(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  }

  function touchleave (event) {
    
    timeOnTouch = 0;
    clearInterval(starInterval);

    debbug(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  }

  function touchmove (event) {
    event.preventDefault();

    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;

    if ( timeOnTouch === 0 ) checkAnimationTime();
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

  function checkAnimationTime() {
    timeOnTouch = Date.now();
    
    starInterval = setInterval( function () {
      console.log(Date.now() - timeOnTouch);
      if( (Date.now() - timeOnTouch) >= animationTimeStart ) {
        clearInterval(starInterval);
        startAnimation();
      }
    }, 10);
  }

  /* Animation functions */
  function startAnimation () {
    lineIn.style.zIndex = 100;
    lineIn.style.top = fireDiv.style.top;
    lineIn.style.left = fireDiv.style.left;

    // remove circle from DOM
    touchArea.removeChild(fireDiv);


  }

  function removeTouchEvents () {
    touchArea.removeEventListener("touchstart touchend touchleave touchmove");
  }

});
