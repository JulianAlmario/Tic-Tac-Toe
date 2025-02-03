import {Board} from '../components/Board';
import { useStore } from "../state/states";
import {Turn} from '../components/Turn';
import { useEffect,useState } from 'react';

function MainPage() {
  const {win,finish,reset}=useStore(); 
  const [color,setcolor]=useState();
  useEffect(() => {
   if(win==="Player 1 win"){
     setcolor("text-blue-600");
    }else{
      setcolor("text-red-600");
     }
  },[finish]);

  return (
    <main className="p-5">
      <h1 className="text-center text-yellow-400 text-6xl">Tic Tac Toe</h1>
      <section className='flex justify-center items-center flex-col pb-8'>
      <div className='flex justify-center items-center gap-10'>
      <Turn player={1}/>
      <button onClick={()=>{reset();}} className="text-xs text-yellow-400 border-4 border-yellow-400 p-2 px-4 cursor-pointer
             hover:bg-yellow-400 hover:text-black transition duration-150">Restart</button>
      </div>
      {finish &&( <span className={` text-center text-5xl ${color}`} >{win}</span>)}
      </section>
    
      {/* <Tablero/> */}
      <Board/>
    </main>
  );
}

export default MainPage;