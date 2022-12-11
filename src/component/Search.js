import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Searchjob ({keyword, keywordChange}) {
  return (
    <Form className="d-flex m-4">
      <Form.Control
      type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={keyword} onChange={(event) => keywordChange(event.target.value)}
        />
        <Button variant="outline-success">Search</Button>
    </Form>
      )
}

Searchjob.propType = {
  keyword : PropTypes.string.isRequired,
  keywordChange : PropTypes.func.isRequired
}

export default Searchjob;