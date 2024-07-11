const { Router } = require("express");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const router = Router();

// rutas
const gamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter")

router.use(express.json());
router.use(morgan("dev"));
router.use(cors());

router.use("/videogames", gamesRouter);
router.use("/genres", genresRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
