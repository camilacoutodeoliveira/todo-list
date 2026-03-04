import React, { useEffect, useRef } from "react";

export const Refs: React.FC = () => {
  const inputRef = useRef(null);


  return (
    <div>
      <h1>useRef</h1>
      <input type="text" placeholder="nome completo" ref={inputRef} />
      <button>Clique aqui</button>
    </div>
  );
};
