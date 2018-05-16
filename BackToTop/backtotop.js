/*
*----------------------------------
* - Define Variables
* - Calculate the document height and set the offset to a quarter of that value.
* - Add event listeners for scroll and click
*----------------------------------
*/

var btt = document.getElementById( "back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;
    isFirefox = navigator.userAgent.toLowerCase().indexOf( "firefox" ) > -1;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if ( docHeight != 'undefined' ) {
  offset = docHeight / 4;
}

// Add scroll event listeners
window.addEventListener( "scroll", function ( event ) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = ( scrollPos > offset ) ? "visible" : "";
});

// Add click event listener
btt.addEventListener( "click", function ( event ) {
  event.preventDefault();

  if ( isFirefox ) {
    docElem.scrollTop = 0;
  } else {
    body.scrollTop = 0;
  }
});
