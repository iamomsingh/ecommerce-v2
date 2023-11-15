import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <h1>Welcome to om shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
