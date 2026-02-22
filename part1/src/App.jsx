// const Header = (props) => {
//   console.log(props)
//   return <h1>{props.course}</h1>
// }
// const Part = (props) => {
//   return(
//     <p>{props.title} {props.exercises}</p>
//   )
// }



// const Content= ({parts}) => {
//   return (
//     <div>
//       <Part title ={parts[0].name} exercises={parts[0].exercises}/>
//       <Part title ={parts[1].name} exercises={parts[1].exercises}/>
//       <Part title ={parts[2].name} exercises={parts[2].exercises}/>
//     </div>
//   )
// }
// const Total= ({parts}) => {
//   return(
//     <p>
//       Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
//     </p>
//   )
// }
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
  
//     parts: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//       },
//       {
//       name: 'Using props to pass data',
//       exercises : 7
//       },
//       {
//       name: 'State of a component',
//       exercises: 14
//       }
//     ],
//     doAddition: function() {
//       return this.parts[0].exercises + this.parts[1].exercises + this.parts[2].exercises
//     }
//   }
//   const ref = course.doAddition.bind(course)
  
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts= {course.parts} />
//       <Total parts={course.parts} />
//       <p>Number of exercises {ref()}</p>
//     </div>
//   )
// }

// export default App
// import { useState } from "react"

// const Display = ({counter }) => <h1>{counter}</h1>
// const Duttom = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//     const [counter , setCounter] = useState(0)
//     console.log('rendering...', counter)

//     // setTimeout(() => setCounter(counter + 1), 1000)

//     // console.log('rendering...', counter)
//     const plusOne = () =>{
//         console.log('incrementing...', counter)
//         setCounter(counter + 1)
//     }
//     const zero = () => {
//         console.log('resetting...', counter)
//         setCounter(0)
//     }
//     const minOne = () => {
//         console.log('decrementing...', counter)
//         setCounter(counter -1)
//     }
//     return(
//         <div>
//             <Display counter={counter}/>
//             <Duttom onClick={plusOne} text="plus"/>
//             <Duttom onClick={zero} text="zero"/>
//             <Duttom onClick={minOne} text="minus"/>
//         </div>
//     )
// }
// export default App

// import React from 'react'
// const History = ({allClicks}) => {
//     if (allClicks.length === 0) {
//         return <p>the history is empty</p>
//     }
//     return <p>{allClicks.join(' ')}</p>
// }

// const Button = (props) => {
//     console.log(props)
//     const {handleClicks, text} = props
//     return (
//         <button onClick={handleClicks}>{text}</button>
//     )
// }

// const Buttom = ({onClick, text}) =>{
//     return(
//         <button onClick={onClick}>{text}</button>
//     )
// }

// const Display = ({counter}) => <h1>{counter}</h1>
// const App = () => {
//     const [left, setLeft] = React.useState(0)
//     const [right, setRight] = React.useState(0)
//     const [allClicks, setAllClicks] = React.useState([])
//     const [total, setTotal] = React.useState(0)
//     const [value , setValue] = React.useState(10)

//     const setToValue = (newValue) =>{
//         console.log('value now', newValue)
//         setValue(newValue)
//     }
//     const handleLeftClick = () => {
//         setAllClicks(allClicks.concat('L'))
//         console.log('before left', left)
//         const updatedLeft = left + 1
//         setLeft(updatedLeft)
//         console.log('after left', updatedLeft)
//         setTotal(updatedLeft + right)
//     }
//     const handleRightClicks = () => {
//         setAllClicks(allClicks.concat('R'))
//         console.log('before right', right)
//         const updatedRight = right + 1
//         setRight(updatedRight)
//         console.log('after right', updatedRight)
//         setTotal(left + updatedRight)

//     }
//     const hello = (who) => () => {
//             console.log('hello', who)
//     }

//     return (
//         <div>
//             {left}
//             <Button handleClicks={handleLeftClick} text="left" />
//             <Button handleClicks={handleRightClicks} text="right" />
//             {right}
//             <p>total = {total} </p>
//             <History allClicks={allClicks} />
//             <button onClick={hello('world')}>button</button>
//             <button onClick={hello('react')}>button</button>
            
//             <Display counter={value}/>
//             <Buttom onClick = {() => setToValue(1000)} text='thousand'></Buttom>
//             <Buttom onClick = {() => setToValue(0)} text='rest'></Buttom>
//             <Buttom onClick = {() => setToValue(value + 1)} text='increment'></Buttom>
//         </div>
//     )
// }

// export default App

import React from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = React.useState(0)
    const [voted, setVoted] = React.useState(new Array(anecdotes.length).fill(0))
    const Vote = () => {
        const copy = [...voted]
        copy[selected] += 1
        setVoted(copy)
    }
    const max = Math.max(...voted)
    const index = voted.indexOf(max)
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {voted[selected]} votes</p>

            <button onClick={Vote}>vote</button>
            <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[index]}</p>
            <p>has {voted[index]} votes</p>
        </div>
    )
}

export default App
