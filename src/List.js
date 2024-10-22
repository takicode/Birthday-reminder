import React from 'react';

const List = ({lists, removeId}) => {
  return (
    <article >
      {lists.map((list) => {
        const {id, name, age, image,} = list
        return (
          <article key={id} className='person'>
              <img src={image} alt={name} />
            <div>
             <h4>{name}</h4>
             <h6>{age} years</h6>
            </div>
            <div>
             <button className='btn' onClick={() => removeId(id)}>remove</button>
            </div>
          </article>
        )
      })}
      
      
    </article>
  )
};

export default List;
