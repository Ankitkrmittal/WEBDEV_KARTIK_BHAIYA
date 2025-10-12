import React, { useContext } from 'react'

const Grandchild = () => {
    const data = useContext(context);
    const todosData = useContext(todosContext);

  return (
    <div>
        I am Grandchild:{data.x}
        {todosData.map((t, i) => {
        return <li key={i}>{t}</li>;
      })}
    </div>
  )
}

export default Grandchild