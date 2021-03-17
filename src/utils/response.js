const httpStatus = require('http-status')

export const response = (res, data = {}, code = httpStatus.OK) => {
  let result = {
    success: true
  }

  if (code > 339) {
    result.success = false
  }

  if (typeof data === 'object') {
    result = Object.assign({
      data,
    }, result)
  }

  return res.status(code).json(result)
}