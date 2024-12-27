import {Board} from '../components/Board';

function MainPage() {
  return (
    <main className="p-5">
      <h1 className="text-center text-yellow-400 text-6xl">Tic Tac Toe</h1>
      <Board/>
    </main>
  );
}

export default MainPage;