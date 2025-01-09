import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Book from "../data/horror.json";
import "./AllTheBooks.css";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchInput: "",
    array:Book
  };

submit=(e)=>{
    e.preventDefault();
    const filter = Book.filter((item)=>
    item.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    this.setState({array:filter})

}

  render() {
    return (
      <>
        <Container className="my-3">
          <Row>
            <Form onSubmit={this.submit}>
              <Row className=" justify-content-center mb-3">
                <Col xs={4}>
                  <Form.Control
                    required
                    value={this.state.searchInput}
                    onChange={(e)=>{
                        this.setState({
                            searchInput:e.target.value
                        })
                    }}
                    type="text"
                    placeholder="Cerca"
                  />
                </Col>
                <Col xs="auto">
                  <Button variant="dark" type="submit" className="">
                    <i className="bi bi-search p-0"></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
          <Row xs={2} md={3} lg={4} xl={5}>
            {this.state.array.map((item) => {
              return (
                <SingleBook
                  key={item.asin}
                  title={item.title}
                  img={item.img}
                  cat={item.category}
                />
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
