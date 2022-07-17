const errorHandler = (error) => {
  const errorData = {
    name: error.name,
    message: error.message,
    stack: error.stack
  }

  if (error.data) errorData.data = error.data

  console.log(errorData)
}

module.exports = { errorHandler }
