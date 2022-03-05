import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled, { css } from "styled-components";

const ColorCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 5px;
`;
const ColorCardOutput = styled.div`
  height: 250px;
  ${(props) => css`
    background-color: props.val;
  `}
`;

function ColorItem({ color, getCopiedColor }) {
  // console.log(color.palette);
  return (
    <ColorCard>
      {color?.palette.map((val, i) => (
        <CopyToClipboard text={val} key={i} onCopy={() => getCopiedColor(val)}>
          <div
            style={{
              backgroundColor: val,
              height: "200px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: "10px",
              color: "#000",
              fontWeight: "bold",
              marginBottom: "5px",
              cursor: "pointer",
            }}
          >
            {val}
          </div>
        </CopyToClipboard>
      ))}
    </ColorCard>
  );
}

export default ColorItem;
