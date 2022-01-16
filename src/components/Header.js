import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="heading">
            <img
              alt="Github Logo"
              src="/github-1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"   "}
            User Search
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
