import { Alert, Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8} lg={6}>
          <Alert variant="success">
            <h4>Benvenuto su Epibrary!</h4>
            <p>
              Scopri prodotti fantastici e offerte imperdibili. Siamo felici di
              averti qui!
            </p>
            <hr />
            <h5 className="text-center">
              Il posto giusto per trovare i migliori libri, gadget e tanto
              altro!
            </h5>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
