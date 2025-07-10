export default function decorate(block) {
  const imgRow = block.firstElementChild;
  imgRow.className = 'd-flex img-text-wrapper';
  [...imgRow.children].forEach((div) => {
    div.className = 'imgtxt-div col-12 col-md-6';
  });
}
