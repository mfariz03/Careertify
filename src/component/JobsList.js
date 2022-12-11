import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../CSS/JobsList.css"

function JobsList ({dbjobs}) {
    return (
        dbjobs.length > 0 ?
        <div className="row m-4">
        {dbjobs.map((pekerjaan) => (
        <div className="col-md-3 my-2">
          <Card className="card" >
            <Card.Img variant="top" src={pekerjaan.logo} className='img-thumbnail img-jobs' />
            <Card.Body>
              <Card.Title>{pekerjaan.job}</Card.Title>
              <Card.Text>
                <p>Perusahaan : {pekerjaan.company}</p>
                <p>Lokasi : {pekerjaan.location}</p>
              </Card.Text>
              <Button variant="primary" size="sm" href={pekerjaan.detail} target="blank"><h6 className="btn-jobs">Detail Jobs</h6></Button>
                
            </Card.Body>
          </Card>
        </div>
        ))}
      </div> : 
      <h1>Nothing Jobs</h1>
    )
}

export default JobsList;