function subscribeLoad(fun) {
  if(window.InstantClick) {
    window.InstantClick.on('change', fun);
  } else {
    document.addEventListener('DOMContentLoaded', fun);
  }
}

subscribeLoad(function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

subscribeLoad(function() { 
  var v = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < v.length; n++) { 
    v[n].onclick = function () { 
      var iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=" + this.dataset.related + "&controls=" + this.dataset.control + "&showinfo=" + this.dataset.info
      ); 
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("id", "youtube-iframe");
      iframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;");
      if (this.dataset.fullscreen == 1) {
        iframe.setAttribute("allowfullscreen", "");
      }
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      this.appendChild(iframe);
    };
  }
});

(function(){
  document.addEventListener('DOMContentLoaded', function () {
    if(window.InstantClick) {
      window.InstantClick.init();
    }
  });
})();

