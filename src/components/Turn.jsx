import {useStore} from "../state/states";
import {useState,useEffect} from "react";

export function Turn(){
    const {turn}=useStore();
    const [player,setPlayer]=useState(turn);
    

    useEffect(()=>{
        setPlayer(turn);
    },[turn]);

    return(
       <p className="text-4xl text-center my-10"><b className="text-yellow-400 ">Turn: </b>
        <span className={player === 1 ? 'text-blue-600' : 'text-red-600'}>
              {player === 1 ? 'Player 1' : 'Player 2'}
       </span>
       </p>
       
    );
}