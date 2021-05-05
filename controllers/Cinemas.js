const cinemasModel = require('../models/Cinemas');

const cinemasController = {
  showCinemas: async (req, res) => {
    const request = {
      city: req.body.location,
    };
    try {
      const result = await cinemasModel.showCinemas(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    };
  },

  addCinemas: async (req, res) => {
    const request = {
      ...req.body,
      logo: `/upload/logos/${req.file.filename}`,
    }

    try {
      const result = await cinemasModel.addCinemas(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  updateCinemas: async (req, res) => {
    const request = {
      ...req.body,
      id: req.params.id,
      logo: `/upload/logos/${req.file.filename}`,
    }

    try {
      const result = await cinemasModel.updateCinemas(request);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },

  deleteCinemas: async (req, res) => {
    if (!req.params.id) {
      res.status(400).send({
        message: 'Id not match',
        statusCode: 400,
      })
    }

    try {
      const result = await cinemasModel.deleteCinemas(req.params);
      res.status(result.statusCode).send(result);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  },
};

module.exports = cinemasController;