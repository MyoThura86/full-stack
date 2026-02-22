import React from 'react'
import Course from './components/Course'



const App = () => {
  const course = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamental of React',
          exercises: 1,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 12,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 13,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },{
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return(
    <div>
      <h1>Web development curriculum</h1>
      {course.map(
        (courseItem) => <Course key={courseItem.id} courseItem={courseItem} />
      )}
    </div>
  )
}

export default App
