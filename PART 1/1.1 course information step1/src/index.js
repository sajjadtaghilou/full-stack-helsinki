import React from  'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  //console.log("rerender from header");
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  const paragraphs = props.course.parts.map(
    part => <p> {part.name} {part.exercises}</p>
  )
  return (
    <>
    {paragraphs}
    </>
  )
}

const Total = (props) => {

  return (
        <p> Number of exercises {props.course.parts.map(item => item.exercises).reduce((accumulator, currValue) => accumulator + currValue) }</p>
    )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ] 
  }
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>

  )
}
ReactDOM.render(<App /> , document.getElementById('root'));