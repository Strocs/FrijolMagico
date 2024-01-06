interface Call {
  title: string
  description: string
  bases: string
  basesExternal: string
  form: string
}

type CallInfo = Call[]

export const CALLS_INFO: CallInfo = [
  {
    title: 'Ilustración',
    description: 'Convocatoria Ilustración - Narrativa Gráfica - Manualidades',
    bases: '2PACX-1vQrUB43au7sryIyhnjseksLMqsKOvDPM8EhAxrkgVlnFqPfJ--wnU83W-hx78CbKTPp9rZLG7uKCc5p',
    basesExternal: '1MhLT9fEP7Nv5ye0Jr_aZV1mFSfnVXIz4ffBnqy_4jII',
    form: '1FAIpQLScbf1M34Ujpbw08xAy-4mR5rA3t1X4EQql0EIxfuUmzlXrSYA'
  },
  {
    title: 'Música',
    description: 'Convocatoria Bandas Musicales',
    bases: '2PACX-1vQNnN-LxK-zxD_qrgTBEOvEEPK35IFkDbymB5JVryWwhuRUdUCoDvP65kDdrWiomjKT1ItTH3lbXsj0',
    basesExternal: '1Q0zRPlKtOPpOXEfyongZY7qZ-p2fAgV7Uu_F-QJVQFY',
    form: '1FAIpQLSfDOX5BG5n2fAr-5T14xUx1jrHZLk5W2A4i8Q8kRr8cxyZRaw'
  }
]
