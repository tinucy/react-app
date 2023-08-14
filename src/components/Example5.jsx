import React from "react";

export default function Example5() {
  //variable
  const name = "John Doe";
  const age = 30 + 5;

  //array

  const hobbies = ["movies", "music", "sports"];

  const address1 = ["50 Main St", "Boston", "MA"];

  //object
  const address = {
    street: "50 Main St", //key is street value is "50 Main St"
    city: "Boston",
    state: "MA",
  };

  //array of objects e.g having multiple addresses in one object
  const todos = [
    {
      id: 1,
      text: "Take out trash",
      isCOmpleted: true,
    },

    {
      id: 2,
      text: "Meeting with boss",
      isCOmpleted: true,
    },

    {
      id: 3,
      text: "Dentist Appt",
      isCOmpleted: "false",
    },
  ];

  //map function

  return (
    <>
      <div>{name}</div>
      <p>{age}</p>
      <p>{hobbies[0]}</p>
      <div>{address.city}</div>
      <p>{address.state}</p>
      <p>{address.street}</p>
      <p>{address["state"]}</p>
      <p>{address["street"]}</p>
      {/* <p>{todos[0]}</p> */}
      <p>{todos[1]["text"]}</p>
      <p>{todos[2]["isCompleted"]}</p>
    </>
  );
}
