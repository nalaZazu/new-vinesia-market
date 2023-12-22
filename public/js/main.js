window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) *
        2
    );
  },
  false
);
