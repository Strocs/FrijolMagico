import { RawSchedule } from '../../types/schedule'

export const getDataFromMock = (): RawSchedule[][] => {
  // Día 1
  const day1: RawSchedule[] = [
    {
      Horario: '10:00',
      'Tipo de actividad': 'Inicio',
      'Nombre de la actividad': 'Apertura',
      Descripción: 'Se abre las puertas del evento',
      Encargado: '',
      'Duración (min)': '',
      RRSS: '',
      Información: '',
    },
    {
      Horario: '10:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Introducción al Cómic Digital',
      Descripción:
        'Aprende las herramientas fundamentales para crear cómics digitales desde cero. Este taller está diseñado para principiantes que quieren explorar el mundo de la ilustración digital, cubriendo desde el uso básico de software hasta técnicas de composición visual que harán destacar tus creaciones.',
      Encargado: 'Ana García, Felipe Mendez',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/anagarcia_art, https://twitter.com/felipe_mendez',
      Información: 'https://example.com/taller-comic-digital',
    },
    {
      Horario: '13:00',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Historia del Arte Secuencial',
      Descripción:
        'Un fascinante recorrido por la evolución del cómic desde sus humildes inicios hasta convertirse en una forma de arte respetada mundialmente. Exploraremos los movimientos artísticos más importantes y cómo han influenciado la narrativa visual contemporánea.',
      Encargado: 'Dr. Carlos Mendez',
      'Duración (min)': '60',
      RRSS: 'https://twitter.com/carlosmendez',
      Información: 'https://example.com/historia-comic',
    },
    {
      Horario: '14:30',
      'Tipo de actividad': 'lanzamiento',
      'Nombre de la actividad': 'Presentación "Héroes del Sur"',
      Descripción:
        'Presentación oficial del nuevo cómic de superhéroes chilenos que retrata la identidad nacional a través de personajes únicos. Los autores compartirán el proceso creativo y las inspiraciones culturales que dieron vida a estos nuevos íconos del cómic nacional.',
      Encargado: 'Editorial Austral',
      'Duración (min)': '45',
      RRSS: 'https://instagram.com/editorialaustral',
      Información: 'https://example.com/heroes-del-sur',
    },
    {
      Horario: '15:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Narrativa Visual Avanzada',
      Descripción:
        'Domina las técnicas profesionales para contar historias poderosas usando únicamente imágenes. Aprenderás sobre ritmo narrativo, composición de página, uso de planos y encuadres para crear secuencias que emocionen y mantengan al lector completamente absorto en tu historia.',
      Encargado: 'Roberto Silva, Carmen Reyes, Diego Torres',
      'Duración (min)': '90',
      RRSS: 'https://instagram.com/robertosilva_comics, https://twitter.com/carmen_reyes, https://facebook.com/diego_torres_art',
      Información: 'https://example.com/narrativa-visual',
    },
    {
      Horario: '17:00',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Mujeres en el Cómic Chileno',
      Descripción:
        'Un conversatorio revelador sobre el creciente rol de las mujeres en la industria del cómic nacional. Conocerás las historias inspiradoras de creadoras que han roto barreras, sus desafíos únicos y cómo están transformando la narrativa gráfica chilena con perspectivas frescas.',
      Encargado: 'María López, Valentina Cruz',
      'Duración (min)': '75',
      RRSS: 'https://instagram.com/mujerescomic, https://twitter.com/valentina_cruz',
      Información: 'https://example.com/mujeres-comic',
    },
    {
      Horario: '18:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Técnicas de Entintado',
      Descripción:
        'Explora tanto los métodos tradicionales como las innovaciones digitales en el arte del entintado. Este taller práctico te enseñará a dar vida y profundidad a tus dibujos usando técnicas profesionales que harán que tus ilustraciones destaquen con calidad editorial.',
      Encargado: 'Pedro Vega',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/pedrovega_ink',
      Información: 'https://example.com/tecnicas-entintado',
    },
  ]

  // Día 2
  const day2: RawSchedule[] = [
    {
      Horario: '10:00',
      'Tipo de actividad': 'Inicio',
      'Nombre de la actividad': 'Apertura',
      Descripción: 'Se abre las puertas del evento',
      Encargado: '',
      'Duración (min)': '',
      RRSS: '',
      Información: '',
    },
    {
      Horario: '10:30',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Colorización Digital Profesional',
      Descripción:
        'Sumérgete en el fascinante mundo del color digital para cómics con técnicas avanzadas utilizadas por profesionales de la industria. Aprenderás teoría del color aplicada, manejo de luces y sombras, y cómo crear atmósferas que complementen perfectamente tu narrativa visual.',
      Encargado: 'Elena Morales, Sebastián Rojas',
      'Duración (min)': '150',
      RRSS: 'https://instagram.com/elenamorales_color, https://behance.net/sebastian_rojas',
      Información: 'https://example.com/colorizacion-digital',
    },
    {
      Horario: '13:30',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Industria Editorial Independiente',
      Descripción:
        'Una mirada profunda a los desafíos y extraordinarias oportunidades del mercado editorial independiente. Los panelistas compartirán estrategias exitosas para publicar y distribuir tu obra, financiamiento alternativo y cómo construir una audiencia fiel sin grandes editoriales.',
      Encargado: 'Editores Indie Chile',
      'Duración (min)': '90',
      RRSS: 'https://facebook.com/editoresindiecl',
      Información: 'https://example.com/industria-independiente',
    },
    {
      Horario: '15:00',
      'Tipo de actividad': 'lanzamiento',
      'Nombre de la actividad': 'Cómic "Leyendas del Sur"',
      Descripción:
        'Descubre este emocionante cómic que rescata y reimagina la rica mitología chilena para nuevas generaciones. Los creadores revelarán cómo transformaron antiguas leyendas en narrativas visuales modernas, manteniendo el respeto cultural mientras crean entretenimiento contemporáneo.',
      Encargado: 'Editorial Mítica, Fernanda Soto',
      'Duración (min)': '45',
      RRSS: 'https://instagram.com/editorialmitica, https://twitter.com/fernanda_soto',
      Información: 'https://example.com/leyendas-del-sur',
    },
    {
      Horario: '16:00',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Creación de Personajes Memorables',
      Descripción:
        'Aprende el arte de desarrollar personajes únicos que perduren en la memoria de los lectores. Este taller cubre desde el diseño visual distintivo hasta el desarrollo psicológico profundo, enseñándote a crear protagonistas y antagonistas que generen conexión emocional real.',
      Encargado: 'Character Design Studio',
      'Duración (min)': '120',
      RRSS: 'https://instagram.com/characterdesign_studio',
      Información: 'https://example.com/personajes-memorables',
    },
    {
      Horario: '18:30',
      'Tipo de actividad': 'charla',
      'Nombre de la actividad': 'Cómic y Nuevas Tecnologías',
      Descripción:
        'Explora cómo la inteligencia artificial, realidad virtual y otras tecnologías emergentes están revolucionando la creación y experiencia de los cómics. Una visión futurista de las posibilidades creativas que estas herramientas ofrecen a los artistas contemporáneos.',
      Encargado: 'Tech Innovation Panel, Andrea Martinez',
      'Duración (min)': '75',
      RRSS: 'https://linkedin.com/company/techinnovation, https://twitter.com/andrea_martinez',
      Información: 'https://example.com/comic-tecnologia',
    },
    {
      Horario: '20:00',
      'Tipo de actividad': 'taller',
      'Nombre de la actividad': 'Anatomía para Dibujantes',
      Descripción:
        'Domina los fundamentos anatómicos esenciales para crear personajes convincentes y dinámicos. Este taller intensivo combina conocimiento médico básico con aplicación artística práctica, enseñándote a dibujar cuerpos humanos expresivos desde cualquier ángulo con precisión profesional.',
      Encargado: 'Dr. Anatomy Comics, Patricia Vera, Luis Contreras',
      'Duración (min)': '135',
      RRSS: 'https://instagram.com/anatomycomics, https://twitter.com/patricia_vera, https://behance.net/luis_contreras',
      Información: 'https://example.com/anatomia-dibujantes',
    },
  ]

  return [day1, day2]
}
