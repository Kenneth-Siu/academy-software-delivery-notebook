import React from "react";
import { Router } from "express";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import App from "../../frontend/pages/App";

const router = Router();

router.get("*", (req, res) => {
    const { context, html } = renderApp(req, res);
    if (context.url) {
        res.redirect(context.url);
    } else {
        res.status(200).send(html);
    }
});

export default router;

function cssLinksFromAssets(assets, entrypoint) {
    return assets[entrypoint]
        ? assets[entrypoint].css
            ? assets[entrypoint].css
                  .map((asset) => `<link rel="stylesheet" href="${asset}">`)
                  .join("")
            : ""
        : "";
}

function jsScriptTagsFromAssets(assets, entrypoint, ...extra) {
    return assets[entrypoint]
        ? assets[entrypoint].js
            ? assets[entrypoint].js
                  .map(
                      (asset) =>
                          `<script src="${asset}" ${extra.join(" ")}></script>`
                  )
                  .join("")
            : ""
        : "";
}
console.log(process.env.RAZZLE_ASSETS_MANIFEST);
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

function renderApp(req, res) {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>
    );
    const html = `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${cssLinksFromAssets(assets, "client")}
  </head>
  <body>
      <div id="root">${markup}</div>
      ${jsScriptTagsFromAssets(assets, "client", "defer", "crossorigin")}
  </body>
</html>`;
    return { context, html };
}
