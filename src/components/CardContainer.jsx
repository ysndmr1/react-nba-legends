import { Container, Row, Col } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import Form from "react-bootstrap/Form";
import { useState } from "react";

//** */
//** */

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container rounded-4 my-4 p-3 ">
        <Row className="g-3 justify-content-center">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((item, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <PlayerCard {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
