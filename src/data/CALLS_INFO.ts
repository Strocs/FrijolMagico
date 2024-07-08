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
    bases: '/BASES POSTULACIÓN ILUSTRACIÓN, NARRATIVA GRAFICA Y MANUALIDADES.pdf',
    form: 'https://forms.gle/BPHHmkn3TYKWLFn18'
  },
  'musica': {
    bases: '/BASES BANDAS FESTIVAL FRIJOL MAGICO 2024.pdf',
    form: 'https://forms.gle/5MsRMVkvuXmJXqrg7'
  }
}