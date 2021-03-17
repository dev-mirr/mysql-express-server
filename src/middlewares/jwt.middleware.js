import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import userCache from '../caches/user.cache'

export default async (req, res, next) => {
  try {
    req.user = null
    if (req.headers.authorization) {
      console.log(`= = = => uuid: ${req.headers.authorization}`)
      let uuid
      jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET,
        (err, payload) => {
          if (err) {
            return next(createError(401, '토큰 정보가 유효하지 않습니다.'))
          }

          uuid = payload.uuid
        })
      const user = await userCache.find(uuid)

      req.user = user
    }

    next()
  } catch (e) {
    next(e)
  }
}