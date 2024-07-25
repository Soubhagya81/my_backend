const asyncHandeller = (requestHandeller) => {
        (res, req, next) => {
                Promise.resolve(requestHandeller(req,res,next))
                .catch((err) => 
                    next(err)
                )
        }
}