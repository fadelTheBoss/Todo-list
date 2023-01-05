import React, {useState} from 'react';
import {GrAddCircle} from 'react-icons/gr';
const AddTodo = ({handleSubmit}) => {
    const [todo, setTodo] = useState("")
    const handleChange = (event) => {
        const {value} = event.target
        setTodo(value)

    }
    const onSubmit = (e) =>{
        e.preventDefault()
        handleSubmit(todo)
        setTodo("")
    }
    return(
  <div className=' py-4 '>
              <h1 className='text-center font-bold text-xl font-poppins'>Ajouter une tache</h1>
              <div className=' p-4 flex justify-center items-center gap-5'>
                <form action="" className='flex justify-center items-center gap-5'
                 onSubmit={onSubmit}>
                  <input type="text" value={todo} className='border-2 border-gray-500 outline-none '
                      onChange={handleChange}
                  />
                  <button type='submit' > 
                      <GrAddCircle size={30} className='cursor-pointer hover:scale-90 ' />
                  </button>
                </form>
              </div>
          </div>
    )
    
  }
  export default AddTodo