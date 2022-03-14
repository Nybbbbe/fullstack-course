import Part from './Part';

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => {
        return (
          <Part part={part.name} exercise={part.exercises} />
        )
      })}
    </div>
  )
}

export default Content;