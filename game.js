let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-con");
let msg= document.querySelector("#msg");

let turnO= true; //playerx playery
let count =0;

const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4 ,8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

  const resetGame=()=>{
       turnO = true;
       count=0;
       enablebtn();
       msgContainer.classList.add("hide");
      }

  boxes.forEach((box) =>{
    box.addEventListener("click",()=>{          //when click on box then event listener ka arrow func work karega 
        //console.log("button was click");
       if(turnO){
        box.innerText ="O";       //turn true hoga tab o print hoga ak bar
        turnO = false; 
        box.style.color="green"          //  ak bar o print hogaya to next player ki turn ayegi isaliye turn) false kiya
       }else{
        box.innerText ="X";
        turnO = true;
        box.style.color="red" 
       }
      box.disabled= true;            //ak bar click karne par jo val ayegi vahi save hogi dusari bar click karne par val change nahi hogi
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
   });
      
   const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

    
    const disablebtn=()=>{
        for(let box of boxes){
            box.disabled= true;
        }
      }

      const enablebtn=()=>{
        for(let box of boxes){
            box.disabled= false;
            box.innerText="";
        }
      }


    const showWinner=(Winner)=>{
        msg.innerText=`congrats , Winner is ${Winner}`;
        msgContainer.classList.remove("hide");
        disablebtn();
    }

    const checkWinner=()=>{
        for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
           
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText; 
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
             if(pos1Val === pos2Val  && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
             }  
        }
        }
    };

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);
