const Header = ({ course }) => {
    return <h1> {course.name} </h1>
}

const Parts = (props) => {
    return (
        <p>
            {props.part.name}
            {props.part.exercises} 
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part) => (
                <Parts key={part.id} part={part}/>
            ))}
        </div>
    )
}

const Total = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0)
    
    return (
        <p> <b> Total of {totalExercises} excercises </b> </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course}/>
            
            
        </div>

    )


}

export default Course