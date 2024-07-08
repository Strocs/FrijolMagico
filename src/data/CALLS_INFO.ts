interface Call {
  title: string
  description: string
  bases: string
  basesExternal: string
  form: string
}

type CallInfo = Call[]

export const CALLS_INFO = {
  'ilustracion': {
    bases: 'https://docs.google.com/document/d/e/2PACX-1vSw95eCepDmXclZthTjzPpp5A4QoZ12PppMtTg3ynx_XFX6YnqsfqjbvIziN8XVIdrbOH1SCGHLuhWm/pub',
    form: 'https://docs.google.com/forms/u/1/d/14q7uMp7SRUKfrVrJuaZR0jdDR9UQkBMxtCf7_Y8Uwt4'
  },
  'musica': {
    bases: 'https://docs.google.com/document/d/e/2PACX-1vQNnN-LxK-zxD_qrgTBEOvEEPK35IFkDbymB5JVryWwhuRUdUCoDvP65kDdrWiomjKT1ItTH3lbXsj0/pub',
    form: 'https://docs.google.com/forms/d/1FJJxalygoDLTg7DtDjVKVbNak9VwbT0Nwog_Il5jVpY'
  }
}

