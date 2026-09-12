const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.info} {props.exercises}
      </p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part info={props.name1} exercises={props.exercises_1} />
      <Part info={props.name2} exercises={props.exercises_2} />
      <Part info={props.name3} exercises={props.exercises_3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises_1 + props.exercises_2 + props.exercises_3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course} />
      <Content name1={parts[0].name} exercises_1={parts[0].exercises} name2={parts[1].name} exercises_2={parts[1].exercises} name3={parts[2].name} exercises_3={parts[2].exercises} />
      <Total exercises_1={parts[0].exercises} exercises_2={parts[1].exercises} exercises_3={parts[2].exercises} />
    </div>
  )
}
export default App