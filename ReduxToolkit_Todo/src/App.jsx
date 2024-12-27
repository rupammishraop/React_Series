
import './App.css'
import { TodoForm } from './components/todoForm'
import TodoItems from './components/todoItems'

function App() {


  return (
    <div className='w-full h-screen flex items-center flex-col'>
      <TodoForm />
      <TodoItems />
    </div>
  )
}

export default App
