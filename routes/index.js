const authRouter = require("./Auth");
const userRouter = require("./Users");
const paymentRouter = require("./Payment");
const orderRouter = require("./Order");
const cinemasRouter = require('./Cinemas');

const routes = (app, prefix) => {
  // app.use(`${prefix}/...,`, fileRouter)
  app.use(`${prefix}/auth`, authRouter);
  app.use(`${prefix}/users`, userRouter);
  app.use(`${prefix}/order`, orderRouter);
  app.use(`${prefix}/payment`, paymentRouter);
  app.use(`${prefix}/cinemas`, cinemasRouter);
};

module.exports = routes;
