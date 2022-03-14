import Part from './Part';

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => {
        return (
          <Part 
            key={part.id}
            part={part.name}
            exercise={part.exercises}
          />
        )
      })}
    </div>
  )
}

export default Content;