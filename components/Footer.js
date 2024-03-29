import React from "react";
import { Container, Image, List, Segment, Icon } from "semantic-ui-react";

const Footer = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{ margin: "2em 0em 0em", padding: "3em 0em" }}
    >
      <Container textAlign="center">
        <Image centered size="mini" src="/static/logo.jpg" />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="https://swapi.co/" target="_blank">
            SWAPI
          </List.Item>
          <List.Item
            as="a"
            href="https://react.semantic-ui.com/"
            target="_blank"
          >
            Semantic UI
          </List.Item>
          <List.Item
            as="a"
            href="https://tlgrm.eu/stickers/StarWarsCharacters"
            target="_blank"
          >
            Star Wars Stickers
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default Footer;