// -NavBar.jsx should allow users to navigate your project
import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link to="/">Home Page</Link>
        <Link to="characters/">Characters</Link>
        <Link to="about/">About Page</Link>
      </div>
    </nav>
  );
}

export default NavBar;

//   <Nav className="flex items-center justify-between">
//     <Row>
//       <Col className="basis=1/5">
//         <Link to="/">Home Page</Link>
//       </Col>
//       <Col>
//         <Link to="characters/">Characters</Link>
//       </Col>
//       <Col>
//         <Link to="about/">About Page</Link>
//       </Col>
//     </Row>
//   </Nav>;
