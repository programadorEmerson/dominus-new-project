import React from "react";
// react component used to create charts
import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  OverlayTrigger,
  Table,
  Tooltip,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-map-big text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Área de plantio</p>
                      <Card.Title as="h5">685566.82 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-bar-32 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Insumos</p>
                      <Card.Title as="h5">664282.74 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-35 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Área Aplicada</p>
                      <Card.Title as="h5">678234.43 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-36 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Área não aplicada</p>
                      <Card.Title as="h5">60905.43 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-square-pin text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Aplicação efetiva</p>
                      <Card.Title as="h5">619212.82 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-alien-33 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Aplicação externa</p>
                      <Card.Title as="h5">19766.54 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-simple-remove text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Aplicação sobreposta</p>
                      <Card.Title as="h5">238834.13 ha</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  Aplicação - FUNG + FOLIAR
                </Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  className="ct-perfect-fourth"
                  data={{
                    labels: ["80%", "10%", "5%"],
                    series: [75, 15, 10],
                  }}
                  type="Pie"
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Efetiva <i className="fas fa-circle mr-1 text-danger"></i>
                  Externa <i className="fas fa-circle mr-1 text-warning"></i>
                  Sobreposta
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o"></i>
                  Última atualização há 2 horas
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Índices - 2021/2022</Card.Title>
                <p className="card-category">Mediana índice mensal</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: [
                      "Set",
                      "Out",
                      "Nov",
                      "Dez",
                      "Jan",
                      "Fev",
                      "Mar",
                      "Abr",
                      "Mai",
                      "Jun",
                      "Jul",
                      "Ago",
                    ],
                    series: [
                      [90, 95, 89, 88, 95, 88, 85, 90, 99, 76, 80, 90],
                      [11, 5, 9, 6, 5, 8, 5, 3, 9, 16, 8, 3],
                      [2, 8, 8, 3, 7, 4, 5, 9, 9, 6, 3, 9],
                    ],
                  }}
                  type="Bar"
                  options={{
                    seriesBarDistance: 10,
                    axisX: {
                      showGrid: false,
                    },
                    height: "245px",
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        seriesBarDistance: 5,
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Aplicação efetiva{" "}
                  <i className="fas fa-circle mr-1 text-warning"></i>
                  Aplicação sobreposta{" "}
                  <i className="fas fa-circle mr-1 text-danger"></i>
                  Aplicação externa
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Última atualização em: 01/08/2022 às 10:53
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Laudos / Índices</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: [
                      "0%",
                      "10%",
                      "20%",
                      "30%",
                      "40%",
                      "50%",
                      "60%",
                      "70%",
                      "80%",
                      "90%",
                      "100%",
                    ],
                    series: [
                      [93, 75, 90, 99, 89, 75, 88, 95, 90, 70, 90],
                      [3, 9, 19, 7, 20, 11, 18, 15, 10, 17, 19],
                      [13, 5, 9, 9, 2, 1, 8, 5, 0, 7, 9],
                    ],
                  }}
                  type="Line"
                  options={{
                    low: 0,
                    high: 100,
                    showArea: false,
                    height: "245px",
                    axisX: {
                      showGrid: true,
                    },
                    lineSmooth: true,
                    showLine: true,
                    showPoint: true,
                    fullWidth: true,
                    chartPadding: {
                      right: 50,
                    },
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Aplicação efetiva{" "}
                  <i className="fas fa-circle mr-1 text-danger"></i>
                  Aplicação externa{" "}
                  <i className="fas fa-circle mr-1 text-warning"></i>
                  Aplicação sobreposta
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Última atualização em: 01/08/2022 às 10:53
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  Locais com maiores indices aplicados
                </Card.Title>
                <p className="card-category">Últimos 12 meses de referência</p>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="6">
                    <Table responsive>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>Minas Gerais</td>
                          <td className="text-right">2.920 ha</td>
                          <td className="text-right">53.23%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>São Paulo</td>
                          <td className="text-right">1.300 ha</td>
                          <td className="text-right">20.43%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>Goiás</td>
                          <td className="text-right">760 ha</td>
                          <td className="text-right">10.35%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>Bahia</td>
                          <td className="text-right">690 ha</td>
                          <td className="text-right">7.87%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>Alagoas</td>
                          <td className="text-right">600 ha</td>
                          <td className="text-right">5.94%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td>
                          <td>Rio de Janeiro</td>
                          <td className="text-right">550 ha</td>
                          <td className="text-right">4.34%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="ml-auto mr-auto" md="6">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll
                      containerStyle={{
                        width: "100%",
                        height: "300px",
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 10,
                          "stroke-opacity": 0,
                        },
                      }}
                      series={{
                        regions: [
                          {
                            values: {
                              BR: 50,
                            },
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial",
                          },
                        ],
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-688296980">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-202192706">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-746544352">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-743037005">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-855684210">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-242945902">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488557184">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-789597281">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-521344137">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-934093947">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-97404283">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-888894273">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Dashboard;
