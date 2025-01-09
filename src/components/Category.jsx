import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import BookList from "./BookList";

class Category extends Component {
  state = {
    selectedCategory: "",
    books: [],
  };
  handleCategorySelect = (category) => {
    let books = [];
    switch (category) {
      case "Fantasy":
        books = fantasy;
        break;
      case "History":
        books = history;
        break;
      case "Horror":
        books = horror;
        break;
      case "Romance":
        books = romance;
        break;
      case "Scifi":
        books = scifi;
        break;
      default:
        books = fantasy;
    }
    this.setState({
      selectedCategory: category,
      books: books,
    });
  };
  render() {
    return (
      <>
        <Container>
          <Button variant="dark"  onClick={() => this.handleCategorySelect("Fantasy")}>Fantasy</Button>
          <Button variant="dark" onClick={() => this.handleCategorySelect("History")}>History</Button>
          <Button variant="dark"  onClick={() => this.handleCategorySelect("Horror")}>Horror</Button>
          <Button variant="dark" onClick={() => this.handleCategorySelect("Romance")}>Romance</Button>
          <Button variant="dark" onClick={() => this.handleCategorySelect("Scifi")}>Scifi</Button>
          
          {this.state.books.length > 0 &&(
          <BookList key={this.state.selectedCategory} books={this.state.books} />
        )}
        </Container>
      </>
    );
  }
}

export default Category;
