import React from "react";

import './Button.css';

export const Button = ({ onClick, children }) => (
  <button type="button" className="btn" onClick={onClick}>
    {children}
  </button>
);
