import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function Academic() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BT1101</td>
            <td>Introduction to Business Analytics</td>
          </tr>
          <tr>
            <td>BT2101</td>
            <td>Econometrics Modelling for Business Analytics</td>
          </tr>
          <tr>
            <td>BT2102</td>
            <td>Data Management and Visualisation</td>
          </tr>
          <tr>
            <td>BT2103</td>
            <td>Optimization Methods in Business Analytics</td>
          </tr>
        </tbody>
      </Table>
      <Button href="login" variant="primary" size="sm">
        Sign in with Google
      </Button>
    </div>
  );
}

export default Academic;
