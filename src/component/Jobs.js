import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dbJobs from "../utils/db.json";
import Searchjob from "./Search";
import "../CSS/Jobs.css"

const Jobs=()=>{
  return(
    <>
    <div>
      <Searchjob />
      <div className="row m-4">
        {dbJobs.pekerjaans.map((pekerjaan) => (
        <div className="col-md-3 my-2">
        <Card className="card" >
          <Card.Img variant="top" src={pekerjaan.logo} className='img-thumbnail' />
          <Card.Body>
          <Card.Title>{pekerjaan.job}</Card.Title>
          <Card.Text>
          <p>Perusahaan : {pekerjaan.company}</p>
          <p>Lokasi : {pekerjaan.location}</p>
          </Card.Text>
          <Button variant="primary" size="sm" href={pekerjaan.detail} target="blank"><h6 className="btn-jobs">Go somewhere</h6></Button>
        </Card.Body>
    </Card>

        </div>
        ))}
      </div> 
    </div>
    {/* <div className="Container_job">
    {dbJobs.pekerjaans.map((pekerjaan) => (
	  <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
	    <Card.Img className="img_about" variant="top" src={pekerjaan.logo}/>
            <Card.Body>
              <Card.Title>{pekerjaan.job}</Card.Title>
              <Card.Text className="card_text">
            	Perusahaan : {pekerjaan.company}, Lokasi : {pekerjaan.location}
              </Card.Text>
              <Button variant="primary" target="blank" href={pekerjaan.detail}>Detail Jobs</Button>
	    </Card.Body>
     	  </Card>
	))} */}
      {/* <Card className="py-3 container_jobs" style={{ width: '18rem' }}>
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
      </Card> */}
      
      {/* </div> */}
      
    </>
  )
}
export default Jobs;