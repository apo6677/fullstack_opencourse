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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name1={part1.name} exercises_1={part1.exercises} name2={part2.name} exercises_2={part2.exercises} name3={part3.name} exercises_3={part3.exercises} />
      <Total exercises_1={part1.exercises} exercises_2={part2.exercises} exercises_3={part3.exercises} />
    </div>
  )
}
export default App