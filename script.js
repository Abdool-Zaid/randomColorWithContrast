let generateRandomColor=(contrast,id,clearVal)=>{
    let letters = "0123456789ABCDEF";
    let color = "#";
    let arr=[]
    let Contrasting
    let outPut
    let temp
    let i
    for (i = 0; i < 6; i++) {
        temp=letters[Math.floor(Math.random() * 16)];
      color += temp
      console.log(temp)
    //   Contrasting+=letters[temp-16]
    }
    
    contrast==true?outPut=color:outPut=Contrasting
    console.log(outPut)
    return outPut;
  }
document.querySelector('#runFunc').addEventListener('click',()=>{
document.querySelector('#div1').style=`
width:400px;
aspect-ratio:1;
    background-color:${generateRandomColor(true,'firstDiv')}
`
document.querySelector('#div2').style=`
width:400px;
aspect-ratio:1;
    background-color:${generateRandomColor(false,'firstDiv',true)}
`
})