export default function decorate(block) {
  const imgRow = block.firstElementChild;
  imgRow.className = 'cta-itm-wrapper';
  [...imgRow.children].forEach((div) => {
    div.className = 'cta-itm';
  });
}
