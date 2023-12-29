import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}


//Square es un componente funcional que representa un cuadro en el tablero
//isSelected es una propiedad que indica si el cuadro esta seleccionado
//updateBoard, es una funcion que se llama cuando se hace un clic en el cuadro y pasa el indice del cuadro como argumento
//index es el indice del cuadro en el tablero
//HandleClick es la funcion que se ejecuta cuando se hace clic en el cuadro llamando a updateBoard con el indice del cuadro
const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}` 

  const handleClick = () => {
    updateBoard(index)
    console.log(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      { children }
    </div>
  )
}


//App, componente principal que representa el juego completo.
//Board es el estado que almacena la configuracion actual del tablero, inicializando como un array de 9 elementos nulos
//Turn, es el estadoi que rastrea de quien es el turno actual, inicializando como x
//updateBoard es una funcion que se utiliza para actualizar el estado del tablero y cambiar el turno cuando se hace clic en un cuadro
//map se utiliza para representar cada cuadro del tablero utilizando el componente Square
//en el section turn, se muestran 2 cuadros que representan a "X" o "O" donde el cuadro del jugador actual esta resaltado
function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>tic tac toc</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
        </section> 
        <section className='turn'>
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>    
    </main>
  )
}

export default App
