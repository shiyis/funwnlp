function isEdgeOrChrome() {
    const ua = navigator.userAgent;
    return /Chrome/.test(ua) && (/Edg/.test(ua) || !/OPR|Brave|Vivaldi/.test(ua));
  }
  
  function isFullscreen() {
    return window.innerWidth === screen.width;
  }
  
  function applyZoom() {
    const isTargetBrowser = isEdgeOrChrome();
    const isExact1024 = window.innerWidth === 1024;
    const fullscreen = isFullscreen();
  
    if (isTargetBrowser && isExact1024 && fullscreen) {
      document.body.classList.add("zoomed");
    } else {
      document.body.classList.remove("zoomed");
    }
  }
  
  window.addEventListener("load", applyZoom);
  window.addEventListener("resize", applyZoom);
  