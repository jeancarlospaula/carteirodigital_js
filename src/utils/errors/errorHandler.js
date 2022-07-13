const errorHandler = async (error) => {
  const errorData = {
    name: error.name,
    message: error.message,
    stack: error.stack
  }

  console.log(errorData)
}

module.exports = { errorHandler }
