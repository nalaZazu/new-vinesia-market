window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      (window.screenY / (document.body.offsetHeight - window.innerHeight)) *
        2
    );
  },
  false
);
