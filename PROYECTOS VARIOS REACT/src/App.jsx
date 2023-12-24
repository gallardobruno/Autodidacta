import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}


//componente que creamos para manejar los cuadros
const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}` 

  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={updateBoard} className={className}>
      { children }
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  const updateBoard = () => {
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
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
