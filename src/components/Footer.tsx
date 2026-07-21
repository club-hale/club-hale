import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 custom-footer">
    <Container>
      <Col className="text-center">
        <span className="footer-title">Club Hale</span>
        <br />
        A Club Directory for the University of Hawaii at Manoa
        <br />
        <a href="https://club-hale.github.io/">Project Home Page</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
