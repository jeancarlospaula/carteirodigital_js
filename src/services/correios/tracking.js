const { rastrearEncomendas } = require('correios-brasil')

const tracking = async (code) => {
  let data

  await rastrearEncomendas([code])
    .then((res) => {
      data = res
    })
    .catch((error) => {
      console.log(`Error tracking order ${code}`)
      throw error
    })

  return data
}

module.exports = { tracking }
