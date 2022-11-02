import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

function Admission() {
  return (
    <div>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          Understanding Admission requirements
        </ListGroup.Item>
        <ListGroup.Item as="li">Submit application online</ListGroup.Item>
        <ListGroup.Item as="li">Upload supporting documents</ListGroup.Item>
        <ListGroup.Item as="li">Make application fee payment</ListGroup.Item>
        <ListGroup.Item as="li">Check application status </ListGroup.Item>
      </ListGroup>
      <Button href="login" variant="primary" size="sm">
        Sign in with Google
      </Button>
    </div>
  );
}

export default Admission;
