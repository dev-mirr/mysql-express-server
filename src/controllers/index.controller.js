const index = (req, res, next) => res.json({
  message: 'hello controller!'
})

export {
  index,
}