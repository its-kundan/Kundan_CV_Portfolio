
"use client"
import React, { useState } from "react";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'transparent',
          color: 'inherit',
          border: 'none',
          textAlign: 'left',
          width: '100%',
          padding: '0.5em 1em',
          cursor: 'pointer',
        }}
      >
        {question}
      </button>
      {isOpen && (
        <div className="accordion-content" style={{ padding: '0 1em 1em' }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default Accordion;
