import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div>
        <Card
          className="singlebook"
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img className="singleimage"variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <h6>{this.props.book.category}</h6>
            <h6>{this.props.book.price}$</h6>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </div>
    );
  }
}

export default SingleBook;
