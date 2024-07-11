const asynsHandeller1 = (fn) => {
  (req, res, next) =>  Promise.resolve(fn(req, res, next)).catch((err) => next(err))
}

//using try catch
// const asyncHandeller = (fn) => {
//   ;async (req, res, next) => {
//     try {
//       await fn(req, res, next)
//     } catch (err) {
//       res.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//       })
//     }
//   }
// }
