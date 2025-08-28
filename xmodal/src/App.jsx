import { useState, useEffect } from "react";
import Modal from "./components/modal";

function App() {
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => console.log(isOpen), [isOpen]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>User Details Modal</h1>
        <button
          style={{
            color: "white",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            paddingLeft: "25px",
            paddingRight: "25px",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!isOpen)}
        >
          Open Form
        </button>

        {isOpen && <div styles={{position: "fixed"}}><Modal setOpen={setOpen} /></div>}
      </div>
    </>
  );
}

export default App;
