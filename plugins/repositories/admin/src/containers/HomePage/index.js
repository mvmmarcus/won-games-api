import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    await fetch("https://api.github.com/users/mvmmarcus/repos")
      .then((response) => response.json())
      .then((repos) => setRepos(repos))
      .catch(() => {
        setRepos([]);
        strapi.notification.error("Ops...github API error");
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "Marcus repositories" }}
        content="A list of Marcus repositories"
      />
      <Table headers={headers} rows={repos} />
    </Wrapper>
  );
};

export default memo(HomePage);
