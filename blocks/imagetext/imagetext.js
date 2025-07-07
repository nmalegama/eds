export default function decorate(block) {
  
  var imgRow = block.firstElementChild;
  imgRow.className = "d-flex img-text__wrapper";
  //[...block.children].forEach((row) => {
    [...imgRow.children].forEach((div) => {
      div.className = "imgtxt-div col-12 col-md-6";
      //div.className = div.children[0].innerHTML;
      //"cta-prop";
      //console.log(div.children[0].innerHTML);
    });
    
  //}); 
  //ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  //block.textContent = '';
  //console.log(btnProps);
  //block.append(myLink);
}