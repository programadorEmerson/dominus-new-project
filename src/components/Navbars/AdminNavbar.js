import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
  Collapse,
} from "react-bootstrap";

function AdminNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <Button
                className="btn-fill btn-round btn-icon d-none d-lg-block bg-dark border-dark"
                variant="dark"
                onClick={() => document.body.classList.toggle("sidebar-mini")}
              >
                <i className="fas fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i className="fas fa-bars visible-on-sidebar-mini"></i>
              </Button>
              <Button
                className="btn-fill btn-round btn-icon d-block d-lg-none bg-dark border-dark"
                variant="dark"
                onClick={() =>
                  document.documentElement.classList.toggle("nav-open")
                }
              >
                <i className="fas fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i className="fas fa-bars visible-on-sidebar-mini"></i>
              </Button>
            </div>
            {/* <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
              Xablau
            </Navbar.Brand> */}
          </div>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <Navbar.Collapse className="justify-content-end" in={collapseOpen}>
            <Nav className="nav mr-auto" navbar>
              <Form
                className="navbar-form navbar-left navbar-search-form ml-3 ml-lg-0"
                role="search"
              >
                <InputGroup>
                  <i className="nc-icon nc-zoom-split"></i>
                  <Form.Control
                    defaultValue=""
                    placeholder="Pesquisar..."
                    type="text"
                  ></Form.Control>
                </InputGroup>
              </Form>
            </Nav>
            <Nav navbar>
              {/* <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  id="dropdown-165516306"
                  variant="default"
                >
                  <i className="nc-icon nc-planet"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Create New Post
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Manage Something
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Do Nothing
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Submit to live
                  </Dropdown.Item>
                  <li className="divider"></li>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  id="dropdown-414718872"
                  variant="default"
                >
                  <i className="nc-icon nc-bell-55 mr-1"></i>
                  <span className="notification">3</span>
                  <span className="d-lg-none">Notification</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Novo arquivo
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Alerta de deriva
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Nova aplicação
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  id="dropdown-41471887333"
                  variant="default"
                >
                  <i className="nc-icon nc-bullet-list-67"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  alignRight
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {/* <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="nc-icon nc-email-85"></i>
                    Mensagens
                  </Dropdown.Item> */}
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="nc-icon nc-headphones-2"></i>
                    Suporte
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="nc-icon nc-settings-90"></i>
                    Configuração
                  </Dropdown.Item> */}
                  <div className="divider"></div>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="nc-icon nc-lock-circle-open"></i>
                    Bloquear
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="nc-icon nc-button-power"></i>
                    Encerrar
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
