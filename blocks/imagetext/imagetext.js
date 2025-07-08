export default function decorate(block) {
  const imgRow = block.firstElementChild;
  imgRow.className = "d-flex img-text__wrapper";
  [...imgRow.children].forEach((div) => {
    div.className = "imgtxt-div col-12 col-md-6";
    /*div.className = div.children[0].innerHTML;
    //"cta-prop";
    //console.log(div.children[0].innerHTML); */
  });
}