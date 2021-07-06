/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { LoadingIndicatorPage } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";
import { useModels } from "../../hooks";

import { Block, Container, P, Separator } from "./components";
import SocialLink from "./SocialLink";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/mvmmarcus",
  },
];

const HomePage = () => {
  // Temporary until we develop the menu API
  const { isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Seja Bem-Vindo a Won Games</h2>
              <P>
                Ao lado você consegue alterar a estrutura da api do ecommerce,
                adicionar jogos, categorias, usuários, etc...
              </P>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <h2 id="mainHeader">Minhas redes sociais</h2>
              <div
                className="row social-wrapper"
                style={{
                  display: "flex",
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
