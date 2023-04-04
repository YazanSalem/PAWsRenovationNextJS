import '../styles/Profile.css'

export default function Profile() {
  return (
    <div id="profile_format">
    <ul className="header mb-3">
      <div className="finances-header">
      <h1>Profile</h1>
      </div>
    </ul>
   {renderPersonalInfo()}
</div>
  );}
  function renderPersonalInfo()
  { 
    return( 
      <div>
        Hi there
      </div>
      /*
    <Card className="profile-card">

      <Card.Body>
        <Row>
          <Col className="personal-info">
            <h3 className="section-title">Personal Information</h3>
            <hr className="section-divider" />
            <div className="info-row">
              <div className="info-label">First Name:</div>
              <div className="info-value">John</div>
            </div>
            <div className="info-row">
              <div className="info-label">Last Name:</div>
              <div className="info-value">Doe</div>
            </div>
            <div className="info-row">
              <div className="info-label">Username:</div>
              <div className="info-value">johndoe</div>
            </div>
            <div className="info-row">
              <div className="info-label">Email:</div>
              <div className="info-value">johndoe@example.com</div>
            </div>
            <div className="info-row">
              <div className="info-label">Phone Number:</div>
              <div className="info-value">123-456-7890</div>
            </div>
          </Col>
          <Col className="academic-info">
            <h3 className="section-title">Academic Information</h3>
            <hr className="section-divider" />
            <div className="info-row">
              <div className="info-label">Institution:</div>
              <div className="info-value">Example University</div>
            </div>
            <div className="info-row">
              <div className="info-label">Program:</div>
              <div className="info-value">Computer Science</div>
            </div>
            <div className="info-row">
              <div className="info-label">Major:</div>
              <div className="info-value">Software Engineering</div>
            </div>
            <div className="info-row">
              <div className="info-label">Minor:</div>
              <div className="info-value">Mathematics</div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    */
  );
}

