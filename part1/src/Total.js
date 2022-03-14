const Total = (props) => {
  const sum = (parts) => {
    let s = 0;
    parts.forEach(part => {
      s += part.exercises
    });
    return s;
  }

  return (
    <p>Number of exercises {sum(props.parts)}</p>
  )
}

export default Total;