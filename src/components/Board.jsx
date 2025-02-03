import { useStore } from "../state/states";
import { useEffect, useState } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

export const Board = () => {
       
    let array=[];
    let evarray1=[];
    let evarray2=[];
    let itfinish=false;

    const WinnerCombination=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const {turn,changeturn,player1array,player2array,playerAdd,playerRemove,changewinner,finish,changefinish}=useStore();
    const [BoardArray,setBoardArray]=useState([
        { index: 0, value: "#", style: "border-r-4 border-b-4" },
        { index: 1, value: "#", style: "border-r-4 border-b-4 border-l-4" },
        { index: 2, value: "#", style: "border-l-4 border-b-4" },
        { index: 3, value: "#", style: "border-r-4 border-b-4 border-t-4" },
        { index: 4, value: "#", style: "border-r-4 border-b-4 border-t-4 border-l-4" },
        { index: 5, value: "#", style: "border-l-4 border-b-4 border-t-4" },
        { index: 6, value: "#", style: "border-r-4 border-t-4" },
        { index: 7, value: "#", style: "border-r-4 border-t-4 border-l-4" },
        { index: 8, value: "#", style: "border-l-4 border-t-4" }]);



function compare(array1,array2){
    let compare=true;
    for(let i=0;i<array1.length;i++){
        if(array1[i]!==array2[i]){
            compare=false;
        }
    }
    return compare;
}



function add(item){
    let TemporalArray=[...BoardArray];

    if(turn==1){
        if(player1array.length<3){
            evarray1=[...player1array, item.index];
            playerAdd(item.index);
        }else{
            TemporalArray[player1array[0]].value="#";
            setBoardArray([...TemporalArray]);
            evarray1=[... player1array.filter((_,index)=>index!==0), item.index];
            playerRemove();
            playerAdd(item.index);
        }
    }else{
        if(player2array.length<3){
            evarray2=[...player2array, item.index];
            playerAdd(item.index);
        }else{
            TemporalArray[player2array[0]].value="#";
            setBoardArray([...TemporalArray]);
            evarray2=[... player2array.filter((_,index)=>index!==0), item.index];
            playerRemove();
            playerAdd(item.index);
           
        }
    }


}

    function position(item){
    if(!finish){
        if(item.value === "#"){
            array=[ ...BoardArray];
            if(turn===1){
                add(item);
                array[item.index].value = circle;
                
            }else{
                add(item);
                array[item.index].value = cross;
                
            }
           
            setBoardArray([...array]);
            winner();
    
            if(!itfinish){
            changeturn();
            }
         } 
    }

    }     

    function winner(){
        console.log(evarray1);
        if(evarray1.length===3 && turn===1){
            
          for(let i=0;i<WinnerCombination.length;i++){
              if(compare(evarray1.sort(), WinnerCombination[i].sort())){
                changewinner("Player 1 win");
                changefinish();
                itfinish=true;
                   let temparray=[...BoardArray];
                    for(let j=0;j<3;j++){
                        temparray[evarray1[j]].style=`${temparray[evarray1[j]].style} bg-blue-600`;
                    }
                    setBoardArray([...temparray]);
                  break;
              }
          }
        }else if(evarray2.length===3 &&turn===2){
          for(let i=0;i<WinnerCombination.length;i++){
              if(compare(evarray2.sort(), WinnerCombination[i].sort())){
                changewinner("Player 2 win");
                changefinish();
                itfinish=true;
                 let temparray=[...BoardArray];
                    for(let j=0;j<3;j++){
                        temparray[evarray2[j]].style=`${temparray[evarray2[j]].style} bg-red-500`;
                    }
                    setBoardArray([...temparray]);
                  break;
              }
          }
      }
      }
    
 useEffect(() => { 
   let temparray=[...BoardArray];
    if(player1array.length===0){
       for(let i=0;i<BoardArray.length;i++){
           temparray[i].value="#";
           if(temparray[i].style.includes("bg-blue-600")){
           temparray[i].style=temparray[i].style.replace("bg-blue-600","");
           }else{
            temparray[i].style=temparray[i].style.replace("bg-red-500","");
           }
       }
    }
    setBoardArray([...temparray]);
  },[player1array]);


    return (
      <section className="flex flex-col justify-start ">
      <div className="flex justify-center items-start h-screen">
          <div className="grid grid-cols-3">
            {BoardArray.map((item) => (
        <button onClick={() => {position(item);}}
                    key={item.index}
                    className={`${item.style} ${item.value !=="#"? "p-8":"p-16"}  border-yellow-400 cursor-pointer w-full hover:bg-slate-800 transition duration-150`}
                >
                    {item.value !== "#" && (
                        <img className="w-10/12 mx-auto" src={item.value} alt="" />
                    )}
                </button>
            ))}
        </div>
        
      </div>
      
      </section>
    );
}