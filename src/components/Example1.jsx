import React from "react";
// import Greetings from "./Greetings";

function Greetings({ name, prof }) {
  return (
    <div>
      This is {name}, I am a {prof}
    </div>
  );
}

export default function Example() {
  return (
    <>
      <Greetings name="Kingsley" prof="software Eng" />;
      <Greetings name="Bisi" prof="Doctor" />
    </>
  );
}
