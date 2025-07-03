export default function decorate(block) {
  /* change to ul, li */
  const myButton = document.createElement("Button");
  [...block.children].forEach((row) => {
    while (row.firstElementChild) li.append(row.firstElementChild);
    myButton.innerHTML = "Click Me!";
    myButton.id = "myDynamicButton";
    
    const btnProps = [...li.children];
    myButton.className = "my-button-style " + btnProps[0];
    [...li.children].forEach((div) => {
      
    });
    ul.append(li);
  });
  block.textContent = '';
  block.append(myButton);
}