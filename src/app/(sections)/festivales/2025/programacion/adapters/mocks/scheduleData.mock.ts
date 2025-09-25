import { RawSchedule } from '../../types/schedule'

export const getDataFromMock = (): RawSchedule[][] => {
  // Día 1
  const day1: RawSchedule[] = [
    {
      Horario: '10:00',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Introducción al Cómic Digital',
      Descripción:
        'Taller básico sobre herramientas digitales para crear cómics',
      Encargado: 'Ana García',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/anagarcia_art',
      Información: 'Traer tablet o laptop',
    },
    {
      Horario: '11:30',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Historia del Arte Secuencial',
      Descripción: 'Recorrido por la evolución del cómic desde sus inicios',
      Encargado: 'Dr. Carlos Mendez',
      'Duración (min)': '60',
      RRSS: 'https://twitter.com/carlosmendez',
    },
    {
      Horario: '13:00',
      'Tipo de actividad': 'lanzamiento',
      'Nombre de la actividad': 'Presentación "Héroes del Sur"',
      Descripción:
        'Presentación oficial del nuevo cómic de superhéroes chilenos',
      Encargado: 'Editorial Austral',
      'Duración (min)': '45',
      RRSS: 'https://instagram.com/editorialaustral',
    },
    {
      Horario: '14:00',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Narrativa Visual Avanzada',
      Descripción: 'Técnicas profesionales para contar historias con imágenes',
      Encargado: 'Roberto Silva',
      'Duración (min)': '90',
      RRSS: 'https://instagram.com/robertosilva_comics',
      Información: 'Nivel intermedio-avanzado',
    },
    {
      Horario: '16:00',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Mujeres en el Cómic Chileno',
      Descripción:
        'Conversatorio sobre el rol femenino en la industria nacional',
      Encargado: 'María López',
      'Duración (min)': '75',
      RRSS: 'https://instagram.com/mujerescomic',
    },
    {
      Horario: '17:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Técnicas de Entintado',
      Descripción: 'Métodos tradicionales y digitales de entintado',
      Encargado: 'Pedro Vega',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/pedrovega_ink',
    },
  ]

  // Día 2
  const day2: RawSchedule[] = [
    {
      Horario: '10:00',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Colorización Digital Profesional',
      Descripción: 'Técnicas avanzadas de color para cómics digitales',
      Encargado: 'Elena Morales',
      'Duración (min)': '150',
      RRSS: 'https://instagram.com/elenamorales_color',
      Información: 'Requiere software de edición',
    },
    {
      Horario: '11:00',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Industria Editorial Independiente',
      Descripción: 'Desafíos y oportunidades del mercado independiente',
      Encargado: 'Editores Indie Chile',
      'Duración (min)': '90',
      RRSS: 'https://facebook.com/editoresindiecl',
    },
    {
      Horario: '13:00',
      'Tipo de actividad': 'lanzamiento',
      'Nombre de la actividad': 'Cómic "Leyendas del Sur"',
      Descripción: 'Presentación de cómic basado en mitología chilena',
      Encargado: 'Editorial Mítica',
      'Duración (min)': '45',
      RRSS: 'https://instagram.com/editorialmitica',
    },
    {
      Horario: '14:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Creación de Personajes Memorables',
      Descripción: 'Desarrollo de personajes únicos y atractivos',
      Encargado: 'Character Design Studio',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/characterdesign_studio',
    },
    {
      Horario: '16:00',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Cómic y Nuevas Tecnologías',
      Descripción: 'IA, VR y otras tecnologías aplicadas al cómic',
      Encargado: 'Tech Innovation Panel',
      'Duración (min)': '75',
      RRSS: 'https://linkedin.com/company/techinnovation',
    },
    {
      Horario: '17:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Anatomía para Dibujantes',
      Descripción: 'Fundamentos anatómicos aplicados al dibujo de personajes',
      Encargado: 'Dr. Anatomy Comics',
      'Duración (min)': '135',
      RRSS: 'https://instagram.com/anatomycomics',
    },
  ]

  return [day1, day2]
}
