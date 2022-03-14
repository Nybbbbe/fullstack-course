const Total = (props) => {
  const sum = (parts) => {
    // let s = 0;
    // parts.forEach(part => {
    //   s += part.exercises
    // });
    // return s;
    const total = parts.reduce((s, p) => {
      return (s.exercises ? s.exercises : s) + p.exercises;
    })
    return total;
  }

  return (
    <p>total of {sum(props.parts)} exercises</p>
  )
}

export default Total;