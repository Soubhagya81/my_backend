class ApiError extends Error {
  constructor(
    message = "somethoing went wrong",
    statusCode,
    stack = "",
    errors = []
  ) {
    super(message)
    this.statusCode = statusCode || 500
    this.data = null
    this.errors = errors
    this.stack = stack
  }
}
