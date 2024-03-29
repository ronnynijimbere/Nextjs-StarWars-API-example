import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  componentDidMount() {
    console.log("mount");
  }
  componentWillUnmount() {
    console.log("unmount");
  }

  //Below we render What the User will see on the Home Page
  render() {
    const { children, title = "StarWars: The End" } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>

        <header>
          <Header />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

