//var debug = require('debug')('post-server:debug');

require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { response } from './utils/response'
import v1Route from './routes/v1'
import jwtMiddleware from './middlewares/jwt.middleware'

var app = express()

// view engine setup

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// 컨트롤러가 타기 전에 jwt로부터 user를 조회
app.use(jwtMiddleware)
app.use('/v1', v1Route)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  let apiError = err

  if (!err.status) {
    apiError = createError(err)
  }
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  return response(
    res,
    { message: apiError.message },
    apiError.status
  )
})

module.exports = app