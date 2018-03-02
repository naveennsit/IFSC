import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import Home from "../shared/home";
import sourceMapSupport from "source-map-support";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
    sourceMapSupport.install();
}
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    console.log('calining=============');
    axios
        .get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist")
        .then(response => {
            const data = response.data.data;
            var markUp = renderToString(<Home initialData={data}/>);
            res.send(`
              <!DOCTYPE html>
              <head>
                <title>Universal Reacl</title>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/bundle.js" defer></script>
              </head>
              <body>
                <div id="root">${markUp}</div>
              </body>
            </html>
          `);
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
});