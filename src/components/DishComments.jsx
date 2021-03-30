import { ListGroup } from "react-bootstrap";
import React from "react";

class DishComments extends React.Component {
  render() {
    return this.props.selectedDish ? (
      <ListGroup>
        <h2>Comments for {this.props.selectedDish.name}</h2>
        {this.props.selectedDish.comments.map((c) => (
          <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    ) : (
      <h1>NOTHING YET</h1>
    );
  }
}

export default DishComments;

// mapping props.selectedDish.comments
