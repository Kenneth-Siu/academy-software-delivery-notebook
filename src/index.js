import express from "express";

let app = require("./backend/server").default;

if (module.hot) {
    module.hot.accept("./backend/server", function () {
        console.log("🔁  HMR Reloading `./server`...");
        try {
            app = require("./backend/server").default;
        } catch (error) {
            console.error(error);
        }
    });
    console.info("✅  Server-side HMR Enabled!");
}

const port = process.env.PORT || 3000;

export default express()
    .use((req, res) => app.handle(req, res))
    .listen(port, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`> Started on port ${port}`);
    });
