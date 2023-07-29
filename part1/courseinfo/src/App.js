const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )

} 

const Part1 = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        <b>Course Part1:</b> {props.course.parts[0].part} <b> Num. of excercises:</b> {props.course.parts[0].exercises} </p>
    </div>
  )
}

const Part2 = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        <b>Course Part2:</b> {props.course.parts[1].part} <b> Num. of excercises:</b> {props.course.parts[1].exercises} </p>  
    </div>  
  )
}

const Part3 = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        <b>Course Part3:</b> {props.course.parts[2].part}  <b> Num. of exercises </b> {props.course.parts[2].exercises}
      </p> 
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <Part1 course={props.course} />
      <Part2 course={props.course} />
      <Part3 course={props.course} />
    </div>   
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        <b>Total Number of exercises:</b> {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises }
      </p>
    </div>
  )
}

const App = () => {
  
  const course = {
    name: "Half Stack application development",
    parts: [{ part: 'fundamentals of React', exercises: 10 }, { part: 'Using props to pass data', exercises: 7 }, { part: 'State of a component', exercises: 14 }]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App