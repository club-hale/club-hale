'use client';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container fluid className="py-3">
      <Row className="align-middle text-center my-5">
        <h1 className="display-3 fw-bold mb-4">E Komo Mai to Club Hale</h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
          Your directory to the 200+ registered independent organizations at UH Manoa.
        </p>
        <div>
          <Button href="/directory" className="btn-primary-custom btn-lg me-3 px-4 py-2 shadow-sm">
            Explore Directory
          </Button>
          <Button href="/auth/signin" className="btn-secondary-custom btn-lg px-4 py-2 shadow-sm">
            Student Login
          </Button>
        </div>
      </Row>
    </Container>
    <hr className="custom-divider m-0" />
    <Container className="py-3 my-4">
      <h2 className="text-center mb-4 display-5 fw-bold">Features</h2>
      <p className="lead mb-4 mx-auto text-block">
        In Hawaiian, <em>Hale</em> means “House.” As such, the goal of <strong>Club Hale</strong> is to be a central hub that makes it as easy as possible for students to find organizations that suit their interests and for organizations to advertise to potential members.
      </p>
      <Row className="g-4">
        <Col md={4}>
          <Card className="custom-card p-3">
            <Card.Body>
              <Card.Title className="fw-bold fs-4 custom-card-header">
                1. Centralized Directory
              </Card.Title>
              <Card.Text>
                <strong>Detailed Profiles:</strong> Every club listing includes descriptions, meeting schedules and locations, official website/social links, officer contact details, and photo galleries.
              </Card.Text>
              <Card.Text>
                <strong>Smart Filtering:</strong> Browse beyond basic alphabetical lists. Search and filter organizations by type and interest categories.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card p-3">
            <Card.Body>
              <Card.Title className="fw-bold fs-4 custom-card-header">
                2. Tailored Experiences
              </Card.Title>
              <Card.Text>
                <strong>UH ID Authentication:</strong> Secure login using your official UH credentials to keep the community safe.
              </Card.Text>
              <Card.Text>
                <strong>Custom Notifications:</strong> Define your personal interest areas in your user profile to get notified whenever a new matching club is added or updated.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card p-3">
            <Card.Body>
              <Card.Title className="fw-bold fs-4 custom-card-header">
                3. Management Tools
              </Card.Title>
              <Card.Text>
                <strong>Club Admin Controls:</strong> Designated club officers can easily manage and update their club&apos;s profile, photos, and meeting details in real time.
              </Card.Text>
              <Card.Text>
                <strong>Super Admin Moderation:</strong> Site administrators oversee platform safety, approve privileges, monitor content appropriateness, and create new interest categories.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className="mb-5">
      <p className="lead mb-5 mx-auto text-block">
        Whether you&apos;re looking to build your resume, pick up a new athletic hobby, play music, or simply find your community on campus, this platform ensures you never miss out on what UH Manoa has to offer.
      </p>
      <p className="lead mb-3 mx-auto text-block fw-bold">
        Ready to find your perfect club? Get started today!
      </p>
      <Row className="align-middle text-center mb-5">
        <div className="">
            <Button href="/directory" className="btn-primary-custom btn-lg me-3 px-4 py-2 shadow-sm">
              Explore Directory
            </Button>
            <Button href="/auth/signin" className="btn-secondary-custom btn-lg px-4 py-2 shadow-sm">
              Student Login
            </Button>
        </div>
      </Row>
    </Container>
  </main>
);

export default Home;
