import ListGroup from 'react-bootstrap/ListGroup';

function Admission() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Understanding Admission requirements</ListGroup.Item>
      <ListGroup.Item as="li">Submit application online</ListGroup.Item>
      <ListGroup.Item as="li">Upload supporting documents</ListGroup.Item>
      <ListGroup.Item as="li">Make application fee payment</ListGroup.Item>
      <ListGroup.Item as="li">Check application status </ListGroup.Item>
    </ListGroup>
  );
}

export default Admission;