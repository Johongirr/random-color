import React, { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";
import ColorList from "./components/ColorList/ColorList";
import GenerateColorPalette from "./components/GenerateColorPalette/GenerateColorPalette";
import styled, { css } from "styled-components";
import { getRandomColor } from "./api/randomColorApi";

const AppBox = styled.main`
  background-color: hsl(216, 79%, 91%);
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  padding: 20px 0;
  margin: 0 auto;
`;
const AppTitle = styled.h1`
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2.5rem);
  font-weight: bold;
  color: #111;
`;

function App() {
  const [colors, setColor] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);
  const [randomColor, setRandomColor] = useState(false);
  const [couldCopyAllPallettes, setCouldCopyAllPotes] = useState(false);

  useEffect(() => {
    console.log(randomColor);
    getRandomColor(setColor);
    setCopiedColor(null);
  }, [randomColor]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        e.stopPropagation();
        e.preventDefault();
        getRandomColor(setColor);
        setCopiedColor(null);
        setCouldCopyAllPotes(false);
        return;
      } else if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        setCouldCopyAllPotes(true);
        return;
      }
      setCouldCopyAllPotes(false);
    });
  }, []);
  const generateRandomColor = () => setRandomColor(!randomColor);
  const getCopiedColor = (color) => {
    setCopiedColor(color);
  };
  return (
    <AppBox>
      <Wrapper>
        <AppTitle>Random Color Palette Generator</AppTitle>
        <GenerateColorPalette generateRandomColor={generateRandomColor} />
        <Notification copiedColor={copiedColor} />
        <ColorList
          couldCopyAllPallettes={couldCopyAllPallettes}
          colors={colors}
          getCopiedColor={getCopiedColor}
        />
      </Wrapper>
    </AppBox>
  );
}

export default App;

/**
 *  App
 *    Notification
 *    ColorList
 *      ColorItem
 *    GenerateColorPalette
 *
 */
