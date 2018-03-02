import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import routes from "../shared/routes";
import {StaticRouter, matchPath} from 'react-router-dom';
import App from '../shared/app';


import sourceMapSupport from "source-map-support";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
    sourceMapSupport.install();
}
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    console.log(req.url);


    const activeRoute = routes.find(route => matchPath(req.url, route));
    const requestInitialData =
        activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

    if (requestInitialData) {
        Promise.resolve(requestInitialData)
            .then(response => {
                console.log('calining=============');
                const data = response.data.data;
                const context = {
                    initialData: data
                }
                var markUp = renderToString(
                    <StaticRouter location={req.url} context={context}>
                        <App/>
                    </StaticRouter>
                );
                res.send(`
              <!DOCTYPE html>
              <head>
                <title>Universal Reacl</title>
                <script src="/bundle.js" defer></script>
                <script>window.__initialData__ = ${JSON.stringify(data)}</script>
              </head>
              <body>
                <div id="root">${markUp}</div>
              </body>
            </html>
          `);
            });
    }else {
        var markUp = renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App/>
            </StaticRouter>
        );
        res.send(`
              <!DOCTYPE html>
              <head>
                <title>Universal Reacl</title>
                <script src="/bundle.js" defer></script>
              </head>
              <body>
                <div id="root">${markUp}</div>
              </body>
            </html>
          `);
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
});