import Layout from "../components/Layout";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";

const Index = () => (
  <div>
    <Layout>
      <Container>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Next JS + Semantic UI React
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Nextjs App with Semantic UI & Isomorphic-Unfetch
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src="static/starwars.jpg" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Layout>
  </div>
);

export default Index;