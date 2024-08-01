class ApiError extends Error {
  constructor(
    statusCode = "something went wrong",
    message,
    stack = "",
    errors = []
    
  ) {
    super(message)
    this.statusCode = statusCode || 500
    this.message = message
    this.data = null
    this.errors = errors
    this.stack = stack
  }
}


export default ApiError;