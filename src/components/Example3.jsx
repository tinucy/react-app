import React from "react";

function Child(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is student? {props.isStudent ? "Yes" : "No"} </p>
    </div>
  );
}

export default function Example3() {
  const person = {
    name: "David",
    age: 29,
    isStudent: false,
  };
  return (
    <>
      <Child {...person} /> {/*spread operator*/}
      {/*the below will give same as the spread operator above*/}
      <Child name={person.name} age={person.age} isStudent={person.isStudent} />
    </>
  );
}
