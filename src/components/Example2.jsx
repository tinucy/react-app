import React from "react";

function Dog(props) {
  // const { name, age } = props;
  return (
    <>
      <p>Dog Name: {props.name} </p>
      <p>Age ={props.age}</p>
      <p>Habit ={props.Habit}</p>
    </>
  );
}

export default function Example2() {
  return (
    <>
      <Dog name="fufu" age={32} />
      <Dog name="Bingo" age={2} Habit="chewing" />
    </>
  );
}
