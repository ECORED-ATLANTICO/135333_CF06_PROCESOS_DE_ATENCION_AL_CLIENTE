export default {
  global: {
    Name: 'Conexión y postventa digital',
    Description:
      'El componente formativo fortalece competencias para la gestión estratégica del servicio al cliente, promoviendo prácticas orientadas a la calidad, la mejora continua y el cumplimiento organizacional. Integra herramientas conceptuales y operativas que permiten optimizar la experiencia del cliente, consolidar relaciones sostenibles y aumentar la competitividad empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Asesoría',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Protocolo', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Seguimiento', hash: 't_1_3' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Percepción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Criterios', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Manejo', hash: 't_2_3' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Resolución de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Técnicas', hash: 't_3_2' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Solicitudes',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Tipología', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Trámite', hash: 't_4_3' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Marketing relacional',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Concepto', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Estrategias', hash: 't_5_2' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Postventa digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Definición', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Etapas', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Proceso y procedimientos', hash: 't_6_3' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Niveles de cumplimiento',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '7.1', titulo: 'Concepto', hash: 't_7_1' },
          { numero: '7.2', titulo: 'Medición', hash: 't_7_2' },
          { numero: '7.3', titulo: 'Manejo', hash: 't_7_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  /*
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  */
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'Uso de herramientas tecnológicas para ejecutar tareas repetitivas en la atención y postventa digital.',
    },

    {
      termino: 'Canal digital',
      significado:
        'Medio tecnológico utilizado para interactuar con el cliente, como chat, correo electrónico, redes sociales o plataformas web.',
    },

    {
      termino: 'Calidad percibida',
      significado:
        'Evaluación subjetiva que realiza el cliente sobre el desempeño del producto o servicio frente a sus expectativas.',
    },

    {
      termino: '<em>CRM (Customer Relationship Management)</em>',
      significado:
        'Sistema digital que centraliza y gestiona la información e interacciones con clientes para mejorar la relación comercial.',
    },

    {
      termino: 'Cumplimiento',
      significado:
        'Nivel en que la organización responde oportunamente a los compromisos adquiridos con el cliente.',
    },

    {
      termino: 'Escalamiento',
      significado:
        'Proceso de transferencia de un caso a un nivel superior cuando requiere mayor análisis o autoridad.',
    },

    {
      termino: 'Experiencia del cliente',
      significado:
        'Conjunto de percepciones y emociones generadas durante la interacción con la empresa en todos los puntos de contacto.',
    },

    {
      termino: 'Fidelización',
      significado:
        'Estrategia orientada a mantener relaciones duraderas con los clientes y promover la recompra.',
    },

    {
      termino: 'Indicadores de desempeño (KPIs)',
      significado:
        'Métricas utilizadas para evaluar eficiencia, calidad y cumplimiento en la gestión del servicio.',
    },

    {
      termino: '<em>Marketing</em> relacional',
      significado:
        'Enfoque estratégico centrado en construir relaciones sostenibles con los clientes mediante comunicación continua y personalizada.',
    },

    {
      termino: 'Mejora continua',
      significado:
        'Proceso sistemático de evaluación y optimización permanente de los procedimientos organizacionales.',
    },

    {
      termino: 'Nivel de satisfacción',
      significado:
        'Grado en que la experiencia del cliente cumple o supera sus expectativas.',
    },

    {
      termino: 'Percepción del cliente',
      significado:
        'Interpretación subjetiva que el cliente forma sobre la organización basada en experiencias previas.',
    },

    {
      termino: 'Postventa digital',
      significado:
        'Conjunto de acciones posteriores a la venta realizadas a través de herramientas tecnológicas para asegurar satisfacción.',
    },

    {
      termino: 'Protocolo de atención',
      significado:
        'Conjunto de lineamientos y pasos estructurados que estandarizan la interacción con el cliente.',
    },

    {
      termino: 'Reclamación',
      significado:
        'Manifestación formal de inconformidad por parte del cliente frente a un producto o servicio.',
    },

    {
      termino: 'Seguimiento',
      significado:
        'Acción de control posterior a la atención inicial para verificar resultados y satisfacción.',
    },

    {
      termino: 'Servicio al cliente',
      significado:
        'Área estratégica encargada de gestionar la comunicación, asesoría y soporte al consumidor.',
    },

    {
      termino: 'Valor percibido',
      significado:
        'Relación que el cliente establece entre los beneficios obtenidos y el costo asumido.',
    },
  ],
  referencias: [
    {
      referencia:
        'Buttle, F., & Maklan, S. (2019). <em>Gestión de relaciones con clientes (CRM): Conceptos y tecnologías</em> (4.ª ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Chaffey, D., & Ellis-Chadwick, F. (2022). <em>Marketing digital: Estrategia, implementación y práctica</em> (8.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kaplan, R. S., & Norton, D. P. (2021). <em>El cuadro de mando integral: Cómo traducir la estrategia en acción</em> (Ed. revisada y ampliada). Harvard Business Review Press.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2024). <em>Dirección de marketing</em> (18.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Montoya Agudelo, C. A., & Boyero Saavedra, M. R. (2012). <em>El CRM como herramienta para el servicio al cliente en la organización</em>. Revista Científica Visión de Futuro, 17(1).',
      link:
        'https://revistacientifica.fce.unam.edu.ar/index.php/visiondefuturo/article/view/557/433',
    },
    {
      referencia:
        'Ortiz-Briceño, C. A., Pachau-Torres, W. A., Caspito-Barboza, K. M., & Peñares-Dolorier, J. E. (2026). <em>Servicio al cliente en la fidelización de una empresa de comercio electrónico</em>. Revista InveCom, 6(3).',
      link: 'https://doi.org/10.5281/zenodo.17972281',
    },
    {
      referencia:
        'Peppers, D., & Rogers, M. (2021). <em>Gestión de la experiencia y relaciones con clientes: Un enfoque estratégico</em> (4.ª ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'Rust, R. T., Zeithaml, V. A., & Lemon, K. N. (2021). <em>Marketing de servicios: Integrando el cliente con la estrategia</em> (3.ª ed.). McGraw-Hill Educación.',
      link: '',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2022). <em>Servicios de marketing: Integrando la estrategia de clientes</em> (8.ª ed.). McGraw-Hill.',
      link: '',
    },
  ],
  Creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
