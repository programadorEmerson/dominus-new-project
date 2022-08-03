import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <Container fluid className="pl-4 ml-2">
          <nav>
            
            <p className="copyright text-center">
              © <script>document.write(new Date().getFullYear())</script>
              <a href="#">Spray Plan | Dominus Soli</a>
            </p>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default AdminFooter;
