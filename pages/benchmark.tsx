import React, { useState } from 'react'
import { useStore, getInitialState } from '../model/index.model'

const Benchmark = () => {
  const [state, actions] = useStore('Todo')
  const [input, setInput] = useState('')
  return (
    <>
      <div>
        <input onChange={e => setInput(e.target.value)} />
        <button onClick={() => actions.add(input)}>Add</button>
      </div>
      {JSON.stringify(state)}
      {(state.todoList || []).map((todo, index) => (
        <div key={index}>
          {todo} <button onClick={() => actions.remove(todo)}> X </button>
        </div>
      ))}
      <button onClick={() => actions.clear()}>Reset</button>
    </>
  )
}

Benchmark.getInitialProps = async () => {
  return await getInitialState({ modelName: 'Todo' })
}

export default Benchmark
