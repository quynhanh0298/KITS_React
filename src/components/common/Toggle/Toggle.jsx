import React from "react";
import { styled } from "styled-components";

const StyledToggle = styled.label`
  zoom: ${(props) => props.zoom};
  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-slot {
    position: relative;
    height: 10em;
    width: 20em;
    border: 5px solid #e4e7ec;
    border-radius: 10em;
    background-color: white;
    box-shadow: 0px 10px 25px #e4e7ec;
    transition: background-color 250ms;
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
  }

  .toggle-button {
    transform: translate(11.75em, 1.75em);
    position: absolute;
    height: 6.5em;
    width: 6.5em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
    transition: background-color 250ms, border-color 250ms,
      transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(1.75em, 1.75em);
  }

  .sun-icon {
    position: absolute;
    height: 6em;
    width: 6em;
    color: #ffbb52;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 6em;
    width: 6em;
    opacity: 1;
    transform: translate(2em, 2em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(3em, 2em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 6em;
    width: 6em;
    color: white;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 6em;
    width: 6em;
    opacity: 0;
    transform: translate(11em, 2em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms,
      transform 500ms cubic-bezier(0.26, 2.5, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(12em, 2em) rotate(-15deg);
  }
`;

export const Toggle = ({ zoom }) => {
  return (
    <StyledToggle zoom={zoom}>
      <input className="toggle-checkbox" type="checkbox"></input>
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <div
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <div
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </StyledToggle>
  );
};