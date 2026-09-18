const Header = ({ course_name }) => {
  return <h1>{course_name}</h1>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    console.log('what is happening here', sum, part.exercises)
    return sum + part.exercises
  }, 0)
  return <h3>Total number of exercises: {totalExercises}</h3>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course_name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course