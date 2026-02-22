import React from 'react'
const Header = ({name}) => {
    return (
        <h2>{name.name}</h2>
    )
}
const Part = ({partItem}) => {
    return (
        <p>{partItem.name} {partItem.exercises}</p>
    )
}

const Content = ({part})=>{
    return (
        <div>
            {part.map(
            partItem => <Part key={partItem.id} partItem={partItem} />
            )}
        </div>
    )
}

const Total =({part})=>{
    const total = part.reduce((sum, partItem) => sum + partItem.exercises, 0)
    return (
        <h4>total of {total} exercises</h4>
    )
}
const Course = ({courseItem}) => {
    console.log(courseItem)
  return (
    <div>
      <Header name ={courseItem} />
      <Content part={courseItem.parts}/>
      <Total part={courseItem.parts}/>
    </div>
  )
}

export default Course
