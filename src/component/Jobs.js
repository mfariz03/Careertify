import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgAbout from '../Images/logo_kecil.jpg'
import { Link } from "react-router-dom";

import "../CSS/Jobs.css"

const Jobs=()=>{
  return(
    <>
    <div className="Container_job">
      <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
      <Card.Img className="img_about" variant="top" src={imgAbout}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="card_text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" target="blank" href="https://www.jobstreet.co.id/id/job/it-programmer-specialist-4132759?jobId=jobstreet-id-job-4132759&sectionRank=1&token=0~bbeecc5c-a8f7-4d23-acce-2b8337d71492&searchPath=%2Fid%2Fjob-search%2Fweb-jobs%2F&fr=SRP%20View%20In%20New%20Tab">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
      <Card.Img className="img_about" variant="top" src={imgAbout}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="card_text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
      <Card.Img className="img_about" variant="top" src={imgAbout}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="card_text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
      <Card.Img className="img_about" variant="top" src={imgAbout}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="card_text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      </div>
      
    </>
  )
}
export default Jobs;