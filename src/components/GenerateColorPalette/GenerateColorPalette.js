import React from "react";
import styled from "styled-components";

const GenerateColorPaletteBox = styled.div`
  background-color: rgb(101, 59, 155);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  max-width: 400px;
  padding: 15px 0;
  color: white;
  cursor: pointer;
`;

function GenerateColorPalette({ generateRandomColor }) {
  return (
    <React.Fragment>
      <GenerateColorPaletteBox onClick={() => generateRandomColor()}>
        Generate Color Palette
      </GenerateColorPaletteBox>
    </React.Fragment>
  );
}

export default GenerateColorPalette;
