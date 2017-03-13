import * as React from 'react';
import Head from 'next/head';
export default ({ children = null }) => (React.createElement("div", null,
    React.createElement(Head, null,
        React.createElement("title", null, "\u25B2 Higher or \u25BC Lower?"),
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
        React.createElement("link", { href: "static/tachyons.css", media: "all", rel: "stylesheet" }),
        React.createElement("link", { href: "static/style.css", media: "all", rel: "stylesheet" })),
    children));
//# sourceMappingURL=index.js.map