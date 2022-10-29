import React from "react";
import { WorkWrapper, Card } from "./styled";

const Work = () => {
  return (
    <>
      <WorkWrapper id="work">
        <h1>Works</h1>
        <Card>
          <h3>IPMUGO Digital Library</h3>
          <p>
            Digital Library website for search media for various scientific and
            research works
          </p>
          <p>
            <strong>Technology Stack</strong> - Javascript, Express JS,
            PostgreSQL, Elasticsearch
          </p>
        </Card>

        <h1 style={{ margin: "2rem 0" }}>Other Projects</h1>
        <section>
          <Card>
            <h3>Website Blog</h3>
            <p>Simple Blog Rest API </p>
            <p>
              <strong>Technology Stack</strong> - Java, Spring Boot, PostgreSQL,
            </p>
          </Card>
          <Card>
            <h3>Website E-Commerce</h3>
            <p>Simple E-Commerce Rest API </p>
            <p>
              <strong>Technology Stack</strong> - Javascript, Express JS,
              PostgreSQL,
            </p>
          </Card>
        </section>

        <a
          style={{ margin: "1rem 0" }}
          href="https://github.com/DDV2412?tab=repositories"
        >
          More on GitHub
        </a>
      </WorkWrapper>
    </>
  );
};

export default Work;
