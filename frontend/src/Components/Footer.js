import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "./Context";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

function Footer() {
  
  const { products } = useContext(mycontext);
 

  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "black" }}
    >
      <MDBContainer className="p-4">
        <br />
        <h2 className="styleshop">Shop by styles</h2>
       
        <section className="">
         <Link to="/Collection" >
          <MDBRow>

            
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
               
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw2cb4600c/images/large/196642425001-1.jpg?sw=310&sfrm=jpg"
                  className="w-100"
                  // onClick={tocollection} // Pass the product ID '1' for this example
                />

                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dwf9d68c9d/Category-Landing/Category-Desktop/Women/SP23_Women_Sandals.jpg?sw=500"
                  className="w-100"
                />
                <a href>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw8becb09c/Category-Landing/Category-Desktop/Mens/Desktop_Men_Casual_Lace_Ups.jpg?sw=500"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dwc21fb8b2/images/large/196311403231-1.jpg?sw=310&sfrm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dwb2de62d6/Category-Landing/Category-Desktop/Women/SP23_Women_Running.jpg?sw=500"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw060ee006/Category-Landing/Category-Desktop/Women/SP23_Women_CasualSneakers.jpg?sw=500"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
          </Link>
        </section>

        <br />
        <section className="">
        <Link to="/Collection" >
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw85a31b39/images/large/168027_CHOC.jpg?sw=300"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw0da37947/Category-Landing/Category-Desktop/Women/SP23_Women_SlipOn.jpg?sw=500"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dwcb386cc6/images/large/196642725095-1.jpg?sw=310&sfrm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dwd469dd7e/Category-Landing/Category-Desktop/Mens/SP23_Men_Sandals.jpg?sw=500"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw9c03fca8/images/large/196311468803-1.jpg?sw=310&sfrm=jpeg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers_india/default/dw6d80ad5c/images/large/194428039749-1.jpg?sw=310&sfrm=jpg"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
          </Link>
        </section>
      </MDBContainer>

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                PLASHOE
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sandals
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Casual wears
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Boot
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Oxford
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sales
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                New kkkd, NY 102312, Plashoe India
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                plashoe@info.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                232 2341
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://plashoe.com/">
          Plashoe.com.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
