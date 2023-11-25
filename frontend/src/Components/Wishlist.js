import React, { useContext } from "react";

import { mycontext } from "./Context";
import { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import { Axios } from "../App";

const Wishlist = () => {
  const { wishlist, setWishlist, userID, handlePrice } = useContext(mycontext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/user/Wishlist/${userID}`);
        setWishlist(response.data.wishlist);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setWishlist, userID]);

  return (
    <div>
      <div className="menhead">Wishlist</div>

      <Container fluid className="my-5">
        <Row xs={1} md={2} lg={4} className="g-4">
          {wishlist.map((product) => (
            <Col key={product._id} className="mb-4">
              <Card>
                <div className="d-flex justify-content-between p-3">
                  {/* <p className="lead mb-0">Today's Combo Offer</p> */}
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">
                      <img src="https://img.icons8.com/?size=24&id=84881&format=png" />
                    </p>
                  </div>
                </div>
                <Card.Img
                  src={product.image}
                  variant="top"
                  alt="shoe"
                  id={product._id}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="small"></p>
                    <p className="small text-danger">{product.price}</p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{product.title}</h5>
                    {/* <h5 className="text-dark mb-0">{product.offerPize}</h5> */}
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      {/* Brands: <span className="fw-bold">{product.brand}</span> */}
                    </p>
                  </div>

                  {/* <button id={product._id} onClick={passid1}>remove </button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Wishlist;
