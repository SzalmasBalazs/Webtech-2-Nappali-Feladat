const express = require('express');
const app = express();
const figureRoute = express.Router();

let Figure = require('../models/Figure');

figureRoute.route('/addFigure').post((req, res, next) => {
  Figure.create(req.body, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
    }
  })
});

figureRoute.route('/getallFigures').get((req, res) => {
  Figure.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

figureRoute.route('/getFigures/:id').get((req, res) => {
  Figure.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

figureRoute.route('/updateFigures/:id').put((req, res, next) => {
  Figure.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

figureRoute.route('/deleteFigure/:_id').delete((req, res, next) => {
  Figure.findOneAndDelete({_id: req.params._id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = figureRoute;
