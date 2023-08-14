import React from "react";

export default function Example6() {
  //array

  const hobbies = ["movies", "music", "sports", "reading", "travelling"];

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

  //map => used to loop thru an array

  return (
    <>
      <p>{hobbies[0]}</p>
      <p>{hobbies[1]}</p>
      <p>{hobbies[2]}</p>

      {/* //using mapp */}
      {hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}

      {hobbies.map((hobby) => (
        <li>I love {hobby}</li>
      ))}

      <p>-------------------------------------------------------</p>
      {todos.map((t) => (
        <li>Updates on todo list --- {t.text}</li>
      ))}

      <p>To display the index todo</p>
      {todos.map((t, index) => (
        <div>
          Index {index} {t.text}
        </div>
      ))}
    </>
  );
}
