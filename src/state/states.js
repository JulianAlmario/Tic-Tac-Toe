import { create } from "zustand";

export const useStore = create((set) => ({
    turn: 1,
    player1array:[],
    player2array:[],
    win:"",
    finish:false,

    changewinner: (item) => set(() => {return {win:item};}),
     
    changefinish: () => set((state) => {return {finish:!state.finish};}),

    changeturn: () => set((state) => {
        if (state.turn === 1) {
            return { turn: 2 };
        }else{
            return { turn: 1 };
        }
    }),
    
    playerAdd:(item)=> set((state) => {
        if(state.turn === 1){
            return { player1array: [...state.player1array, item] };
        }else{
            return { player2array: [...state.player2array, item] };
        }    
    }),
    playerRemove:()=> set((state) => {
        if(state.turn === 1){
            return { player1array: state.player1array.filter((_,index)=>index!==0) };
        }else{
            return { player2array: state.player2array.filter((_,index)=>index!==0)};
        }
    }),
    reset:()=> set(() => {
        return { turn: 1, player1array:[],player2array:[],win:"",finish:false };
    })
  }))