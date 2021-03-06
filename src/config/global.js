export default {
  global: {
    componenteFormativo: 'Protocolos de gestión de riesgo',
    descripcionCurso:
      'Para gestionar el riesgo que se pueda generar en la operación de un sistema de tratamiento y distribución de agua potable, es necesario establecer protocolos, indicadores y anomalías presentadas que puedan afectar la calidad del agua que se distribuye a la población.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Plan de acción de riesgo en sistemas de tratamiento y distribución de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Instructivos de almacenamiento, manejo y transporte de sustancias peligrosas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Instructivos de operación y mantenimiento de sistemas de tratamiento y distribución de agua potable',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Monitoreo de gestión de riesgo en sistemas de tratamiento y distribución de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procedimientos de evaluación y seguimiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Reporte de indicadores y anomalías presentadas en la gestión de riesgo de sistemas de tratamiento y distribución de agua potable',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elaboración de informe de riesgo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amézquita, C., Pérez, A., y Torres, P. (2014). Evaluación del riesgo en sistemas de distribución de agua potable en el marco de un plan de seguridad del agua.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1794-12372014000100014',
    },
    {
      referencia:
        'Arteaga, D., y Ordóñez, J. (2019). Guía para la gestión del riesgo en sistemas de agua y saneamiento ante amenazas naturales. M. Basani, Ed.',
      link:
        'https://publications.iadb.org/publications/spanish/document/Gu%C3%ADa_para_la_gesti%C3%B3n_del_riesgo_en_sistemas_de_agua_y_saneamiento_ante_amenazas_naturales_es.pdf',
    },
    {
      referencia:
        'González, G. (2021). Instructivo: concepto, características, partes, tipos, ejemplos.',
      link: 'https://www.lifeder.com/instructivo/',
    },
    {
      referencia:
        'Manzur, C. (s.f.). La gestión de riesgos y los servicios de agua potable, alcantarillado y saneamiento..',
      link:
        'http://cidbimena.desastres.hn/docum/crid/Abril2006/CD1/pdf/spa/doc15357/doc15357.htm',
    },
    {
      referencia:
        'Ministerio de la Protección Social, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2017). Resolución 2115 de 2007. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.',
      link:
        'https://justiciaambientalcolombia.org/wp-content/uploads/2014/12/resolucion-2115-de-2007mps-mavdt.pdf',
    },
    {
      referencia:
        'Presidencia de Colombia. (2007). Decreto 1575 de 2007 por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=30007',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'probabilidad de ocurrencia de un fenómeno peligroso de origen natural o humano (Manzur, 2002).',
    },
    {
      termino: 'Desastre natural',
      significado:
        'fenómeno que altera de manera intensa la vida cotidiana de una comunidad, región o un país, causado por un evento de origen natural (Manzur, 2002).',
    },
    {
      termino: 'Gestión de riesgo',
      significado:
        'manejo de amenazas, desastres y reducción de la vulnerabilidad, de acuerdo con el desarrollo sostenible, el cual comprende desde la actividad productiva y planificadora hasta la reconstrucción, con el fin de superar la vulnerabilidad aumentando la capacidad organizativa social e institucional para la mitigación (Manzur, 2002).',
    },
    {
      termino: 'Instructivo',
      significado:
        'documento dentro de un sistema de gestión que establece de manera ordenada los pasos a seguir en la realización de acción (González, 2021).',
    },
    {
      termino: 'IC',
      significado: 'Índice por Continuidad (Resolución 2115 de 2007).',
    },
    {
      termino: 'IRABAm',
      significado:
        'Índice de Riesgo Municipal por Abastecimiento de Agua para Consumo Humano: asocia el riesgo a la salud humana causado por sistemas de abastecimiento (Resolución 2115 de 2007).',
    },
    {
      termino: 'IRABApp',
      significado:
        'Índice de Riesgo por Abastecimiento de Agua de la Persona Prestadora: asocia el riesgo a la salud humana causado por sistemas de abastecimiento, en relación con la continuidad en el servicio y el tratamiento de agua (Resolución 2115 de 2007).',
    },
    {
      termino: 'IRCA',
      significado:
        'Índice de Riesgo de la Calidad del Agua para Consumo Humano: grado de riesgo que se presenten enfermedades relacionadas con el no cumplimiento de las características físicas, químicas y microbiológicas del agua potable (Resolución 2115 de 2007).',
    },
    {
      termino: 'IRDm',
      significado:
        'Índice de Riesgo por Distribución Municipal IRDm (Resolución 2115 de 2007).',
    },
    {
      termino: 'IT',
      significado: 'Índice de Tratamiento (Resolución 2115 de 2007).',
    },
    {
      termino: 'Hoja de Datos de Seguridad de Materiales (MSDS)',
      significado:
        'documento con información relacionada con compuestos químicos, uso, almacenamiento, manejo, procedimientos de emergencia y efectos potenciales a la salud relacionados con un material potencialmente peligroso. (State Compensation Insurance Fund, s.f.).',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de una amenaza sobre un sistema de vulnerabilidad específico. El riesgo está en función de la amenaza y la vulnerabilidad (Manzur, 2002).',
    },
    {
      termino: 'SIVICAP',
      significado:
        'Sistema de Información de la Vigilancia de la Calidad del Agua para Consumo Humano (Decreto 1575 de 2007).',
    },
    {
      termino: 'SSPD',
      significado: 'Superintendencia de Servicios Públicos Domiciliarios.',
    },
    {
      termino: 'SUI',
      significado: 'Sistema Único de Información.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'predisposición física, económica, política o social de una comunidad a sufrir daños o pérdidas en caso de materializarse una amenaza (Manzur, 2002).',
    },
  ],
  complementario: [
    {
      texto:
        'Arteaga, D., y Ordóñez, J. (2019). Guía para la gestión del riesgo en sistemas de agua y saneamiento ante amenazas naturales. M. Basani, Ed.',
      tipo: 'Archivo formato pdf',
      descarga:
        '/downloads/Guia_para_la_gestion_del_riesgo_en_sistemas_de_agua_y_saneamiento_ante_amenazas_naturales.pdf',
    },
    {
      texto:
        'Emdupar S.A. E.S.P. (s .f.). Manual de operación y mantenimiento del sistema de suministro y tratamiento de agua potable.',
      tipo: 'Archivo formato pdf',
      descarga: '/downloads/Manual_de_Mantenimiento_y_operaciones_planta.pdf',
    },
    {
      texto:
        'Ministerio de la Protección Social, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2017). Resolución 2115 de 2007. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.',
      tipo: 'Archivo formato pdf',
      descarga: '/downloads/Resolucion_2115_de_2007.pdf',
    },
    {
      texto: 'Sigma-Aldrich. (2013) Ficha de datos de seguridad.',
      tipo: 'Archivo formato pdf',
      descarga: '/downloads/Ejemplo_MSDS.pdf',
    },
    {
      texto:
        'Brinsa. (2017). Ficha de datos de seguridad hipoclorito del sodio al 15%.',
      tipo: 'Archivo formato pdf',
      descarga: '/downloads/HS_Hipoclorito_de_Sodio.pdf',
    },
    {
      texto:
        'Quinsa. (2011). Hoja de seguridad sulfato de aluminio tipo a solido.',
      tipo: 'Archivo formato pdf',
      descarga: '/downloads/Ficha_seguridad_Sulfato_de_Aluminio.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Alexander Gómez Reyes',
        cargo: 'Instructor',
        centro: 'Centro de la Construcción Regional Valle',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
