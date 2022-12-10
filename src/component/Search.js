import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Searchjob = () => {
  return (
    <Form className="d-flex m-4">
      <Form.Control
      type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
    </Form>
      )
}

export default Searchjob;