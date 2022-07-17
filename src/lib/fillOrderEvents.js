const fillOrderEvents = events => {
  const orderEvents = events.map(event => ({
    status: event.descricao,
    dateUpdate: event.dtHrCriado,
    location: {
      city: event.unidade?.endereco?.cidade,
      state: event.unidade?.endereco?.uf,
      type: event.unidade?.tipo,
      countryName: event.unidade?.nome
    },
    destination: {
      city: event.unidadeDestino ? event.unidadeDestino.endereco.cidade : null,
      state: event.unidadeDestino ? event.unidadeDestino.endereco.uf : null,
      type: event.unidadeDestino ? event.unidadeDestino.tipo : null
    }
  }))

  return orderEvents
}

module.exports = { fillOrderEvents }
