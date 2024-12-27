
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItems'

function App() {

     const [todos, setTodos] = useState([])

     const addTodo = (todo) =>{
      setTodos((prev)=>[{id: Date.now(), ...todo},...prev])
     }

     const updateTodo = (id, todo) =>{
      setTodos((prev) => prev.map((indivisualTodo) => (indivisualTodo.id === id ? indivisualTodo.todo = todo : indivisualTodo )))
     }
     const deleteTodo = (id) =>{
      setTodos((prev) => prev.filter((indivisualTodo) => (indivisualTodo.id !== id)))
     }

     const toggleComplete = (id)=>{
      setTodos((prev) => prev.map((indivisualTodo) => (indivisualTodo.id === id ? {...indivisualTodo, completed : !indivisualTodo.completed} : indivisualTodo)) )
     }

     useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0){
          setTodos(todos)
        }
     },[])

     useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos) )
     },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      {/* bg-[#172842] */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-5 py-4 text-white bg-white  bg-opacity-5 ">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
