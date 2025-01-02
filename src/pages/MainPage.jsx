import {Board} from '../components/Board';
import Tablero from '../components/tablero';
import {Turn} from '../components/Turn';

function MainPage() {
  return (
    <main className="p-5">
      <h1 className="text-center text-yellow-400 text-6xl">Tic Tac Toe</h1>
      <Turn player={1}/>
      {/* <Tablero/> */}
      <Board/>
    </main>
  );
}

export default MainPage;