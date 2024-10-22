import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [lists, setLists] = useState(data)

  const removeId = (id)=>{
    const removeUser = lists.filter((list)=>list.id !==id)
    setLists(removeUser)
  }

  return (
    <main>
      <section className='container'>
        <h3>{lists.length} birthday today</h3>
        {lists.length > 0 ? 
          <div>
            <List lists={lists} removeId={removeId} />
            <button className='btn' onClick={() => setLists([])}>clear all </button>
          </div>
         : (
          <div>
            <button className='btn' onClick={() => setLists(data)}>
              reset
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App;
