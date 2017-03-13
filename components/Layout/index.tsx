import * as React from 'react';
import Head from 'next/head';


export type Props = {
  children?: any
};

export default ({ children=null }) => (
  <div>
    <Head>
      <title>&#9650; Higher or &#9660; Lower?</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="static/tachyons.css" media="all" rel="stylesheet" />
      <link href="static/style.css" media="all" rel="stylesheet" />
    </Head>
      {children}
  </div>
);
