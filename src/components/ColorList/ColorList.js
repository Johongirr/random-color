import React from "react";
import styled from "styled-components";
import ColorItem from "./ColorItem/ColorItem";

const ColorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
  row-gap: 20px;
`;

function ColorList({ colors, getCopiedColor }) {
  return (
    <ColorBox>
      {colors.length &&
        colors.map((color) => (
          <ColorItem
            key={color.id}
            color={color}
            getCopiedColor={getCopiedColor}
          />
        ))}
    </ColorBox>
  );
}

export default ColorList;
