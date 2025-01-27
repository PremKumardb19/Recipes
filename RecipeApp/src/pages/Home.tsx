import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WorkingSection from "../components/WorkingSection";
import DeliverySection from "../components/DeliverySection";
import WhySection from "../components/WhySection";
import Testimonials from "../components/Testimonials";
import FavMeals from "../components/FavMeals";
import Faq from "../components/Faq";
import Joke from "../components/Joke"; 
import data from "../data/data";
import { Modal, Button } from "react-bootstrap";

const Home = ({ isLogged, setIsLogged }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar setIsLogged={setIsLogged} />
      <Hero />
      {isLogged && (
        <Button
          style={{
            backgroundColor: "orangered",
            border: "none",
          }}
          className="mx-auto d-block mt-3 rounded"
          onClick={handleShowModal}
        >
          Show Fun Section 🎉
        </Button>
      )}
      <WorkingSection />
      <DeliverySection />
      <WhySection />
      <FavMeals />
      <Testimonials />
      <Faq data={data} title="FAQs"/>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        style={{
          backgroundColor: "transparent",
        }}
        className="custom-modal"
      >
        <Modal.Header
        className="d-flex flex-row justify-content-between"
          style={{
            backgroundColor: "black"
          }}
         >
          <Modal.Title>🎉 Fun Section!</Modal.Title>
          <button
            type="button"
            style={{
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleCloseModal}
          >
            ✖
          </button>
        </Modal.Header>
        <Modal.Body
          className="custom-modal-body"
          style={{
            backgroundColor: "black",
          }}
        >
          <Joke />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
