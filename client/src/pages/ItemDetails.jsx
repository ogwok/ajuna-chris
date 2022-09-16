import React, { useEffect } from "react";
import styled from "styled-components";
//import heroImage from "../images/companyimg.jpeg";
import { useParams } from "react-router-dom";
import axios from "axios";

const Items = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100px;
`;
const ImageWrapper = styled.div`
  height: 200px;
`;

const Details = styled.div`
  height: 200px;
`;
const Adress = styled.div``;
const Contact = styled.div``;
const Nearby = styled.div``;

function ItemDetails() {
  const params = useParams();
  const [item, setItem] = React.useState();

  const fetchData = async () => {
    const response = await fetch(
      `https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f`
    );
    const data = await response.json();

    const results = await data.filter((item) => {
      return item.id == params.companyId;
    });
    setItem(results[0]);
  };

  useEffect(() => {
    fetchData();
  }, [params]);
  console.log("results: ", params);
  return (
    <>
      {item && (
        <Items>
          <ImageWrapper>
            <Image src={item.image} alt="...." />
          </ImageWrapper>
          <Details>
            <Adress>Adresses:{item.email}</Adress>
            <Contact>Contact:{item.phone}</Contact>
            <Nearby>Nearby:{item.address.street}</Nearby>
          </Details>
        </Items>
      )}
    </>
  );
}

export default ItemDetails;
