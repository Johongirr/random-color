import React from "react";
import styled from "styled-components";

const GenerateColorPaletteBox = styled.div`
  background-color: rgb(101, 59, 155);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto 10px auto;
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
      <p style={{ marginBottom: "50px" }}>
        Press <strong>Spacebar</strong> to generate new palettes.
      </p>
    </React.Fragment>
  );
}

export default GenerateColorPalette;
