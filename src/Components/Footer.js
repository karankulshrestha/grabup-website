import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/Footer.css";
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <MDBFooter
      bgColor="black"
      className="text-center text-lg-start text-muted mt-24 foot"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a> */}
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a> */}
          {/* <a href="karankulx@gmail.com" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a> */}
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a> */}
          <a href="https://www.linkedin.com/in/karankulshrestha/" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://www.github.com/karankulshrestha" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img src={logo} width={150} height={150}/>
              <p>
              We're not afraid to take risks, and we're not afraid to fail.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>Grabup App</p>
              <p className=" mt-2">Grabup Scrap Monitoring System</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Product
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Customer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vision
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Company
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                We-work sector 16b, Noida, UP, India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contact@grabup.co
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 6397521755
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright {" : "}
        <a className="text-reset fw-bold" href="https://grabup.co/">
          Grabup.co
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
