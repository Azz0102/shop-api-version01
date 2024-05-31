const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "api ok",
    });
});

router.get("/api/users", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "api ok",
        metadata: [
            { name: "hator", age: 12 },
            { name: "baycho", age: 30 },
            { name: "rauta", age: 33 },
        ],
    });
});

module.exports = router;
