import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="footer">
      <Container>
        <div className="footer-text">Designed by Emeka Ikele &#169; {year}</div>
      </Container>
    </div>
  );
}
