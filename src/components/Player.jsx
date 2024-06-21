import { useState, useRef } from "react";
export default function Player() {
  const [knownEntity, setKnownEntity] = useState("");
  const playerName = useRef();
  const handleClick = () => {
    setKnownEntity(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {knownEntity !== "" ? knownEntity : "unknown entity"}</h2>
      <p>
        <input type="text" id="input-name" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
