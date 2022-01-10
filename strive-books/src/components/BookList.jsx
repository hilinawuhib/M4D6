import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search Books</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) => b.title.toLowerCase().includes(this.state.search))
            .map((b) => (
              <Col key={b.asin}>
                <SingleBook  book={b} />
              </Col>
            ))}
        </Row>
      </Container>
      
    );
  }
}

export default BookList;
