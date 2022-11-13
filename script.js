let generateRandomColor = (contrast, id, clearVal) => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  let arr = [];
  let Contrasting="#";
  let outPut;
  let temp;
  let i;
  for (i = 0; i < 6; i++) {
    temp = letters[Math.floor(Math.random() * 16)];
    color += temp;
    let index = letters.split('').findIndex((item) => item == temp);
    Contrasting+=letters[15-index]
  }

  contrast == true ? (outPut = color) : (outPut = Contrasting);
//   console.log(outPut)
  return outPut;
};
document.querySelector("#runFunc").addEventListener("click", () => {
  document.querySelector("#div1").style = `
width:400px;
aspect-ratio:1;
    background-color:${generateRandomColor(true, "firstDiv")}
`;
  document.querySelector("#div2").style = `
  background-color:${generateRandomColor(false, "firstDiv", true)}
`;
});
