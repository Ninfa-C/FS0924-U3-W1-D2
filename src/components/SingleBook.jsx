import { Component } from "react";
import {
    Card,
    Col,
    Badge,
    Button,
    CardGroup,
} from "react-bootstrap";

class SingleBook extends Component{
    state={
        selected:false
    }

    toggleSelected = () => {
        this.setState((current) => ({
          selected: !current.selected,
        }));
      };

render(){
    return (
        <Col>
             <Card
          className="mb-3"
          style={{
            height: "480px",
            border: this.state.selected ? "1px solid red" : "1px solid #dee2e6",}}
          onClick={this.toggleSelected}
        >
                <Card.Img variant="top" src={this.props.img} alt={this.props.title} style={{ height: "300px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <div>
                        <Card.Title className="short">{this.props.title}</Card.Title>
                        <Badge bg="warning" text="dark">
                            {this.props.category}
                        </Badge>
                    </div>
                    <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
                        <Button variant="danger" size="sm">
                            <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Aggiungi
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                            <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Scarta
                        </Button>
                    </CardGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}

}

export default SingleBook