import * as React from 'react';
import { render } from 'react-dom';

import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>▲ Higher or ▼ Lower?</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link href="static/tachyons.css" media="all" rel="stylesheet" />
          <link href="static/style.css" media="all" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
