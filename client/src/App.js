import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import Home from "./pages/Home";
import styled from "styled-components";
import ItemDetails from "./pages/ItemDetails";
import { Routes, Route, Link } from "react-router-dom";
import Table from "./components/Table";

const Container = styled.div`
  font-family: "Glory", sans-serif;
  /* margin: 0;
padding: 0; */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 90px;
  padding-top: 45px;
  background-color: #f8f8fa;
  width: 100%;
  @media (max-width: 700px) {
    padding-top: 10px;
  }
`;
const Nav = styled.div`
  background-color: #ffff;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: #706f7d;
`;
const Icons = styled.div`
  color: #bc257c;
  font-size: 1.5rem;
`;

function App() {
  return (
    <Container>
      <Nav>
        <Icons>
          <AiOutlineSend />
        </Icons>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>LOGO</Title>
        </Link>
      </Nav>

      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* <Route  path="/company" element={ <Table />} > */}
          <Route path="/company/:companyId" element={<ItemDetails />} />
          {/* </Route> */}
        </Routes>

        <ItemDetails />
      </Wrapper>
    </Container>
  );
}

export default App;
