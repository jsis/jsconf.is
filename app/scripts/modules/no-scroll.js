const scrollbarWidth = (() => {
  // Create the measurement node
  const scrollDiv = document.createElement('div');
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Delete the DIV
  document.body.removeChild(scrollDiv);

  return width;
})();

const css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `.no-scroll { margin-right: ${scrollbarWidth}px; }`;
document.body.appendChild(css);
