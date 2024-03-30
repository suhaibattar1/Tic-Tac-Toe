let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbutton = document.querySelector("#new");
let mescontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg")
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = ()=>
{
    turn0=true;
    enableboxes();
    mescontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            box.style.color="#52D3D8";
        }
        else {
            box.innerText = "X";
            turn0 = true;
            box.style.color="#FF004D";
        }
        box.disabled = true;

        checkwinner();
    });
});

const disabledboxes=() =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=() =>
{
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
}


const showwinner=(winner)=>
{
    msg.innerText=`congratulation,winner is ${winner}`;
    mescontainer.classList.remove("hide");
    disabledboxes();
}
const checkwinner = () => {
  for (let patter of winPatterns) {
    let pos1val = boxes[patter[0]].innerText;
    let pos2val = boxes[patter[1]].innerText;
    let pos3val = boxes[patter[2]].innerText;

    if(pos1val!="" && pos2val !="" && pos3val !="")
    {
       if(pos1val===pos2val && pos2val===pos3val)
       {
        showwinner(pos1val);
       } 
    }
 }
};

newbutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);