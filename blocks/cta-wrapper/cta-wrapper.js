export default function decorate(block) {
  const imgRow = block.firstElementChild;
  const classNames = block.className;
  imgRow.className = 'cta-itm-wrapper';
  [...imgRow.children].forEach((div, idx) => {
    div.className = 'cta-itm ' + classNames;
  });
}
