import { useStore } from "../state/states";
import { useEffect, useState } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

export function Board() {
       
    let array=[];

    const {turn,changeturn,player1array,player2array,playerAdd,playerRemove}=useStore();
    const [BoardArray,setBoardArray]=useState([
        { index: 0, value: "#", border: "border-r-4 border-b-4" },
        { index: 1, value: "#", border: "border-r-4 border-b-4 border-l-4" },
        { index: 2, value: "#", border: "border-l-4 border-b-4" },
        { index: 3, value: "#", border: "border-r-4 border-b-4 border-t-4" },
        { index: 4, value: "#", border: "border-r-4 border-b-4 border-t-4 border-l-4" },
        { index: 5, value: "#", border: "border-l-4 border-b-4 border-t-4" },
        { index: 6, value: "#", border: "border-r-4 border-t-4" },
        { index: 7, value: "#", border: "border-r-4 border-t-4 border-l-4" },
        { index: 8, value: "#", border: "border-l-4 border-t-4" }]);




function add(item){
    let TemporalArray=[...BoardArray];
    

    if(turn==1){
        if(player1array.length<3){
            playerAdd(item.index);
            setBoardArray([...TemporalArray]);
        }else{
            TemporalArray[player1array[0]].value="#";
            setBoardArray([...TemporalArray]);
            playerRemove();
            playerAdd(item.index);
        }
    }else{
        if(player2array.length<3){
            playerAdd(item.index);
            setBoardArray([...TemporalArray]);
        }else{
            TemporalArray[player2array[0]].value="#";
            setBoardArray([...TemporalArray]);
            playerRemove();
            playerAdd(item.index);
    }
}

}

    function position(item){
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
        changeturn();
     }

    }     
    


    return (
      <div className="flex justify-center items-start h-screen">
          <div className="grid grid-cols-3">
            {BoardArray.map((item) => (
                <button onClick={() => position(item)}
                    key={item.index}
                    className={`${item.border} ${item.value !=="#"? "p-8":"p-16"}  border-yellow-400 cursor-pointer w-full hover:bg-slate-800 transition duration-150`}
                >
                    {item.value !== "#" && (
                        <img className="w-10/12 mx-auto" src={item.value} alt="" />
                    )}
                </button>
            ))}
        </div>
      </div>
    );
}