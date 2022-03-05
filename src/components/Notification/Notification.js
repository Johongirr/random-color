import React from "react";
import styled from "styled-components";

const NotificationBox = styled.div`
  background-color: rgb(5, 5, 26);
  max-width: 400px;
  margin: 0 auto;
  padding: 12px;
  margin-bottom: 40px;
  border-radius: 30px;
  color: rgb(235, 235, 235);
`;

function Notification({ copiedColor }) {
  return (
    copiedColor && (
      <NotificationBox>Color {copiedColor} copied to clipboard</NotificationBox>
    )
  );
}

export default Notification;
