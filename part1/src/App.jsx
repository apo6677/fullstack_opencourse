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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name1={part1} exercises_1={exercises1} name2={part2} exercises_2={exercises2} name3={part3} exercises_3={exercises3} />
      <Total exercises_1={exercises1} exercises_2={exercises2} exercises_3={exercises3} />
    </div>
  )
}
export default App