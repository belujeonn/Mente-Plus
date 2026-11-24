/* =====================================================
   MENTE+ — CATÁLOGO COMPLETO
   14 TESTS · 16 PREGUNTAS CADA UNO
   INFORMES DETALLADOS
   Experiencia recreativa, no diagnóstica.
===================================================== */

const $ = (selector) => document.querySelector(selector);

const screens = ["home", "test", "paywall", "result"];

const state = {
  category: null,
  index: 0,
  answers: [],
  questions: []
};
// MODO DE PRUEBA DE LA CREADORA
const CREATOR_PREVIEW = true;

/* =====================================================
   PERFILES GENERALES
===================================================== */

function axis(name, short, description, strengths, challenge, relationships, growth) {
  return {
    name,
    short,
    description,
    strengths,
    challenge,
    relationships,
    growth
  };
}

const generalAxes = [
  axis(
    "El analítico",
    "La mente que busca comprender",
    "Tu tendencia es observar, comparar y buscar explicaciones. Te interesa comprender qué hay detrás de cada situación.",
    "Pensamiento crítico, atención al detalle y curiosidad intelectual.",
    "Podrías dedicar demasiado tiempo a evaluar alternativas antes de actuar.",
    "Valorás las conversaciones profundas, la coherencia y la confianza.",
    "Permitirte experimentar sin tener todas las respuestas puede ayudarte a equilibrar reflexión y acción."
  ),

  axis(
    "El explorador",
    "La mente que busca posibilidades",
    "Tu tendencia es mantenerte abierto a experiencias, ideas y caminos diferentes.",
    "Curiosidad, flexibilidad, imaginación y adaptación.",
    "Podrías entusiasmarte con muchas posibilidades y tener dificultades para sostener una dirección.",
    "Valorás los vínculos que te permiten expresarte con libertad.",
    "Dar continuidad a algunas de tus ideas puede convertir tu creatividad en proyectos concretos."
  ),

  axis(
    "El conector",
    "La mente que comprende a las personas",
    "Prestás atención a los vínculos, las emociones y las necesidades de quienes te rodean.",
    "Escucha, cooperación, empatía y capacidad para construir confianza.",
    "Podrías priorizar las necesidades ajenas y dejar tus preferencias en segundo plano.",
    "Valorás la reciprocidad, la comunicación y las relaciones sinceras.",
    "Expresar tus propias necesidades también es una manera de cuidar tus relaciones."
  ),

  axis(
    "El realizador",
    "La mente que transforma ideas en acciones",
    "Tu tendencia es buscar resultados concretos y convertir los problemas en pasos posibles.",
    "Organización, constancia, planificación y orientación a objetivos.",
    "Podrías frustrarte cuando los planes cambian o no existe una solución inmediata.",
    "Demostrás compromiso mediante acciones concretas.",
    "Dejar espacio para la improvisación puede ayudarte a descubrir soluciones inesperadas."
  )
];

/* =====================================================
   LAS 7 CATEGORÍAS ORIGINALES
===================================================== */

const categories = [

  {
    id: "personalidad",
    name: "Personalidad",
    subtitle: "Descubrí qué rasgos influyen en tu manera de ser.",
    icon: "✦",
    description: "Una exploración de tus tendencias personales, motivaciones y maneras de desenvolverte.",
    axes: generalAxes
  },

  {
    id: "relaciones",
    name: "Relaciones y vínculos",
    subtitle: "Explorá cómo construís y mantenés tus relaciones.",
    icon: "♡",
    description: "Un recorrido por tus tendencias al comunicarte, generar confianza y resolver desacuerdos.",
    axes: [
      axis(
        "El comunicador reflexivo",
        "Comprender antes de responder",
        "Tendés a escuchar, observar y pensar antes de expresar una opinión.",
        "Escucha atenta, reflexión y comprensión.",
        "Podrías guardar demasiado tiempo lo que pensás.",
        "Valorás las conversaciones sinceras y profundas.",
        "Compartir tus pensamientos con espontaneidad fortalece la comunicación."
      ),

      axis(
        "El vínculo espontáneo",
        "Conectar desde la autenticidad",
        "Buscás relaciones dinámicas, abiertas y naturales.",
        "Espontaneidad, iniciativa y apertura.",
        "Podrías perder interés cuando una relación requiere constancia.",
        "Valorás la libertad y la autenticidad.",
        "La profundidad también se construye sosteniendo conversaciones difíciles."
      ),

      axis(
        "El compañero",
        "Construir confianza y cercanía",
        "Prestás atención a las necesidades de las personas importantes para vos.",
        "Disponibilidad, sensibilidad y compromiso.",
        "Podrías sentir que tenés que solucionar los problemas ajenos.",
        "Buscás apoyo y cuidado mutuos.",
        "Aprender a poner límites permite construir vínculos equilibrados."
      ),

      axis(
        "El vínculo práctico",
        "Demostrar interés mediante acciones",
        "Expresás tu compromiso a través de hechos concretos.",
        "Responsabilidad, confiabilidad e iniciativa.",
        "Podrías concentrarte tanto en resolver problemas que olvides escuchar.",
        "Valorás la coherencia entre palabras y acciones.",
        "No todos necesitan soluciones: a veces escuchar es suficiente."
      )
    ]
  },

  {
    id: "inteligencia",
    name: "Inteligencia",
    subtitle: "Descubrí tus preferencias al pensar y resolver problemas.",
    icon: "◈",
    description: "Explorá tus tendencias para procesar información, resolver desafíos e imaginar posibilidades.",
    axes: [
      axis(
        "Pensamiento lógico",
        "La mente que identifica patrones",
        "Preferís organizar información, detectar relaciones y construir conclusiones.",
        "Análisis, razonamiento y precisión.",
        "Podrías buscar explicaciones lógicas en situaciones ambiguas.",
        "Disfrutás las conversaciones basadas en argumentos.",
        "Combinar análisis con intuición amplía tus perspectivas."
      ),

      axis(
        "Pensamiento creativo",
        "La mente que conecta ideas",
        "Tendés a encontrar relaciones inesperadas y soluciones diferentes.",
        "Originalidad, flexibilidad e imaginación.",
        "Podrías generar tantas alternativas que resulte difícil elegir.",
        "Aportás perspectivas diferentes.",
        "La creatividad se potencia cuando concretás tus ideas."
      ),

      axis(
        "Pensamiento interpersonal",
        "La mente que interpreta perspectivas",
        "Comprendés los problemas observando las perspectivas de las personas.",
        "Comprensión social, escucha y cooperación.",
        "Podrías dedicar demasiada atención a las opiniones externas.",
        "Te interesa comprender cómo piensan los demás.",
        "Equilibrar la comprensión ajena con tu propio criterio fortalece tus decisiones."
      ),

      axis(
        "Pensamiento aplicado",
        "La mente que resuelve",
        "Preferís aprender mediante la práctica y convertir información en soluciones útiles.",
        "Resolución de problemas y organización.",
        "Podrías descartar ideas sin utilidad inmediata.",
        "Valorás la colaboración y las soluciones concretas.",
        "Explorar ideas nuevas puede abrir oportunidades."
      )
    ]
  },

  {
    id: "valores",
    name: "Valores y decisiones",
    subtitle: "Descubrí qué principios suelen orientar tus elecciones.",
    icon: "⚖",
    description: "Una exploración de tus prioridades, criterios personales y manera de evaluar decisiones.",
    axes: [
      axis(
        "El buscador de justicia",
        "La importancia de la coherencia",
        "Te importa que las decisiones tengan fundamentos y que las personas reciban un trato justo.",
        "Sentido de justicia, coherencia y responsabilidad.",
        "Podrías frustrarte ante situaciones sin soluciones completamente justas.",
        "Valorás la honestidad y el respeto.",
        "Comprender diferentes circunstancias ayuda a aplicar tus principios con flexibilidad."
      ),

      axis(
        "El idealista",
        "La búsqueda de posibilidades mejores",
        "Tus decisiones están influidas por aquello que considerás valioso para el futuro.",
        "Visión, imaginación e iniciativa.",
        "Podrías frustrarte cuando la realidad avanza lentamente.",
        "Valorás compartir proyectos e ideas.",
        "Transformar ideales en pasos concretos acerca tus objetivos."
      ),

      axis(
        "El solidario",
        "La importancia de las personas",
        "Evaluás las decisiones considerando cómo afectan a quienes participan.",
        "Empatía, solidaridad y compromiso.",
        "Podrías tener dificultades cuando tus necesidades entran en conflicto con las ajenas.",
        "Valorás la reciprocidad.",
        "Tus necesidades también merecen ser consideradas."
      ),

      axis(
        "El pragmático",
        "La importancia de lo posible",
        "Te interesa encontrar decisiones que puedan llevarse a la práctica.",
        "Responsabilidad, realismo y planificación.",
        "Podrías priorizar tanto lo inmediato que olvides el largo plazo.",
        "Valorás los compromisos claros.",
        "Considerar ideales y emociones enriquece tu criterio."
      )
    ]
  },

  {
    id: "emociones",
    name: "Desarrollo personal",
    subtitle: "Explorá cómo reconocés y gestionás tus experiencias.",
    icon: "☼",
    description: "Un cuestionario sobre tus tendencias para interpretar situaciones y responder ante desafíos.",
    axes: [
      axis(
        "El observador interior",
        "Comprender lo que sentís",
        "Reflexionás sobre tus experiencias y buscás comprender tus reacciones.",
        "Autoconocimiento, reflexión y observación.",
        "Podrías pensar demasiado sin expresar lo que necesitás.",
        "Valorás la comunicación y la confianza.",
        "Expresar tus emociones también ayuda a comprenderlas."
      ),

      axis(
        "El adaptable",
        "Encontrar nuevas perspectivas",
        "Buscás alternativas cuando las circunstancias cambian.",
        "Flexibilidad, apertura y adaptación.",
        "Podrías cambiar de dirección antes de procesar una experiencia.",
        "Valorás los vínculos abiertos al diálogo.",
        "Reconocer lo que sentís complementa tu capacidad de adaptación."
      ),

      axis(
        "El sensible al entorno",
        "Comprender el impacto emocional",
        "Prestás atención a los climas emocionales y a cómo afectan a las personas.",
        "Empatía y sensibilidad interpersonal.",
        "Podrías sentirte responsable por emociones ajenas.",
        "Valorás la cercanía y el cuidado mutuo.",
        "Diferenciar tus emociones de las ajenas ayuda a cuidar tu bienestar."
      ),

      axis(
        "El orientado a la acción",
        "Transformar dificultades en pasos",
        "Buscás qué podés hacer para avanzar ante un desafío.",
        "Iniciativa, constancia y organización.",
        "Podrías intentar resolver rápidamente algo que necesita reflexión.",
        "Demostrás apoyo mediante acciones.",
        "No todas las experiencias necesitan una solución inmediata."
      )
    ]
  },

  {
    id: "arquetipos",
    name: "Arquetipos",
    subtitle: "Descubrí qué personaje simbólico representa tus tendencias.",
    icon: "✧",
    description: "Una experiencia narrativa que transforma tus respuestas en un arquetipo ficticio.",
    axes: [
      axis(
        "El sabio",
        "El que busca comprender",
        "Representa la curiosidad, la observación y el deseo de encontrar sentido.",
        "Reflexión, conocimiento y análisis.",
        "Puede quedarse demasiado tiempo buscando respuestas.",
        "Valora las conversaciones profundas.",
        "El conocimiento adquiere otra dimensión cuando se convierte en experiencia."
      ),

      axis(
        "El explorador",
        "El que abre caminos",
        "Representa la independencia, la curiosidad y el deseo de descubrir.",
        "Apertura, creatividad y valentía para experimentar.",
        "Puede tener dificultades para permanecer en un camino.",
        "Valora la libertad y las experiencias compartidas.",
        "Elegir un destino no significa renunciar a descubrir."
      ),

      axis(
        "El guardián",
        "El que protege lo importante",
        "Representa la lealtad, el compromiso y la atención a lo valioso.",
        "Constancia, responsabilidad y sensibilidad.",
        "Puede asumir responsabilidades que no le corresponden.",
        "Valora la confianza y la reciprocidad.",
        "Cuidar también significa reconocer los propios límites."
      ),

      axis(
        "El creador",
        "El que transforma posibilidades",
        "Representa la imaginación y la capacidad de construir alternativas.",
        "Originalidad, iniciativa y flexibilidad.",
        "Puede entusiasmarse con muchas ideas sin concretarlas.",
        "Valora la autenticidad.",
        "La constancia permite transformar una idea en algo real."
      )
    ]
  },

  {
    id: "estilo",
    name: "Hábitos y estilo de vida",
    subtitle: "Descubrí cómo organizás tus actividades y objetivos.",
    icon: "⌁",
    description: "Una exploración de tus preferencias al planificar, aprender y organizar el tiempo.",
    axes: [
      axis(
        "El planificador",
        "Organizar antes de avanzar",
        "Te resulta útil anticipar tareas y ordenar prioridades.",
        "Previsión, organización y constancia.",
        "Los cambios inesperados podrían frustrarte.",
        "Valorás la claridad y los acuerdos.",
        "Dejar espacios flexibles hace que tus planes sean sostenibles."
      ),

      axis(
        "El improvisador",
        "Adaptarse sobre la marcha",
        "Preferís conservar libertad para cambiar de dirección.",
        "Adaptabilidad y espontaneidad.",
        "Podrías postergar tareas que requieren continuidad.",
        "Disfrutás los planes espontáneos.",
        "Una estructura mínima ayuda a concretar tus ideas."
      ),

      axis(
        "El colaborador",
        "Organizarse con otras personas",
        "Tu experiencia mejora cuando compartís objetivos e intercambiás ideas.",
        "Cooperación, comunicación y escucha.",
        "Podrías depender demasiado de las decisiones del grupo.",
        "Valorás el trabajo compartido.",
        "Desarrollar autonomía también fortalece tu capacidad de colaborar."
      ),

      axis(
        "El ejecutor",
        "Avanzar mediante acciones",
        "Te motiva ver avances concretos y comprobar que cada paso te acerca al resultado.",
        "Iniciativa, constancia y sentido práctico.",
        "Podrías concentrarte demasiado en terminar tareas.",
        "Valorás la responsabilidad.",
        "Reconocer avances y revisar prioridades ayuda a sostener el ritmo."
      )
    ]
  }
];

/* =====================================================
   CREADOR DE PREGUNTAS
===================================================== */

function makeQuestion(prompt, options) {
  return {
    prompt,
    options: options.map((option, index) => {

      if (typeof option === "string") {
        return {
          text: option,
          score: index
        };
      }

      return {
        text: option.text,
        score: Number.isFinite(option.score)
          ? option.score
          : index
      };
    })
  };
}

/* =====================================================
   PREGUNTAS PARA LAS 7 CATEGORÍAS ORIGINALES
   16 PREGUNTAS CADA UNA
===================================================== */

const originalCategoryQuestions = [

  makeQuestion(
    "Cuando tenés que tomar una decisión importante, ¿qué suele influir más?",
    [
      "Analizo las posibilidades antes de decidir.",
      "Pienso en diferentes caminos que podría tomar.",
      "Considero cómo afectará a las personas involucradas.",
      "Pienso principalmente en qué opción puedo llevar a la práctica."
    ]
  ),

  makeQuestion(
    "Cuando algo inesperado cambia tus planes, ¿qué hacés normalmente?",
    [
      "Intento entender primero qué cambió.",
      "Busco rápidamente una alternativa.",
      "Pienso también en cómo afecta a los demás.",
      "Me concentro en reorganizar lo necesario."
    ]
  ),

  makeQuestion(
    "¿Qué te resulta más interesante cuando conocés a una persona nueva?",
    [
      "Comprender cómo piensa.",
      "Descubrir qué experiencias tiene.",
      "Conocer qué siente y qué le importa.",
      "Saber qué hace y qué proyectos tiene."
    ]
  ),

  makeQuestion(
    "Cuando tenés un problema difícil, ¿qué hacés primero?",
    [
      "Lo analizo desde distintos puntos de vista.",
      "Intento encontrar una solución diferente.",
      "Pienso cómo puede afectar a las personas involucradas.",
      "Lo divido en pasos concretos."
    ]
  ),

  makeQuestion(
    "¿Qué situación suele hacerte cambiar de opinión?",
    [
      "Encontrar un argumento mejor fundamentado.",
      "Descubrir una posibilidad que no había considerado.",
      "Comprender cómo se siente otra persona.",
      "Encontrar evidencia de que mi primera opción no funciona."
    ]
  ),

  makeQuestion(
    "Cuando aprendés algo nuevo, ¿qué te genera más curiosidad?",
    [
      "Entender cómo funciona.",
      "Pensar qué otras cosas podría hacer con eso.",
      "Compartirlo y conocer qué piensan los demás.",
      "Probarlo y comprobar si funciona."
    ]
  ),

  makeQuestion(
    "Si tenés varias opciones frente a vos, ¿qué suele pasar?",
    [
      "Comparo cuidadosamente las alternativas.",
      "Me entusiasma imaginar diferentes posibilidades.",
      "Pienso en cómo cada opción afectaría a otros.",
      "Intento identificar rápidamente cuál es más conveniente."
    ]
  ),

  makeQuestion(
    "¿Qué hacés cuando una persona cercana te cuenta un problema?",
    [
      "Intento comprender exactamente qué ocurrió.",
      "Le propongo distintas maneras de verlo.",
      "Presto atención a cómo se siente.",
      "Pienso qué podría hacer concretamente para ayudar."
    ]
  ),

  makeQuestion(
    "Cuando cometés un error, ¿qué suele interesarte más?",
    [
      "Entender por qué ocurrió.",
      "Pensar qué podría hacer diferente la próxima vez.",
      "Considerar si afectó a alguien más.",
      "Encontrar una solución para corregirlo."
    ]
  ),

  makeQuestion(
    "¿Qué te resulta más difícil?",
    [
      "Decidir cuando todavía faltan datos.",
      "Elegir una sola posibilidad entre muchas.",
      "Decidir cuando sabés que alguien podría sentirse mal.",
      "Actuar cuando no existe un plan claro."
    ]
  ),

  makeQuestion(
    "Cuando alguien no está de acuerdo con vos, ¿qué tendés a hacer?",
    [
      "Intento entender sus argumentos.",
      "Considero si su perspectiva abre una posibilidad diferente.",
      "Intento comprender por qué piensa de esa manera.",
      "Busco encontrar una solución práctica al desacuerdo."
    ]
  ),

  makeQuestion(
    "¿Qué característica valorás más en vos mismo?",
    [
      "Mi capacidad para analizar.",
      "Mi capacidad para imaginar posibilidades.",
      "Mi capacidad para comprender a otros.",
      "Mi capacidad para hacer que las cosas sucedan."
    ]
  ),

  makeQuestion(
    "Cuando tenés que empezar un proyecto nuevo, ¿qué te sale naturalmente?",
    [
      "Investigar y pensar antes de comenzar.",
      "Imaginar cómo podría ser.",
      "Pensar quiénes podrían participar.",
      "Organizar los primeros pasos."
    ]
  ),

  makeQuestion(
    "Si algo que planeabas no funciona, ¿qué hacés?",
    [
      "Analizo qué salió mal.",
      "Busco otra posibilidad.",
      "Pienso si alguien puede ayudarme a verlo desde otra perspectiva.",
      "Cambio el plan y pruebo otra estrategia."
    ]
  ),

  makeQuestion(
    "¿Qué tipo de conversación suele atraparte más?",
    [
      "Una conversación que me haga pensar.",
      "Una conversación llena de ideas y posibilidades.",
      "Una conversación sobre experiencias y personas.",
      "Una conversación sobre proyectos y soluciones."
    ]
  ),

  makeQuestion(
    "Si pudieras desarrollar una habilidad durante el próximo año, ¿cuál elegirías?",
    [
      "Comprender mejor problemas complejos.",
      "Ser más creativo al buscar alternativas.",
      "Comprender mejor a las personas.",
      "Organizar mejor mis objetivos y convertirlos en acciones."
    ]
  )

];

/* =====================================================
   ASIGNAR LAS 16 PREGUNTAS A LAS 7 CATEGORÍAS
===================================================== */

categories.forEach(category => {

  category.questions =
    originalCategoryQuestions.map(question => ({
      prompt: question.prompt,

      options: question.options.map(option => ({
        text: option.text,
        score: option.score
      }))
    }));

});

/* =====================================================
   CREADOR DE TESTS NUEVOS
===================================================== */

function makeNewTest(
  id,
  name,
  subtitle,
  icon,
  description,
  questions,
  axes
) {
  return {
    id,
    name,
    subtitle,
    icon,
    description,
    questions,
    axes
  };
}

/* =====================================================
   TEST 8 — TDAH
===================================================== */

const testTDAH = makeNewTest(
  "tdah",
  "TDAH",
  "Explorá tus hábitos de atención, organización y concentración.",
  "◎",
  "Este cuestionario explora experiencias cotidianas relacionadas con la atención, la organización y la actividad. No permite diagnosticar TDAH.",

  [
    makeQuestion(
      "Cuando tenés que concentrarte en una tarea larga, ¿qué suele pasarte?",
      [
        "Mantengo la atención con bastante facilidad.",
        "Me distraigo ocasionalmente, pero puedo retomar.",
        "Me cuesta sostener la concentración durante bastante tiempo.",
        "Me resulta muy difícil mantener la atención, incluso cuando quiero hacerlo."
      ]
    ),

    makeQuestion(
      "Cuando tenés varias tareas pendientes, ¿cómo te organizás?",
      [
        "Las ordeno y avanzo de manera planificada.",
        "Me organizo, aunque a veces cambio el orden.",
        "Me cuesta decidir por dónde empezar.",
        "Me siento fácilmente desbordado y me cuesta comenzar."
      ]
    ),

    makeQuestion(
      "Cuando alguien te explica varias instrucciones seguidas, ¿qué suele ocurrir?",
      [
        "Puedo recordar y seguir todos los pasos.",
        "A veces necesito que repitan algún detalle.",
        "Suelo olvidar una parte de las instrucciones.",
        "Me cuesta retener varios pasos al mismo tiempo."
      ]
    ),

    makeQuestion(
      "Cuando estás haciendo algo y aparece una distracción, ¿qué ocurre?",
      [
        "Puedo ignorarla y continuar.",
        "Me distraigo un momento y vuelvo.",
        "Me cuesta bastante retomar lo que estaba haciendo.",
        "Frecuentemente termino dejando la tarea original."
      ]
    ),

    makeQuestion(
      "¿Cómo manejás los tiempos y las fechas de entrega?",
      [
        "Suelo anticiparme y cumplir los plazos.",
        "A veces calculo mal el tiempo.",
        "Con frecuencia termino organizándome a último momento.",
        "Me cuesta mucho calcular cuánto tiempo necesito."
      ]
    ),

    makeQuestion(
      "Cuando una actividad te interesa muchísimo, ¿qué sucede con tu atención?",
      [
        "Mi concentración suele mantenerse estable.",
        "Me concentro más, aunque sigo teniendo distracciones.",
        "Puedo concentrarme intensamente durante mucho tiempo.",
        "Puedo quedar tan concentrado que pierdo la noción del tiempo."
      ]
    ),

    makeQuestion(
      "¿Qué sucede cuando necesitás recordar algo importante?",
      [
        "Suelo recordarlo sin dificultad.",
        "Uso recordatorios algunas veces.",
        "Necesito anotarlo para no olvidarlo.",
        "Incluso con recordatorios puedo olvidarme de algunas cosas."
      ]
    ),

    makeQuestion(
      "Cuando necesitás permanecer tranquilo durante bastante tiempo, ¿cómo te resulta?",
      [
        "Me resulta cómodo.",
        "A veces me inquieto un poco.",
        "Me cuesta permanecer tranquilo durante mucho tiempo.",
        "Siento una inquietud frecuente y necesito cambiar de actividad."
      ]
    ),

    makeQuestion(
      "Cuando una tarea es importante pero no te interesa demasiado, ¿qué suele pasar?",
      [
        "La hago igual porque sé que tengo que hacerla.",
        "Me cuesta un poco empezar, pero termino haciéndola.",
        "Suelo postergarla hasta sentir presión.",
        "Puedo pasar mucho tiempo evitando comenzar."
      ]
    ),

    makeQuestion(
      "Si estás estudiando y aparece una notificación, ¿qué hacés normalmente?",
      [
        "La ignoro hasta terminar.",
        "La miro rápidamente y vuelvo.",
        "Me cuesta no revisar qué ocurrió.",
        "Puede terminar sacándome completamente de la tarea."
      ]
    ),

    makeQuestion(
      "Cuando perdés algo que necesitabas, ¿qué suele ocurrir?",
      [
        "Normalmente recuerdo dónde lo dejé.",
        "A veces tengo que buscarlo.",
        "Con frecuencia no recuerdo dónde lo puse.",
        "Puedo perder bastante tiempo buscando cosas que tenía hace poco."
      ]
    ),

    makeQuestion(
      "¿Qué tan fácil te resulta comenzar una tarea que sabés que va a llevar mucho tiempo?",
      [
        "Empiezo sin demasiados problemas.",
        "Me cuesta un poco, pero puedo hacerlo.",
        "Suelo esperar hasta sentirme preparado.",
        "Me cuesta mucho comenzar aunque sepa que es importante."
      ]
    ),

    makeQuestion(
      "Cuando una conversación se extiende mucho, ¿qué suele pasar?",
      [
        "Puedo seguirla sin dificultad.",
        "A veces pierdo algún detalle.",
        "Me cuesta mantener la atención durante toda la conversación.",
        "Mi atención puede irse hacia otras cosas rápidamente."
      ]
    ),

    makeQuestion(
      "Cuando tenés que hacer varias cosas en poco tiempo, ¿cómo reaccionás?",
      [
        "Organizo prioridades y avanzo.",
        "Me pongo algo nervioso, pero puedo manejarlo.",
        "Me cuesta decidir qué hacer primero.",
        "Siento que demasiadas tareas me bloquean."
      ]
    ),

    makeQuestion(
      "¿Qué tan seguido empezás una actividad y terminás haciendo otra completamente diferente?",
      [
        "Casi nunca.",
        "Ocurre ocasionalmente.",
        "Me pasa con cierta frecuencia.",
        "Me pasa muy seguido."
      ]
    ),

    makeQuestion(
      "Cuando finalmente encontrás una forma de organizarte que funciona, ¿qué suele pasar?",
      [
        "Puedo mantenerla bastante bien.",
        "Funciona durante un tiempo.",
        "A veces dejo de utilizarla aunque me ayudaba.",
        "Me cuesta mantener sistemas de organización de manera constante."
      ]
    )
  ],

  [
    axis(
      "Atención sostenida",
      "Concentrarte y mantener el foco",
      "Tus respuestas muestran cómo experimentás la concentración y la continuidad de la atención en diferentes situaciones.",
      "Capacidad para mantener el foco cuando encontrás condiciones adecuadas.",
      "Las tareas largas o poco estimulantes pueden requerir estrategias adicionales.",
      "Podés beneficiarte de ambientes con pocas distracciones.",
      "Dividir tareas extensas en etapas puede facilitar la continuidad."
    ),

    axis(
      "Atención flexible",
      "Cambiar de foco y retomar",
      "Tus respuestas muestran cómo manejás los cambios de estímulo y la recuperación del foco.",
      "Adaptabilidad y capacidad de cambiar de actividad.",
      "Las interrupciones frecuentes pueden hacer más difícil retomar.",
      "Los entornos claros y ordenados pueden favorecer tu concentración.",
      "Reducir distracciones innecesarias puede ayudarte."
    ),

    axis(
      "Organización",
      "Ordenar tareas y prioridades",
      "Tus respuestas permiten observar cómo manejás tiempos, pendientes y planificación.",
      "Capacidad para identificar prioridades y buscar herramientas.",
      "Varias tareas simultáneas pueden generar sensación de saturación.",
      "Los acuerdos y horarios claros pueden facilitar actividades compartidas.",
      "Listas breves, calendarios y recordatorios pueden ser recursos útiles."
    ),

    axis(
      "Actividad e impulsividad",
      "Regular tu nivel de actividad",
      "Tus respuestas exploran cómo vivís la inquietud, la espera y la necesidad de cambiar de actividad.",
      "Energía, iniciativa y capacidad de reaccionar rápidamente.",
      "Las situaciones muy pasivas pueden resultarte especialmente difíciles.",
      "Los espacios flexibles pueden favorecer tu participación.",
      "Incorporar pausas y movimiento puede ayudarte a regular tu ritmo."
    )
  ]
);

/* =====================================================
   TEST 9 — IRA
===================================================== */

const testIra = makeNewTest(
  "ira",
  "Problemas de ira",
  "Descubrí cómo reaccionás ante la frustración y los conflictos.",
  "⚡",
  "Una exploración de tus reacciones ante el enojo y tus estrategias para manejar desacuerdos. No es una evaluación clínica.",

  [
    makeQuestion(
      "Cuando algo no sale como esperabas, ¿cómo reaccionás?",
      [
        "Lo acepto y busco otra solución.",
        "Me molesta, pero logro continuar.",
        "Me cuesta controlar mi frustración.",
        "La frustración suele dominar mi reacción."
      ]
    ),

    makeQuestion(
      "Cuando alguien te lleva la contra, ¿qué suele pasar?",
      [
        "Escucho su punto de vista.",
        "Me incomoda, pero intento conversar.",
        "Me cuesta evitar una discusión.",
        "Reacciono de manera impulsiva."
      ]
    ),

    makeQuestion(
      "¿Cuánto tiempo tardás en recuperar la calma después de un desacuerdo?",
      [
        "Generalmente poco tiempo.",
        "Depende de la situación.",
        "A veces necesito bastante tiempo.",
        "Puedo quedarme pensando en el conflicto durante mucho tiempo."
      ]
    ),

    makeQuestion(
      "Cuando estás muy enojado, ¿qué te resulta más difícil?",
      [
        "Generalmente puedo identificar lo que necesito.",
        "A veces me cuesta expresarlo.",
        "Me cuesta explicar lo que me pasa sin discutir.",
        "Me resulta muy difícil pensar con claridad en ese momento."
      ]
    ),

    makeQuestion(
      "Si alguien te hace una crítica, ¿cómo la recibís?",
      [
        "Intento evaluar si tiene fundamento.",
        "Me molesta al principio, pero puedo reflexionar.",
        "Suelo tomarla de manera personal.",
        "Me cuesta mucho escucharla sin reaccionar."
      ]
    ),

    makeQuestion(
      "Cuando tenés un problema con alguien, ¿qué preferís hacer?",
      [
        "Conversarlo con tranquilidad.",
        "Esperar un momento y después hablar.",
        "A veces evito el tema hasta sentirme preparado.",
        "Me cuesta encontrar una manera tranquila de resolverlo."
      ]
    ),

    makeQuestion(
      "¿Qué suele ayudarte a recuperar la calma?",
      [
        "Reflexionar y buscar una solución.",
        "Tomarme un momento a solas.",
        "Hablar con alguien de confianza.",
        "Todavía me cuesta encontrar algo que me ayude."
      ]
    ),

    makeQuestion(
      "Cuando sentís que alguien fue injusto con vos, ¿qué suele aparecer primero?",
      [
        "Intento entender qué ocurrió.",
        "Me molesto, pero espero antes de responder.",
        "Siento una fuerte necesidad de defenderme.",
        "Reacciono rápidamente porque siento que tengo que responder."
      ]
    ),

    makeQuestion(
      "Si alguien insiste en un tema que te molesta, ¿qué hacés?",
      [
        "Explico claramente que prefiero detener la conversación.",
        "Me tomo un momento para calmarme.",
        "Empiezo a perder la paciencia.",
        "Puedo reaccionar de forma impulsiva."
      ]
    ),

    makeQuestion(
      "Después de una discusión, ¿qué suele pasar con tus pensamientos?",
      [
        "Puedo dejarla atrás después de hablarla.",
        "La pienso durante un rato.",
        "Repaso varias veces lo que dije y lo que debería haber dicho.",
        "Me cuesta mucho dejar de pensar en lo ocurrido."
      ]
    ),

    makeQuestion(
      "Cuando estás cansado o estresado, ¿qué pasa con tu paciencia?",
      [
        "Intento mantenerla.",
        "Disminuye un poco.",
        "Me irrito más fácilmente.",
        "Me cuesta mucho controlar mi reacción."
      ]
    ),

    makeQuestion(
      "Si alguien no cumple algo que había prometido, ¿cómo reaccionás?",
      [
        "Pregunto qué ocurrió antes de sacar conclusiones.",
        "Me molesta, pero puedo hablarlo.",
        "Me cuesta evitar sentir que no me respetaron.",
        "Puedo reaccionar con mucha intensidad."
      ]
    ),

    makeQuestion(
      "Cuando sentís que no te escuchan, ¿qué hacés?",
      [
        "Intento explicar nuevamente lo que necesito.",
        "Espero otro momento para hablar.",
        "Me frustro bastante.",
        "Puedo terminar discutiendo o elevando mucho mi reacción."
      ]
    ),

    makeQuestion(
      "¿Qué tan fácil te resulta reconocer que necesitás una pausa durante una discusión?",
      [
        "Bastante fácil.",
        "A veces me doy cuenta.",
        "Muchas veces lo noto después.",
        "Me cuesta reconocerlo mientras estoy enojado."
      ]
    ),

    makeQuestion(
      "Cuando después de una discusión reconocés que exageraste, ¿qué hacés?",
      [
        "Lo reconozco y trato de reparar la situación.",
        "Me cuesta admitirlo al principio.",
        "Espero que la otra persona también reconozca su parte.",
        "Me cuesta mucho volver sobre lo ocurrido."
      ]
    ),

    makeQuestion(
      "¿Qué te gustaría poder hacer mejor cuando estás enojado?",
      [
        "Expresar lo que necesito sin acumularlo.",
        "Tomarme más tiempo antes de responder.",
        "Evitar que una situación pequeña se convierta en una gran discusión.",
        "Poder recuperar la calma más rápidamente."
      ]
    )
  ],

  [
    axis(
      "Respuesta reflexiva",
      "Pensar antes de reaccionar",
      "Tus respuestas muestran recursos para reconocer el enojo y responder de manera deliberada.",
      "Autocontrol, reflexión y comunicación.",
      "Podrías minimizar lo que te molesta para evitar conflictos.",
      "Podés favorecer conversaciones respetuosas.",
      "Expresar desacuerdos sin acumular frustración fortalece tus vínculos."
    ),

    axis(
      "Frustración variable",
      "Una reacción que depende del contexto",
      "Generalmente manejás bien las diferencias, aunque determinadas situaciones pueden poner a prueba tu paciencia.",
      "Capacidad para recuperar la calma.",
      "El cansancio, el estrés o sentirte incomprendido pueden influir.",
      "Podés resolver desacuerdos si contás con tiempo.",
      "Reconocer tus desencadenantes puede ayudarte."
    ),

    axis(
      "Reacción intensa",
      "Emociones que necesitan espacio",
      "Algunas situaciones parecen generar respuestas emocionales especialmente intensas.",
      "Reconocer que algo te molesta es un primer paso.",
      "Podrías responder antes de tener tiempo para pensar.",
      "Las pausas pueden favorecer el diálogo.",
      "Practicar comunicación asertiva puede ser útil."
    ),

    axis(
      "Regulación en desarrollo",
      "Encontrar nuevas herramientas",
      "Tus respuestas sugieren que manejar la frustración puede ser un desafío en determinadas situaciones.",
      "Reconocer áreas que querés mejorar.",
      "Podría costarte recuperar la calma después de un conflicto.",
      "Los límites y acuerdos claros pueden ayudar.",
      "Hablar con alguien de confianza puede ayudarte a desarrollar estrategias."
    )
  ]
);

/* =====================================================
   TEST 10 — PAREJA IDEAL
===================================================== */

const testPareja = makeNewTest(
  "pareja",
  "Pareja ideal",
  "Descubrí qué características valorás en una relación.",
  "♡",
  "Una exploración de tus preferencias sobre comunicación, confianza, autonomía y proyectos compartidos. No predice quién será tu pareja.",

  [
    makeQuestion(
      "¿Qué valorás más en una relación?",
      [
        "La comunicación sincera.",
        "La espontaneidad y las experiencias nuevas.",
        "La cercanía y el acompañamiento.",
        "La estabilidad y el compromiso."
      ]
    ),

    makeQuestion(
      "Cuando aparece un desacuerdo, ¿qué preferís?",
      [
        "Hablarlo hasta comprender ambos puntos de vista.",
        "Tomar distancia un momento y retomarlo después.",
        "Buscar una solución que cuide a ambos.",
        "Acordar pasos concretos para resolverlo."
      ]
    ),

    makeQuestion(
      "¿Qué tipo de tiempo compartido disfrutás más?",
      [
        "Conversaciones profundas.",
        "Planes diferentes e improvisados.",
        "Momentos tranquilos y cercanos.",
        "Actividades y proyectos compartidos."
      ]
    ),

    makeQuestion(
      "¿Qué lugar debería tener la independencia en una relación?",
      [
        "Cada persona necesita conservar su espacio.",
        "Es importante mantener libertad para descubrir cosas nuevas.",
        "Tiene que existir equilibrio entre cercanía y autonomía.",
        "Es importante compartir objetivos sin perder la individualidad."
      ]
    ),

    makeQuestion(
      "¿Qué te genera más confianza?",
      [
        "La honestidad y la comunicación.",
        "La autenticidad y la espontaneidad.",
        "La empatía y la consideración.",
        "La coherencia entre palabras y acciones."
      ]
    ),

    makeQuestion(
      "¿Qué característica te parece esencial para construir algo duradero?",
      [
        "Poder hablar de todo con sinceridad.",
        "Seguir descubriendo cosas juntos.",
        "Cuidarse y acompañarse mutuamente.",
        "Cumplir acuerdos y compartir responsabilidades."
      ]
    ),

    makeQuestion(
      "¿Qué actitud considerás más importante?",
      [
        "Escuchar sin juzgar.",
        "Respetar la libertad del otro.",
        "Demostrar interés y consideración.",
        "Ser responsable y coherente."
      ]
    ),

    makeQuestion(
      "Si tuvieras un problema personal, ¿qué esperarías de la otra persona?",
      [
        "Que me escuche y trate de comprenderme.",
        "Que me ayude a cambiar de perspectiva.",
        "Que me acompañe emocionalmente.",
        "Que me ayude a pensar qué puedo hacer."
      ]
    ),

    makeQuestion(
      "¿Qué situación podría hacerte sentir más desconectado?",
      [
        "No poder hablar sinceramente.",
        "Sentir que la relación se volvió completamente rutinaria.",
        "Sentir que mis emociones no importan.",
        "Que la otra persona no cumpla los acuerdos."
      ]
    ),

    makeQuestion(
      "¿Qué significa para vos confiar en alguien?",
      [
        "Poder decir lo que pienso sin miedo a ser juzgado.",
        "Sentir que puedo ser yo mismo.",
        "Saber que la otra persona va a respetar lo que siento.",
        "Saber que puedo contar con esa persona."
      ]
    ),

    makeQuestion(
      "Si necesitás espacio personal, ¿cómo preferirías comunicarlo?",
      [
        "Explicando claramente qué necesito.",
        "Tomándome un tiempo y retomando después.",
        "Asegurando primero que la otra persona sepa que no es rechazo.",
        "Proponiendo cuándo volver a hablar."
      ]
    ),

    makeQuestion(
      "¿Qué te parece más importante cuando dos personas tienen proyectos diferentes?",
      [
        "Hablar honestamente sobre lo que cada uno quiere.",
        "Buscar maneras creativas de combinar ambos caminos.",
        "Considerar cómo se siente cada persona.",
        "Encontrar acuerdos concretos."
      ]
    ),

    makeQuestion(
      "¿Qué actitud te parece una señal de una relación saludable?",
      [
        "Poder hablar incluso de temas incómodos.",
        "Respetar que cada persona tenga intereses propios.",
        "Sentirse escuchado y cuidado.",
        "Cumplir acuerdos y respetar límites."
      ]
    ),

    makeQuestion(
      "Cuando alguien que querés comete un error, ¿qué preferís?",
      [
        "Hablar sobre lo ocurrido.",
        "Dar espacio para que pueda procesarlo.",
        "Intentar comprender qué le pasó.",
        "Pensar juntos cómo evitar que vuelva a ocurrir."
      ]
    ),

    makeQuestion(
      "¿Qué te gustaría que nunca faltara en una relación?",
      [
        "Sinceridad.",
        "Libertad.",
        "Cuidado.",
        "Compromiso."
      ]
    ),

    makeQuestion(
      "Si tuvieras que elegir una frase que represente una relación saludable, ¿cuál sería?",
      [
        "Podemos hablar de lo que nos pasa.",
        "Podemos querernos sin dejar de ser nosotros mismos.",
        "Podemos cuidarnos sin olvidarnos de nuestras propias necesidades.",
        "Podemos confiar en lo que construimos juntos."
      ]
    )
  ],

  [
    axis(
      "Conexión intelectual",
      "Una relación basada en la comunicación",
      "Valorás especialmente poder conversar, compartir ideas y comprender la perspectiva de la otra persona.",
      "Comunicación, reflexión y honestidad.",
      "Podrías necesitar conversaciones profundas incluso cuando el otro no está preparado.",
      "Te interesa construir confianza mediante el diálogo.",
      "Compartir silencios también puede ser una forma de conexión."
    ),

    axis(
      "Conexión aventurera",
      "Una relación con espontaneidad",
      "Te atraen los vínculos que permiten descubrir experiencias y mantener la curiosidad.",
      "Apertura, espontaneidad y flexibilidad.",
      "La rutina podría hacerte sentir desconectado.",
      "Valorás compartir experiencias nuevas.",
      "La estabilidad también puede ser una aventura construida entre dos."
    ),

    axis(
      "Conexión emocional",
      "Una relación con cercanía y cuidado",
      "Valorás la empatía, el acompañamiento y la posibilidad de expresar lo que sentís.",
      "Sensibilidad, consideración y capacidad de acompañamiento.",
      "Podrías dejar tus necesidades en segundo plano.",
      "Buscás reciprocidad y confianza.",
      "Una relación saludable también necesita límites y autonomía."
    ),

    axis(
      "Conexión estable",
      "Una relación basada en compromiso",
      "Valorás la coherencia, la responsabilidad y los acuerdos que se sostienen en el tiempo.",
      "Constancia, responsabilidad y compromiso.",
      "Podrías sentirte incómodo ante cambios inesperados.",
      "Buscás seguridad y reciprocidad.",
      "La flexibilidad permite que el compromiso crezca sin volverse rígido."
    )
  ]
);

/* =====================================================
   TEST 11 — PSICOPATÍA
===================================================== */

const testPsicopatia = makeNewTest(
  "psicopatia",
  "Psicopatía",
  "Explorá empatía, responsabilidad y toma de decisiones.",
  "◉",
  "Este cuestionario aborda actitudes interpersonales y responsabilidad. No mide psicopatía, no identifica trastornos y no permite etiquetar a una persona.",

  [
    makeQuestion(
      "Si descubrís que una acción tuya lastimó a alguien, ¿qué hacés?",
      [
        "Intento comprender el impacto y reparar el daño.",
        "Me cuesta al principio, pero después reflexiono.",
        "Me concentro primero en explicar por qué actué así.",
        "No siempre sé cómo responder ante esa situación."
      ]
    ),

    makeQuestion(
      "Cuando alguien te cuenta un problema, ¿cómo reaccionás?",
      [
        "Intento comprender cómo se siente.",
        "Escucho, aunque no siempre sé qué decir.",
        "Suelo pensar en soluciones prácticas.",
        "Me cuesta conectar con lo que está sintiendo."
      ]
    ),

    makeQuestion(
      "Si cometés un error, ¿qué suele pasar?",
      [
        "Lo reconozco y trato de corregirlo.",
        "Necesito tiempo para aceptarlo.",
        "Primero intento justificar mi decisión.",
        "Me cuesta asumir mi responsabilidad."
      ]
    ),

    makeQuestion(
      "Cuando una decisión beneficia a otras personas pero te exige un esfuerzo, ¿qué considerás?",
      [
        "El impacto en todos los involucrados.",
        "Busco un equilibrio entre mis necesidades y las ajenas.",
        "Evalúo principalmente las consecuencias para mí.",
        "Depende mucho de la situación."
      ]
    ),

    makeQuestion(
      "¿Qué importancia tiene para vos respetar los límites de otras personas?",
      [
        "Es fundamental, incluso cuando no estoy de acuerdo.",
        "Es importante, aunque a veces necesito recordarlo.",
        "Depende del vínculo y de la situación.",
        "No siempre me resulta fácil identificar esos límites."
      ]
    ),

    makeQuestion(
      "Cuando alguien piensa diferente a vos, ¿qué hacés?",
      [
        "Intento comprender su perspectiva.",
        "Escucho, aunque puedo mantener mi desacuerdo.",
        "Me cuesta considerar opiniones opuestas.",
        "Prefiero no involucrarme demasiado."
      ]
    ),

    makeQuestion(
      "¿Cómo describirías tu manera de asumir compromisos?",
      [
        "Intento cumplirlos y ser responsable.",
        "A veces necesito ayuda para organizarme.",
        "Puedo cambiar de opinión si me conviene.",
        "Me cuesta sostener compromisos."
      ]
    ),

    makeQuestion(
      "Si alguien confía en vos para guardar algo privado, ¿qué hacés?",
      [
        "Respeto su privacidad.",
        "Intento hacerlo aunque me cueste guardar silencio.",
        "Depende de lo importante que sea el secreto.",
        "No considero que siempre deba mantenerlo."
      ]
    ),

    makeQuestion(
      "Si tenés ventaja sobre otra persona en una situación, ¿qué pensás?",
      [
        "Intento utilizarla de manera justa.",
        "Me pregunto si la otra persona necesita ayuda.",
        "Primero pienso qué puedo conseguir yo.",
        "Depende de lo que esté en juego."
      ]
    ),

    makeQuestion(
      "Cuando alguien te pide disculpas sinceramente, ¿qué suele pasar?",
      [
        "Puedo considerar la posibilidad de perdonar.",
        "Necesito tiempo para procesarlo.",
        "Me cuesta confiar nuevamente.",
        "Me interesa más que demuestre con acciones que cambió."
      ]
    ),

    makeQuestion(
      "¿Qué tan importante es para vos cumplir una promesa?",
      [
        "Muy importante.",
        "Importante, aunque existen excepciones.",
        "Depende de las circunstancias.",
        "No considero que una promesa siempre deba mantenerse."
      ]
    ),

    makeQuestion(
      "Si sabés que una decisión tuya puede perjudicar a otra persona, ¿qué hacés?",
      [
        "Busco otra alternativa.",
        "Evalúo si existe una manera de reducir el impacto.",
        "Considero si el beneficio para mí justifica la decisión.",
        "Depende de la situación."
      ]
    ),

    makeQuestion(
      "Cuando alguien está pasando un mal momento, ¿qué suele surgir en vos?",
      [
        "Quiero comprender y acompañar.",
        "No siempre sé qué hacer, pero intento estar presente.",
        "Pienso primero en una solución.",
        "Me cuesta involucrarme emocionalmente."
      ]
    ),

    makeQuestion(
      "Si una persona reconoce públicamente que cometiste un error, ¿cómo reaccionás?",
      [
        "Intento aceptar mi responsabilidad.",
        "Me siento incómodo, pero puedo reconocerlo.",
        "Me preocupa primero cómo afecta mi imagen.",
        "Me cuesta aceptar que alguien señale mis errores."
      ]
    ),

    makeQuestion(
      "¿Qué significa para vos tratar bien a alguien?",
      [
        "Respetar sus límites y considerar cómo se siente.",
        "Ser educado y mantener una buena convivencia.",
        "No hacerle daño mientras no interfiera conmigo.",
        "Depende mucho del vínculo que tengamos."
      ]
    ),

    makeQuestion(
      "Cuando mirás hacia atrás y pensás en tus decisiones, ¿qué te interesa más?",
      [
        "Si fueron coherentes con mis valores.",
        "Qué aprendí de ellas.",
        "Qué resultado tuvieron para mí.",
        "Qué podría haber hecho diferente."
      ]
    )
  ],

  [
    axis(
      "Responsabilidad interpersonal",
      "Considerar el impacto de tus acciones",
      "Tus respuestas sugieren que prestás atención a las consecuencias de tus decisiones sobre otras personas.",
      "Responsabilidad, consideración y capacidad de reparar errores.",
      "Podrías exigirte demasiado por situaciones que no dependen completamente de vos.",
      "Valorás la confianza y el respeto mutuo.",
      "Mantener límites saludables también forma parte de la responsabilidad."
    ),

    axis(
      "Empatía reflexiva",
      "Intentar comprender otras perspectivas",
      "Solés considerar que otras personas pueden vivir una misma situación de maneras diferentes.",
      "Escucha, reflexión y apertura.",
      "Podrías dedicar demasiado esfuerzo a comprender a los demás.",
      "Valorás el diálogo y la comprensión.",
      "Comprender a alguien no significa estar siempre de acuerdo."
    ),

    axis(
      "Orientación práctica",
      "Priorizar soluciones concretas",
      "Tus respuestas muestran una preferencia por analizar situaciones desde sus consecuencias y posibles soluciones.",
      "Practicidad y capacidad de análisis.",
      "Podrías pasar por alto la dimensión emocional de algunas situaciones.",
      "Podés aportar soluciones, aunque también es importante escuchar.",
      "Incorporar la perspectiva emocional puede enriquecer tus decisiones."
    ),

    axis(
      "Reflexión interpersonal",
      "Reconocer aspectos para desarrollar",
      "Tus respuestas muestran que algunas situaciones interpersonales pueden requerir más reflexión o herramientas.",
      "Disposición para reconocer áreas de aprendizaje.",
      "Podrías necesitar más tiempo para identificar cómo afectan tus decisiones a los demás.",
      "La comunicación clara puede ayudar a evitar malentendidos.",
      "Practicar la escucha y la responsabilidad puede fortalecer tus relaciones."
    )
  ]
);

/* =====================================================
   TEST 12 — LENGUAJE DEL AMOR
===================================================== */

const testAmor = makeNewTest(
  "amor",
  "Lenguaje del amor",
  "Descubrí de qué maneras te gusta recibir y expresar cariño.",
  "♥",
  "Una exploración recreativa de tus preferencias para expresar afecto y sentirte acompañado. No existe una única forma correcta de demostrar cariño.",

  [
    makeQuestion(
      "¿Qué gesto te hace sentir especialmente valorado?",
      [
        "Que alguien me diga algo sincero y lindo.",
        "Que dedique tiempo exclusivamente para compartir conmigo.",
        "Que tenga un detalle pensado para mí.",
        "Que me ayude cuando lo necesito."
      ]
    ),

    makeQuestion(
      "¿Cómo solés demostrar que alguien te importa?",
      [
        "Expresando lo que siento con palabras.",
        "Buscando momentos para compartir.",
        "Preparando una sorpresa o un detalle.",
        "Ayudando y estando presente."
      ]
    ),

    makeQuestion(
      "Después de un día difícil, ¿qué te gustaría recibir?",
      [
        "Palabras de ánimo y comprensión.",
        "Que alguien se quede conmigo un rato.",
        "Un pequeño gesto que demuestre que pensó en mí.",
        "Ayuda para resolver algo que me preocupa."
      ]
    ),

    makeQuestion(
      "¿Qué gesto recordás con más cariño?",
      [
        "Una frase que me hizo sentir comprendido.",
        "Un momento compartido que disfruté mucho.",
        "Un regalo significativo.",
        "Una acción de alguien que estuvo cuando lo necesitaba."
      ]
    ),

    makeQuestion(
      "¿Qué te hace sentir más acompañado?",
      [
        "Que me expresen su cariño.",
        "Que compartan tiempo conmigo sin distracciones.",
        "Que tengan presentes mis gustos y preferencias.",
        "Que me ayuden con acciones concretas."
      ]
    ),

    makeQuestion(
      "Si querés demostrar agradecimiento, ¿qué elegís?",
      [
        "Decir cuánto significa esa persona para mí.",
        "Organizar un momento para compartir.",
        "Dar un detalle especial.",
        "Hacer algo útil para ayudar."
      ]
    ),

    makeQuestion(
      "¿Qué detalle cotidiano valorás más?",
      [
        "Un mensaje amable.",
        "Una charla tranquila.",
        "Una pequeña sorpresa.",
        "Que alguien se ofrezca a ayudarme."
      ]
    ),

    makeQuestion(
      "Cuando alguien te felicita, ¿qué tipo de reconocimiento te llega más?",
      [
        "Que explique qué valora de mí.",
        "Que busque compartir conmigo el momento.",
        "Que haga algo especial para celebrarlo.",
        "Que me acompañe en lo que necesito."
      ]
    ),

    makeQuestion(
      "Si alguien que querés tuvo un día difícil, ¿cómo solés acompañarlo?",
      [
        "Le digo algo para hacerlo sentir comprendido.",
        "Me quedo cerca y comparto tiempo.",
        "Preparo algún pequeño detalle.",
        "Intento ayudarlo con algo concreto."
      ]
    ),

    makeQuestion(
      "¿Qué te hace pensar 'esta persona realmente me conoce'?",
      [
        "Que recuerda cosas importantes que le conté.",
        "Que sabe cuándo quiero compañía.",
        "Que recuerda mis gustos y pequeños detalles.",
        "Que sabe cuándo necesito ayuda."
      ]
    ),

    makeQuestion(
      "Cuando alguien está ocupado pero igual busca un momento para vos, ¿qué significa?",
      [
        "Que le importo.",
        "Que valora nuestro tiempo juntos.",
        "Que quiso tener un gesto conmigo.",
        "Que está dispuesto a hacer un esfuerzo."
      ]
    ),

    makeQuestion(
      "¿Qué gesto te parece más significativo sin necesidad de gastar dinero?",
      [
        "Un mensaje sincero.",
        "Una tarde compartida.",
        "Algo hecho especialmente para mí.",
        "Que alguien me ayude con algo que me cuesta."
      ]
    ),

    makeQuestion(
      "Cuando necesitás apoyo, ¿qué preferís?",
      [
        "Que me digan que confían en mí.",
        "Que se queden conmigo.",
        "Que tengan un detalle que me anime.",
        "Que me ayuden a resolver lo que me preocupa."
      ]
    ),

    makeQuestion(
      "¿Qué te resulta más fácil hacer por alguien?",
      [
        "Decirle lo mucho que lo valoro.",
        "Hacer tiempo para esa persona.",
        "Prepararle un detalle.",
        "Ayudarla con algo."
      ]
    ),

    makeQuestion(
      "¿Qué te gustaría que las personas cercanas entendieran mejor sobre vos?",
      [
        "Que las palabras significan mucho para mí.",
        "Que valoro mucho compartir tiempo.",
        "Que presto atención a los pequeños detalles.",
        "Que para mí ayudar es una forma de demostrar cariño."
      ]
    ),

    makeQuestion(
      "Si tuvieras que elegir una forma de demostrar cariño durante una semana, ¿cuál elegirías?",
      [
        "Decir cosas que normalmente no digo.",
        "Reservar tiempo para compartir.",
        "Preparar pequeños detalles.",
        "Ayudar de manera concreta."
      ]
    )
  ],

  [
    axis(
      "Palabras de afirmación",
      "El cariño expresado con palabras",
      "Las palabras sinceras tienen un lugar importante en tu manera de recibir y expresar afecto.",
      "Comunicación, reconocimiento y expresión emocional.",
      "Podrías darle demasiado peso a comentarios aislados.",
      "Valorás que las personas expresen lo que sienten.",
      "También podés aprender a reconocer el cariño que aparece en acciones."
    ),

    axis(
      "Tiempo de calidad",
      "El cariño expresado con presencia",
      "Sentís que compartir tiempo y atención genuina es una forma importante de construir cercanía.",
      "Presencia, escucha y conexión.",
      "Podrías interpretar la falta de tiempo como falta de interés.",
      "Valorás los momentos compartidos.",
      "La calidad de un vínculo no depende únicamente de la cantidad de tiempo."
    ),

    axis(
      "Regalos significativos",
      "El cariño expresado con detalles",
      "Los pequeños detalles pueden representar para vos que alguien te tuvo presente.",
      "Atención y capacidad de expresar consideración.",
      "Podrías esperar que otras personas demuestren afecto de la misma manera.",
      "Valorás los gestos con significado personal.",
      "Un detalle no necesita tener valor económico para ser significativo."
    ),

    axis(
      "Actos de servicio",
      "El cariño expresado con acciones",
      "Valorás especialmente que las personas demuestren interés mediante ayuda y acciones concretas.",
      "Colaboración, compromiso y atención.",
      "Podrías asumir demasiadas tareas para demostrar afecto.",
      "Valorás la reciprocidad y el apoyo.",
      "También es importante permitir que otros te acompañen."
    )
  ]
);

/* =====================================================
   TEST 13 — DEPRESIÓN
===================================================== */

const testDepresion = makeNewTest(
  "depresion",
  "Depresión",
  "Explorá tu bienestar emocional durante las últimas semanas.",
  "☁",
  "Este cuestionario invita a reflexionar sobre el ánimo, la energía y el interés por las actividades cotidianas. No diagnostica depresión ni reemplaza una evaluación profesional.",

  [
    makeQuestion(
      "Durante las últimas semanas, ¿cómo describirías tu estado de ánimo?",
      [
        "Generalmente positivo o estable.",
        "Variable, con algunos momentos difíciles.",
        "Más bajo de lo habitual.",
        "Frecuentemente desanimado."
      ]
    ),

    makeQuestion(
      "¿Cómo estuvo tu interés por las actividades que normalmente disfrutás?",
      [
        "Se mantuvo igual.",
        "Disminuyó algunos días.",
        "Disminuyó bastante.",
        "Me costó encontrar interés en muchas actividades."
      ]
    ),

    makeQuestion(
      "¿Cómo estuvo tu energía durante el día?",
      [
        "Similar a la habitual.",
        "Un poco más baja algunos días.",
        "Frecuentemente baja.",
        "Me costó mucho encontrar energía para mis actividades."
      ]
    ),

    makeQuestion(
      "¿Cómo estuvo tu descanso?",
      [
        "Bastante regular.",
        "Tuve algunas variaciones.",
        "Me costó descansar bien con frecuencia.",
        "Mi descanso estuvo muy alterado."
      ]
    ),

    makeQuestion(
      "¿Cómo te resultó concentrarte en tus actividades?",
      [
        "Pude concentrarme como siempre.",
        "Tuve algunas dificultades.",
        "Me costó concentrarme con frecuencia.",
        "Me resultó difícil mantener la atención."
      ]
    ),

    makeQuestion(
      "¿Cómo te sentiste respecto a tus actividades cotidianas?",
      [
        "Pude realizarlas normalmente.",
        "Algunas me costaron más de lo habitual.",
        "Varias me resultaron difíciles de sostener.",
        "Sentí que muchas actividades me exigían demasiado."
      ]
    ),

    makeQuestion(
      "¿Con qué frecuencia encontraste momentos agradables durante el día?",
      [
        "Con bastante frecuencia.",
        "Algunos días sí y otros no.",
        "Con poca frecuencia.",
        "Me costó encontrar momentos agradables."
      ]
    ),

    makeQuestion(
      "¿Cómo estuvo tu motivación para comenzar cosas que normalmente hacés?",
      [
        "Bastante similar a la habitual.",
        "A veces me costó empezar.",
        "Con frecuencia tuve poca motivación.",
        "Me costó mucho comenzar incluso actividades importantes."
      ]
    ),

    makeQuestion(
      "¿Cómo te sentiste respecto de tus logros recientes?",
      [
        "Pude reconocer algunas cosas que hice bien.",
        "A veces me costó valorar mis logros.",
        "Tendí a pensar más en lo que hice mal.",
        "Me costó reconocer algo positivo en lo que hice."
      ]
    ),

    makeQuestion(
      "¿Qué tan fácil te resultó disfrutar momentos con otras personas?",
      [
        "Generalmente pude disfrutarlos.",
        "Algunos días me costó.",
        "Muchas veces preferí aislarme o estar solo.",
        "Me costó bastante sentirme conectado durante esos momentos."
      ]
    ),

    makeQuestion(
      "Cuando algo pequeño sale mal, ¿cómo suele afectar tu día?",
      [
        "Puedo seguir adelante.",
        "Me molesta durante un rato.",
        "Puede afectar mi ánimo durante bastante tiempo.",
        "Puede hacer que pierda las ganas de continuar con otras actividades."
      ]
    ),

    makeQuestion(
      "¿Cómo estuvo tu capacidad para tomar decisiones cotidianas?",
      [
        "Similar a la habitual.",
        "A veces me costó decidir.",
        "Frecuentemente dudé mucho.",
        "Incluso decisiones simples pudieron parecerme difíciles."
      ]
    ),

    makeQuestion(
      "¿Cómo fue tu relación con las cosas que normalmente te entusiasman?",
      [
        "Seguí disfrutándolas.",
        "Algunas veces me entusiasmaron menos.",
        "Me entusiasmaron bastante menos.",
        "Muchas cosas dejaron de generarme entusiasmo."
      ]
    ),

    makeQuestion(
      "Cuando pensás en las próximas semanas, ¿cómo te resulta imaginar tus actividades?",
      [
        "Puedo pensar en cosas que quiero hacer.",
        "Tengo cierta incertidumbre.",
        "Me cuesta imaginarme con entusiasmo.",
        "Me resulta difícil encontrar motivación para pensar en el futuro cercano."
      ]
    ),

    makeQuestion(
      "¿Qué tan fácil te resulta reconocer algo que te hizo bien durante el día?",
      [
        "Bastante fácil.",
        "Depende del día.",
        "Me cuesta encontrarlo algunos días.",
        "Me resulta difícil identificar momentos positivos."
      ]
    ),

    makeQuestion(
      "Si alguien cercano nota que no estás como siempre, ¿qué suele pasar?",
      [
        "Puedo hablar sobre lo que me pasa.",
        "A veces me cuesta explicarlo.",
        "Prefiero guardármelo muchas veces.",
        "Me resulta muy difícil hablar sobre cómo me siento."
      ]
    )
  ],

  [
    axis(
      "Bienestar estable",
      "Un estado emocional relativamente equilibrado",
      "Tus respuestas sugieren que durante el período considerado pudiste mantener un estado de ánimo y una energía relativamente habituales.",
      "Reconocer lo que te hace bien y mantener actividades significativas.",
      "Incluso en etapas positivas pueden aparecer días difíciles.",
      "Los vínculos de confianza pueden contribuir al bienestar.",
      "Seguí prestando atención a tus necesidades y rutinas."
    ),

    axis(
      "Variaciones emocionales",
      "Días buenos y días difíciles",
      "Tus respuestas reflejan algunos cambios en tu estado de ánimo, energía o interés.",
      "Reconocer tus cambios y buscar momentos de descanso.",
      "Las exigencias cotidianas pueden influir en cómo te sentís.",
      "Compartir cómo estás puede ayudarte a sentirte acompañado.",
      "Identificar qué situaciones influyen en tu ánimo puede ser útil."
    ),

    axis(
      "Bienestar en tensión",
      "Una etapa que merece atención",
      "Tus respuestas muestran varias experiencias de cansancio, desánimo o menor interés durante el período considerado.",
      "Poder reconocer lo que estás atravesando es importante.",
      "Puede resultar difícil sostener las actividades cuando el bienestar disminuye.",
      "Hablar con alguien de confianza puede ayudar.",
      "Si esto persiste o afecta tu vida diaria, sería importante conversar con un adulto de confianza y un profesional."
    ),

    axis(
      "Necesidad de acompañamiento",
      "Priorizar tu bienestar",
      "Tus respuestas indican que varias áreas de tu bienestar podrían estar siendo difíciles últimamente. Este resultado no identifica una causa ni establece un diagnóstico.",
      "Reconocer que necesitás apoyo es un paso valioso.",
      "No tenés que resolver todo por tu cuenta.",
      "El acompañamiento de personas confiables puede ser importante.",
      "Si te sentís así con frecuencia, hablá con un adulto de confianza o un profesional de salud."
    )
  ]
);

/* =====================================================
   TEST 14 — ANSIEDAD
===================================================== */

const testAnsiedad = makeNewTest(
  "ansiedad",
  "Ansiedad",
  "Explorá cómo vivís las preocupaciones y las situaciones de tensión.",
  "〰",
  "Una exploración de preocupaciones, tensión y respuestas ante la incertidumbre. No diagnostica trastornos de ansiedad.",

  [
    makeQuestion(
      "Cuando tenés algo importante por hacer, ¿qué suele pasar?",
      [
        "Puedo organizarme y ocuparme cuando corresponde.",
        "Lo pienso algunas veces antes de hacerlo.",
        "Me preocupa bastante incluso con anticipación.",
        "Me cuesta dejar de pensar en lo que podría salir mal."
      ]
    ),

    makeQuestion(
      "Cuando no sabés qué va a pasar, ¿cómo te sentís?",
      [
        "Puedo tolerar la incertidumbre.",
        "Me genera cierta inquietud.",
        "Me cuesta bastante no tener respuestas.",
        "La incertidumbre puede ocupar gran parte de mis pensamientos."
      ]
    ),

    makeQuestion(
      "Cuando cometés un error, ¿qué suele pasar?",
      [
        "Lo acepto y busco corregirlo.",
        "Me queda dando vueltas durante un rato.",
        "Pienso mucho en sus posibles consecuencias.",
        "Me cuesta dejar de preocuparme por eso."
      ]
    ),

    makeQuestion(
      "Cuando tenés muchas cosas pendientes, ¿cómo reaccionás?",
      [
        "Las organizo y avanzo de a poco.",
        "Me inquieto, pero puedo continuar.",
        "Me cuesta ordenar mis pensamientos.",
        "Siento que las preocupaciones me dificultan empezar."
      ]
    ),

    makeQuestion(
      "¿Cómo te resulta descansar cuando tenés preocupaciones?",
      [
        "Generalmente puedo desconectarme.",
        "A veces sigo pensando en mis pendientes.",
        "Me cuesta dejar de pensar en algunas situaciones.",
        "Las preocupaciones suelen interferir con mi descanso."
      ]
    ),

    makeQuestion(
      "Cuando estás en una situación nueva, ¿qué suele ocurrir?",
      [
        "Me adapto y observo qué sucede.",
        "Siento nervios al principio.",
        "Me preocupo bastante por cómo saldrá todo.",
        "La anticipación puede hacer que me cueste disfrutar la experiencia."
      ]
    ),

    makeQuestion(
      "¿Qué hacés cuando notás que estás preocupado?",
      [
        "Identifico el problema y pienso qué puedo hacer.",
        "Intento distraerme un rato.",
        "Busco hablarlo con alguien.",
        "A veces me cuesta encontrar una manera de manejarlo."
      ]
    ),

    makeQuestion(
      "Cuando alguien tarda en responderte, ¿qué suele pasar por tu cabeza?",
      [
        "Supongo que probablemente está ocupado.",
        "Me pregunto qué estará haciendo.",
        "Empiezo a imaginar distintas posibilidades.",
        "Me cuesta dejar de pensar que algo podría estar mal."
      ]
    ),

    makeQuestion(
      "Antes de una situación importante, ¿qué suele ocupar más tu mente?",
      [
        "Lo que necesito preparar.",
        "Las diferentes posibilidades.",
        "Cómo me voy a sentir y cómo reaccionarán los demás.",
        "Todo lo que podría salir mal."
      ]
    ),

    makeQuestion(
      "Cuando tenés que esperar una respuesta importante, ¿cómo te resulta?",
      [
        "Puedo continuar con otras cosas.",
        "Me acuerdo de vez en cuando.",
        "Me cuesta concentrarme en otra cosa.",
        "Puedo pensar constantemente en la respuesta."
      ]
    ),

    makeQuestion(
      "Si alguien te dice 'después hablamos', ¿cómo lo interpretás?",
      [
        "Espero a que llegue el momento.",
        "Me genera un poco de curiosidad.",
        "Empiezo a pensar qué podría querer decir.",
        "Puedo imaginar rápidamente que ocurrió algo malo."
      ]
    ),

    makeQuestion(
      "Cuando sentís una preocupación, ¿qué tan fácil te resulta dejarla para más tarde?",
      [
        "Bastante fácil.",
        "A veces puedo.",
        "Me cuesta bastante.",
        "Me resulta muy difícil."
      ]
    ),

    makeQuestion(
      "Cuando algo sale diferente de lo planeado, ¿qué suele pasar?",
      [
        "Busco adaptarme.",
        "Me incomoda al principio.",
        "Me cuesta reorganizarme.",
        "Me preocupa mucho no saber cómo terminará."
      ]
    ),

    makeQuestion(
      "¿Qué ocurre cuando una persona cercana está pasando por un problema?",
      [
        "Intento ayudar cuando puedo.",
        "Me preocupa, pero trato de mantenerme tranquilo.",
        "Pienso mucho en lo que podría pasarle.",
        "Me cuesta dejar de preocuparme hasta saber que está bien."
      ]
    ),

    makeQuestion(
      "Cuando pensás en una situación futura, ¿qué tendencia aparece más?",
      [
        "Pienso en lo que puedo hacer ahora.",
        "Imagino distintas posibilidades.",
        "Pienso en cómo podría sentirme.",
        "Me concentro en todo lo que podría salir mal."
      ]
    ),

    makeQuestion(
      "¿Qué tan fácil te resulta desconectarte de una preocupación después de resolver el problema?",
      [
        "Bastante fácil.",
        "Necesito un rato.",
        "Puedo seguir pensando en lo ocurrido.",
        "Me cuesta mucho dejarlo atrás."
      ]
    )
  ],

  [
    axis(
      "Tranquilidad flexible",
      "Adaptarte ante la incertidumbre",
      "Tus respuestas sugieren que generalmente podés manejar las preocupaciones sin que ocupen demasiado espacio.",
      "Flexibilidad, organización y perspectiva.",
      "Algunas situaciones inesperadas también pueden generarte tensión.",
      "Podés conversar sobre tus inquietudes.",
      "Seguí desarrollando estrategias que te ayuden a mantener el equilibrio."
    ),

    axis(
      "Preocupación ocasional",
      "Una inquietud que aparece por momentos",
      "Experimentás preocupación en algunas situaciones, aunque generalmente podés continuar con tus actividades.",
      "Reconocimiento de situaciones que generan tensión.",
      "Podrías anticipar problemas que todavía no ocurrieron.",
      "Compartir tus inquietudes puede ayudarte a ordenar lo que pensás.",
      "Diferenciar lo que podés controlar de lo que no puede ayudarte."
    ),

    axis(
      "Preocupación frecuente",
      "Pensamientos que ocupan espacio",
      "Tus respuestas sugieren que algunas preocupaciones aparecen con frecuencia y pueden interferir con tu concentración o descanso.",
      "Capacidad para identificar tus preocupaciones.",
      "Podrías dedicar mucho tiempo a anticipar resultados negativos.",
      "Hablar con alguien de confianza puede ayudarte a ordenar ideas.",
      "Si estas preocupaciones persisten, buscá acompañamiento de un adulto de confianza o profesional."
    ),

    axis(
      "Tensión elevada",
      "Necesidad de herramientas y apoyo",
      "Tus respuestas muestran que la preocupación puede estar ocupando un lugar importante en tu vida cotidiana. Este resultado no es un diagnóstico.",
      "Reconocer lo que te pasa es un primer paso.",
      "Puede ser difícil desconectarte de las preocupaciones.",
      "El acompañamiento y la escucha pueden ser importantes.",
      "Si afecta tu descanso, tus estudios o tus actividades, hablá con un adulto de confianza y un profesional."
    )
  ]
);

/* =====================================================
   CATÁLOGO COMPLETO
===================================================== */

const newTests = [
  testTDAH,
  testIra,
  testPareja,
  testPsicopatia,
  testAmor,
  testDepresion,
  testAnsiedad
];

const allTests = [
  ...categories,
  ...newTests
];

/* =====================================================
   ESTILOS DEL CATÁLOGO
   NO CAMBIA LA ESTÉTICA ORIGINAL
===================================================== */

const extraStyles = document.createElement("style");

extraStyles.textContent = `

  .category-section {
    width: 100%;
    max-width: none;
    margin: 65px auto;
    padding: 0 3%;
    box-sizing: border-box;
  }

  .category-section > div:first-child {
    margin-bottom: 35px;
  }

  .category-section h2 {
    font-size: clamp(30px, 3vw, 42px);
    margin: 12px 0;
  }

  .category-section .report-intro {
    max-width: 850px;
    line-height: 1.7;
  }

  .category-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 22px;
    row-gap: 25px;
    width: 100%;
    margin-top: 35px;
  }

  .category-card {
    width: 100%;
    min-width: 0;
    min-height: 245px;
    padding: 28px 24px;
    box-sizing: border-box;

    border: 1px solid #e8e1ed;
    border-radius: 22px;
    background: white;

    text-align: left;
    cursor: pointer;
    color: #25213b;

    transition: transform .2s, box-shadow .2s;
  }

  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(40, 25, 60, .09);
  }

  .category-card h3 {
    font-size: 21px;
    line-height: 1.35;
    margin: 15px 0 10px;
  }

  .category-card p {
    font-size: 15px;
    line-height: 1.6;
    color: #77718a;
  }

  .category-card span {
    display: inline-block;
    margin-top: 18px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .category-icon {
    font-size: 34px;
  }

  @media (max-width: 1250px) {
    .category-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (max-width: 950px) {
    .category-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 700px) {
    .category-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .category-card {
      min-height: 220px;
      padding: 22px;
    }
  }

  @media (max-width: 450px) {
    .category-grid {
      grid-template-columns: 1fr;
    }
  }

/* =====================================================
   GRÁFICO RADAR
===================================================== */

.radar-container {
  width: 100%;
  max-width: 850px;
  margin: 45px auto 55px;
  padding: 30px;
  background: white;
  border: 1px solid #e8e1ed;
  border-radius: 24px;
  box-sizing: border-box;
}

.radar-heading {
  text-align: center;
  margin-bottom: 15px;
}

.radar-heading h3 {
  font-size: 25px;
  color: #28243a;
  margin: 10px 0;
}

.radar-heading p {
  color: #77718a;
  font-size: 14px;
  line-height: 1.6;
}

.radar-chart {
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
}

.radar-chart svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.radar-label {
  font-size: 11px;
  font-weight: 600;
  fill: #51476b;
}

.radar-note {
  color: #858095;
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
  margin-top: 15px;
}

@media (max-width: 600px) {
  .radar-container {
    padding: 18px 10px;
  }

  .radar-label {
    font-size: 10px;
  }
}

`;

document.head.appendChild(extraStyles);

/* =====================================================
   PANTALLAS
===================================================== */

function show(name) {
  screens.forEach(id => {
    const screen = $("#" + id);

    if (screen) {
      screen.classList.toggle("hidden", id !== name);
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =====================================================
   CATÁLOGO EN INICIO
===================================================== */

function createCatalog() {
  const home = $("#home");

  if (!home) {
    console.error("No se encontró el elemento #home");
    return;
  }

  const oldCatalog = $("#mente-catalog");

  if (oldCatalog) {
    oldCatalog.remove();
  }

  const section = document.createElement("section");

  section.id = "mente-catalog";
  section.className = "category-section";

  section.innerHTML = `
    <div>
      <p class="eyebrow">EXPLORÁ TU MUNDO INTERIOR</p>

      <h2>Conocete desde distintas perspectivas</h2>

      <p class="report-intro">
        Elegí un test y descubrí qué revela tu manera de pensar,
        decidir, sentir y relacionarte.
      </p>
    </div>

    <div class="category-grid">

      ${allTests.map(test => `
        <button
          class="category-card"
          type="button"
          data-category="${test.id}">

          <div class="category-icon">
            ${test.icon}
          </div>

          <h3>
            ${test.name}
          </h3>

          <p>
            ${test.subtitle}
          </p>

          <span>
            REALIZAR TEST →
          </span>

        </button>
      `).join("")}

    </div>
  `;

  home.appendChild(section);

  section
    .querySelectorAll("[data-category]")
    .forEach(button => {

      button.addEventListener("click", () => {
        startTest(button.dataset.category);
      });

    });
}

/* =====================================================
   INICIAR TEST
===================================================== */

function startTest(testId) {

  const selected = allTests.find(
    item => item.id === testId
  );

  if (!selected) {
    console.error("No se encontró el test:", testId);
    return;
  }

  if (
    !Array.isArray(selected.questions) ||
    selected.questions.length !== 16
  ) {
    console.error(
      `El test "${selected.name}" tiene ${selected.questions?.length || 0} preguntas en lugar de 16.`
    );

    return;
  }

  state.category = selected;
  state.index = 0;
  state.answers = [];
  state.questions = [...selected.questions];

  const kicker = $("#test-kicker");
  const label = $("#test-label");

  if (kicker) {
    kicker.textContent = selected.name.toUpperCase();
  }

  if (label) {
    label.textContent = selected.name.toUpperCase();
  }

  show("test");

  renderQuestion();
}


/* =====================================================
   SEGURIDAD DE TEXTO
===================================================== */

function escapeHTML(value) {

  return String(value).replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );

}

/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function renderQuestion() {

  const question = state.questions[state.index];
  const total = state.questions.length;

  if (!question) {
    return;
  }

  const count = $("#test-count");

  if (count) {
    count.textContent =
      `${state.index + 1} / ${total}`;
  }

  const progress = $("#progress-bar");

  if (progress) {
    progress.style.width =
      `${((state.index + 1) / total) * 100}%`;
  }

  const questionElement = $("#question");

  if (questionElement) {
    questionElement.textContent =
      question.prompt;
  }

  const help = $("#question-help");

  if (help) {
    help.textContent =
      "No hay respuestas correctas o incorrectas. Elegí la opción que mejor representa tu experiencia.";
  }

  const visual = $("#visual");

  if (visual) {
    visual.innerHTML = `
      <div class="sequence sequence-text">
        <div class="cell sequence-prompt">
          Pregunta ${state.index + 1}
        </div>
      </div>
    `;
  }

  const options = $("#options");

  if (!options) {
    console.error("No se encontró #options en index.html");
    return;
  }

  options.className = "options text";

  options.innerHTML = question.options
    .map((option, index) => {

      const text =
        typeof option === "string"
          ? option
          : option.text;

      return `
        <button
          class="option"
          type="button"
          data-index="${index}">

          <span class="option-letter">
            ${String.fromCharCode(65 + index)}
          </span>

          <span>
            ${escapeHTML(text)}
          </span>

        </button>
      `;

    })
    .join("");
}


/* =====================================================
   GUARDAR RESPUESTAS
===================================================== */

const optionsContainer = $("#options");

if (optionsContainer) {

  optionsContainer.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(".option");

      if (!button || button.disabled) {
        return;
      }

      const chosen =
        Number(button.dataset.index);

      state.answers.push(chosen);

      optionsContainer
        .querySelectorAll("button")
        .forEach(option => {
          option.disabled = true;
        });

      button.classList.add("selected");

      setTimeout(() => {

        state.index++;

        if (
          state.index <
          state.questions.length
        ) {

          renderQuestion();

        } else {

          if (CREATOR_PREVIEW) {
           $("#result-content").innerHTML = buildReport();
show("result");
          } else {
            show("paywall");
          }

        }

      }, 250);

    }
  );

}
/* =====================================================
   CALCULAR PERFIL
===================================================== */


function calculateProfile() {
  const category = state.category;

  // Psicopatía: no se calcula un puntaje ni se asigna una etiqueta.
  if (category.id === "psicopatia") {
    return {
      total: state.answers.length,
      scoringType: "reflection"
    };
  }

  // Cuestionarios de experiencias y respuestas cotidianas.
  const frequencyTests = [
    "tdah",
    "ira",
    "depresion",
    "ansiedad"
  ];

  if (frequencyTests.includes(category.id)) {
    const rawScore = state.answers.reduce(
      (sum, answer) => sum + Number(answer),
      0
    );

    const maxScore = state.answers.length * 3;

    const percentage = maxScore > 0
      ? Math.round((rawScore / maxScore) * 100)
      : 0;

    return {
      rawScore,
      maxScore,
      percentage,
      total: state.answers.length,
      scoringType: "frequency"
    };
  }

  // Cuestionarios de preferencias y perfiles.
  const scores = [0, 0, 0, 0];

  state.answers.forEach(answer => {
    const index = Number(answer);

    if (index >= 0 && index < 4) {
      scores[index]++;
    }
  });

  const total = scores.reduce(
    (sum, score) => sum + score,
    0
  );

  const ranked = category.axes
    .map((item, index) => ({
      ...item,
      score: scores[index],
      index
    }))
    .sort((a, b) => b.score - a.score);

  return {
    scores,
    total,
    primary: ranked[0],
    secondary: ranked[1],
    scoringType: "profile"
  };
}


/* =====================================================
   GRÁFICO RADAR — MENTE+
   Se adapta automáticamente a los 14 tests.
===================================================== */


function buildRadarChart(category, scores, total) {
  if (!scores || !total || category.axes.length !== 4) {
    return "";
  }

  const centerX = 220;
  const centerY = 190;
  const radius = 125;

  const angles = [
    -Math.PI / 2,
    0,
    Math.PI / 2,
    Math.PI
  ];

  const values = scores.map(score =>
    Math.max(0, Math.min(100, (score / total) * 100))
  );

  function getPoint(angle, scale) {
    return {
      x: centerX + Math.cos(angle) * radius * scale,
      y: centerY + Math.sin(angle) * radius * scale
    };
  }

  function polygonPoints(scale) {
    return angles.map(angle => {
      const point = getPoint(angle, scale);
      return `${point.x},${point.y}`;
    }).join(" ");
  }

  const grid = [0.25, 0.5, 0.75, 1]
    .map(scale => `
      <polygon
        points="${polygonPoints(scale)}"
        fill="none"
        stroke="#ded6eb"
        stroke-width="1.2"
      />
    `).join("");

  const axesLines = angles.map(angle => {
    const point = getPoint(angle, 1);

    return `
      <line
        x1="${centerX}"
        y1="${centerY}"
        x2="${point.x}"
        y2="${point.y}"
        stroke="#ded6eb"
        stroke-width="1.2"
      />
    `;
  }).join("");

  const resultPoints = values.map((value, index) => {
    const point = getPoint(angles[index], value / 100);
    return `${point.x},${point.y}`;
  }).join(" ");

  const circles = values.map((value, index) => {
    const point = getPoint(angles[index], value / 100);

    return `
      <circle
        cx="${point.x}"
        cy="${point.y}"
        r="5"
        fill="#8067c7"
        stroke="white"
        stroke-width="2"
      />
    `;
  }).join("");

  const labels = category.axes.map((item, index) => {
    const point = getPoint(angles[index], 1.23);

    let anchor = "middle";

    if (index === 1) anchor = "start";
    if (index === 3) anchor = "end";

    return `
      <text
        x="${point.x}"
        y="${point.y}"
        text-anchor="${anchor}"
        dominant-baseline="middle"
        class="radar-label"
      >
        ${escapeHTML(item.name)}
      </text>
    `;
  }).join("");

  return `
    <div class="radar-container">

      <div class="radar-heading">
        <span class="eyebrow">TU PERFIL VISUAL</span>

        <h3>Mapa de tus tendencias</h3>

        <p>
          Cada punto representa la proporción de respuestas
          asociadas a una dimensión.
        </p>
      </div>

      <div class="radar-chart">
        <svg
          viewBox="0 0 440 380"
          role="img"
          aria-label="Gráfico de las cuatro dimensiones de tu perfil"
        >
          ${grid}
          ${axesLines}

          <polygon
            points="${resultPoints}"
            fill="rgba(128, 103, 199, 0.24)"
            stroke="#8067c7"
            stroke-width="3"
            stroke-linejoin="round"
          />

          ${circles}
          ${labels}
        </svg>
      </div>

      <p class="radar-note">
        El gráfico representa la distribución de tus respuestas.
        No mide capacidades ni características clínicas.
      </p>

    </div>
  `;
}

/* =====================================================
   INFORME PREMIUM
===================================================== */

/* =====================================================
   GRÁFICO RADAR — MENTE+
   Se adapta automáticamente a los 14 tests.
===================================================== */

function buildRadarChart(category, scores, total) {
  const centerX = 220;
  const centerY = 190;
  const radius = 125;

  const angles = [
    -Math.PI / 2,
    0,
    Math.PI / 2,
    Math.PI
  ];

  // Normaliza los valores respecto del máximo posible.
  const values = scores.map(score =>
    Math.max(0, Math.min(100, (score / total) * 100))
  );

  function getPoint(angle, scale) {
    return {
      x: centerX + Math.cos(angle) * radius * scale,
      y: centerY + Math.sin(angle) * radius * scale
    };
  }

  function polygonPoints(scale) {
    return angles.map(angle => {
      const point = getPoint(angle, scale);
      return `${point.x},${point.y}`;
    }).join(" ");
  }

  const grid = [0.25, 0.5, 0.75, 1]
    .map(scale => `
      <polygon
        points="${polygonPoints(scale)}"
        fill="none"
        stroke="#ded6eb"
        stroke-width="1.2"
      />
    `).join("");

  const axesLines = angles.map(angle => {
    const point = getPoint(angle, 1);

    return `
      <line
        x1="${centerX}"
        y1="${centerY}"
        x2="${point.x}"
        y2="${point.y}"
        stroke="#ded6eb"
        stroke-width="1.2"
      />
    `;
  }).join("");

  const resultPoints = values.map((value, index) => {
    const point = getPoint(
      angles[index],
      value / 100
    );

    return `${point.x},${point.y}`;
  }).join(" ");

  const circles = values.map((value, index) => {
    const point = getPoint(
      angles[index],
      value / 100
    );

    return `
      <circle
        cx="${point.x}"
        cy="${point.y}"
        r="5"
        fill="#8067c7"
        stroke="white"
        stroke-width="2"
      />
    `;
  }).join("");

  const labels = category.axes.map((item, index) => {
    const point = getPoint(angles[index], 1.23);

    let anchor = "middle";

    if (index === 1) anchor = "start";
    if (index === 3) anchor = "end";

    return `
      <text
        x="${point.x}"
        y="${point.y}"
        text-anchor="${anchor}"
        dominant-baseline="middle"
        class="radar-label"
      >
        ${escapeHTML(item.name)}
      </text>
    `;
  }).join("");

  return `
    <div class="radar-container">

      <div class="radar-heading">
        <span class="eyebrow">TU PERFIL VISUAL</span>
        <h3>Mapa de tus tendencias</h3>
        <p>
          Cada punto representa la proporción de respuestas
          asociadas a una dimensión.
        </p>
      </div>

      <div class="radar-chart">

        <svg
          viewBox="0 0 440 380"
          role="img"
          aria-label="Gráfico radar de las cuatro dimensiones de tu resultado"
        >

          ${grid}
          ${axesLines}

          <polygon
            points="${resultPoints}"
            fill="rgba(128, 103, 199, 0.24)"
            stroke="#8067c7"
            stroke-width="3"
            stroke-linejoin="round"
          />

          ${circles}
          ${labels}

        </svg>

      </div>

      <p class="radar-note">
        Los valores representan la distribución de tus respuestas
        y no una medida clínica ni una puntuación de capacidad.
      </p>

    </div>
  `;
}


function buildReport() {
  const category = state.category;
  const profile = calculateProfile();
  const safe = escapeHTML;

  const isProfile = profile.scoringType === "profile";
  const isFrequency = profile.scoringType === "frequency";
  const isReflection = profile.scoringType === "reflection";

  let primary = null;
  let secondary = null;
  let radarChart = "";
  let distribution = "";
  let resultTitle = "";
  let resultSubtitle = "";
  let introduction = "";
  let mainAnalysis = "";
  let strengthsAnalysis = "";
  let challengeAnalysis = "";
  let relationshipAnalysis = "";
  let secondaryAnalysis = "";
  let growthAnalysis = "";
  let resultVisualization = "";

  /* =========================================
     TESTS DE PERFIL
  ========================================= */

  if (isProfile) {
    primary = profile.primary;
    secondary = profile.secondary;

    const percentages = profile.scores.map(score =>
      Math.round((score / profile.total) * 100)
    );

    const tie = profile.scores.filter(
      score => score === primary.score
    ).length > 1;

    resultTitle = primary.name;
    resultSubtitle = primary.short;

    introduction = tie
      ? "Tus respuestas muestran una combinación de distintas tendencias. No existe una única característica que represente toda tu manera de actuar."
      : `En este cuestionario apareció una tendencia predominante: ${primary.name.toLowerCase()}. Esto representa tus preferencias dentro de este ejercicio, no una definición de tu personalidad.`;

    mainAnalysis = `
      <p>${safe(primary.description)}</p>
      <p>Esta tendencia puede influir en la manera en que interpretás situaciones, organizás tus pensamientos y elegís cómo responder.</p>
      <p>Podés reconocer esta característica en algunas experiencias cotidianas, aunque no necesariamente aparezca en todos los ámbitos de tu vida.</p>
    `;

    strengthsAnalysis = `
      <p>${safe(primary.strengths)}</p>
      <p>Estas características pueden convertirse en recursos importantes cuando las reconocés y aprendés a utilizarlas conscientemente.</p>
    `;

    challengeAnalysis = `
      <p>${safe(primary.challenge)}</p>
      <p>Reconocer una dificultad no significa que haya algo malo en vos. Una misma característica puede ser útil en determinadas circunstancias y necesitar equilibrio en otras.</p>
    `;

    relationshipAnalysis = `
      <p>${safe(primary.relationships)}</p>
      <p>En los vínculos es importante que exista reciprocidad, respeto y espacio para expresar las necesidades propias y ajenas.</p>
    `;

    secondaryAnalysis = `
      <p>Además de tu tendencia principal, aparece otra dimensión:</p>
      <h4>${safe(secondary.name)}</h4>
      <p>${safe(secondary.description)}</p>
      <p>Esta combinación muestra que tu manera de actuar puede variar según la situación y el contexto.</p>
    `;

    growthAnalysis = `
      <p>${safe(primary.growth)}</p>
      <p>El crecimiento personal no consiste en convertirse en alguien completamente diferente. Muchas veces comienza cuando reconocemos nuestras preferencias y descubrimos nuevas maneras de responder.</p>
    `;

    radarChart = buildRadarChart(
      category,
      profile.scores,
      profile.total
    );

    distribution = category.axes.map((item, index) => `
      <article class="report-card">
        <h3>${safe(item.name)}</h3>
        <p>${safe(item.short)}</p>

        <div class="profile-meter">
          <span style="width:${percentages[index]}%"></span>
        </div>

        <strong>${percentages[index]}%</strong>

        <p>
          ${profile.scores[index]} de ${profile.total} respuestas
        </p>
      </article>
    `).join("");

    resultVisualization = `
      <section class="report-section">
        <h3>06. Tu mapa de tendencias</h3>

        <p>
          Esta distribución muestra cómo se repartieron tus respuestas
          entre las cuatro dimensiones del cuestionario.
        </p>

        <div class="report-grid">
          ${distribution}
        </div>

        <p>
          Los porcentajes representan la distribución de respuestas,
          no el porcentaje de una característica de tu personalidad.
        </p>
      </section>
    `;
  }

  /* =========================================
     TESTS DE EXPERIENCIAS Y FRECUENCIA
  ========================================= */

  if (isFrequency) {
    const percentage = profile.percentage;

    let interpretation;

    if (percentage <= 25) {
      interpretation = "En este cuestionario predominan las opciones de menor puntuación.";
    } else if (percentage <= 50) {
      interpretation = "Tus respuestas combinan opciones de menor y mayor puntuación.";
    } else if (percentage <= 75) {
      interpretation = "En este cuestionario aparecen varias respuestas de puntuación elevada.";
    } else {
      interpretation = "En este cuestionario predominan las opciones de mayor puntuación.";
    }

    resultTitle = "Tu resultado general";
    resultSubtitle = "Una orientación para reflexionar sobre tus respuestas";

    introduction = interpretation;

    mainAnalysis = `
      <p>
        El resultado resume las opciones que seleccionaste en las
        ${profile.total} preguntas.
      </p>

      <p>
        El porcentaje indica la proporción de puntos obtenidos
        respecto del máximo posible en este cuestionario.
      </p>

      <p>
        No representa una probabilidad, un diagnóstico ni una medida
        clínica de tu estado de salud.
      </p>
    `;

    strengthsAnalysis = `
      <p>
        Responder con sinceridad puede ayudarte a identificar
        experiencias y situaciones que vale la pena comprender mejor.
      </p>

      <p>
        Reconocer tus propias experiencias es un punto de partida
        para descubrir qué herramientas podrían resultarte útiles.
      </p>
    `;

    challengeAnalysis = `
      <p>
        Algunas situaciones cotidianas pueden resultar más difíciles
        que otras. Es importante observar cuándo aparecen esas
        dificultades y cómo influyen en tus actividades.
      </p>

      <p>
        Este resultado no permite determinar por sí solo por qué
        experimentás determinadas situaciones.
      </p>
    `;

    relationshipAnalysis = `
      <p>
        Hablar con personas de confianza sobre lo que te pasa puede
        ayudarte a comprender mejor tus experiencias.
      </p>

      <p>
        No tenés que afrontar todas las dificultades sin acompañamiento.
      </p>
    `;

    secondaryAnalysis = `
      <p>
        Este cuestionario presenta un resultado general y no establece
        una segunda dimensión de personalidad.
      </p>
    `;

    growthAnalysis = `
      <p>
        Podés observar qué situaciones influyen en tus experiencias,
        qué recursos te ayudan y qué cambios pequeños podrían
        facilitar tus actividades cotidianas.
      </p>
    `;

    resultVisualization = `
      <section class="report-section">

        <h3>06. Tu resultado general</h3>

        <p>
          Obtuviste ${profile.rawScore} puntos de un máximo de
          ${profile.maxScore}.
        </p>

        <div class="profile-meter">
          <span style="width:${percentage}%"></span>
        </div>

        <h2 style="margin-top:18px;color:#8067c7">
          ${percentage}%
        </h2>

        <p>
          ${safe(interpretation)}
        </p>

        <p>
          Este porcentaje es un cálculo interno de las respuestas
          del cuestionario. Sus rangos son orientativos y no están
          validados clínicamente.
        </p>

      </section>
    `;
  }

  /* =========================================
     TEST DE PSICOPATÍA
  ========================================= */

  if (isReflection) {
    resultTitle = "Una reflexión sobre tus respuestas";
    resultSubtitle = "Empatía, responsabilidad y relaciones";

    introduction = `
      Este cuestionario propone reflexionar sobre algunas actitudes
      interpersonales. No mide psicopatía ni permite determinar
      características clínicas de una persona.
    `;

    mainAnalysis = `
      <p>
        Las respuestas permiten pensar en cómo interpretás situaciones
        sociales, cómo asumís compromisos y cómo considerás las
        perspectivas de otras personas.
      </p>

      <p>
        Ninguna respuesta aislada permite definir tu personalidad
        ni establecer una etiqueta.
      </p>
    `;

    strengthsAnalysis = `
      <p>
        La reflexión sobre tus decisiones, el respeto por los límites
        ajenos y la disposición a aprender son aspectos que pueden
        desarrollarse con el tiempo.
      </p>
    `;

    challengeAnalysis = `
      <p>
        En las relaciones pueden aparecer desacuerdos, errores y
        diferentes necesidades. Aprender a escuchar, comunicarte
        y reconocer responsabilidades puede ayudar a construir
        vínculos respetuosos.
      </p>
    `;

    relationshipAnalysis = `
      <p>
        Los vínculos saludables requieren respeto mutuo, comunicación,
        consideración y límites claros.
      </p>
    `;

    secondaryAnalysis = `
      <p>
        No se calcula una segunda tendencia ni se asigna un perfil
        de psicopatía. Este cuestionario no tiene capacidad para
        identificar ese tipo de condición.
      </p>
    `;

    growthAnalysis = `
      <p>
        Podés utilizar este ejercicio para pensar cómo escuchás,
        cómo resolvés desacuerdos y cómo respondés cuando tus
        decisiones afectan a otras personas.
      </p>
    `;

    resultVisualization = `
      <section class="report-section">

        <h3>06. Una mirada a tus respuestas</h3>

        <p>
          No se asigna una puntuación de psicopatía porque este
          cuestionario no es una herramienta validada para medirla.
        </p>

        <p>
          Las respuestas pueden servir como punto de partida para
          reflexionar sobre tus relaciones y decisiones.
        </p>

      </section>
    `;
  }

  /* =========================================
     PREGUNTAS DE REFLEXIÓN
  ========================================= */

  const reflectionQuestions = [
    "¿En qué situaciones reconocés estas características?",
    "¿Qué aspecto de tus respuestas te llamó más la atención?",
    "¿Qué te gustaría comprender mejor sobre vos?",
    "¿Qué recursos personales podrías desarrollar?",
    "¿Qué pequeño cambio te gustaría intentar?"
  ];

  const reflectionHTML = reflectionQuestions.map(
    (question, index) => `
      <article class="reflection-question">
        <span>REFLEXIÓN ${index + 1}</span>
        <p>${safe(question)}</p>
      </article>
    `
  ).join("");

  /* =========================================
     EJERCICIO
  ========================================= */

  const exercise = `
    <h4>Un ejercicio para conocerte mejor</h4>

    <p>
      Durante los próximos días, elegí una situación cotidiana
      que te haya generado una reacción importante.
    </p>

    <p>Después, intentá responder estas preguntas:</p>

    <ol>
      <li>¿Qué ocurrió y cómo interpreté la situación?</li>
      <li>¿Qué hice y qué necesitaba en ese momento?</li>
      <li>¿Hay otra manera de responder que me gustaría intentar?</li>
    </ol>

    <p>
      El objetivo no es juzgar tus decisiones, sino comprender
      mejor tus experiencias.
    </p>
  `;

  /* =========================================
     CIERRE
  ========================================= */

  const closing = `
    <p>
      Un resultado no puede contener toda tu historia.
    </p>

    <p>
      Tus respuestas muestran algunas de tus preferencias y
      experiencias actuales, pero no definen quién sos.
    </p>

    <p>
      No necesitás encajar perfectamente en una descripción.
      Conocerte es un proceso que se construye con tiempo,
      curiosidad y honestidad.
    </p>

    <p>
      <strong>
        No sos solamente el resultado de un test.
        Sos una persona en constante construcción.
      </strong>
    </p>
  `;

  /* =========================================
     AVISO
  ========================================= */

  const disclaimer = `
    <div class="result-disclaimer">

      <strong>Sobre este informe</strong>

      <p>
        MENTE+ ofrece experiencias recreativas de reflexión
        y autoconocimiento. Sus cuestionarios no son instrumentos
        psicométricos validados y sus resultados no constituyen
        diagnósticos ni evaluaciones clínicas.
      </p>

      <p>
        En temas relacionados con salud mental, atención y
        comportamiento, solamente un profesional cualificado
        puede realizar una evaluación adecuada.
      </p>

      <p>
        Ninguna puntuación define tu identidad ni determina tu futuro.
      </p>

    </div>
  `;

  /* =========================================
     INFORME FINAL
  ========================================= */

  return `
    <div class="result-hero">

      <span class="eyebrow">
        INFORME MENTE+ · ${safe(category.name.toUpperCase())}
      </span>

      <h2>${safe(resultTitle)}</h2>

      <p><strong>${safe(resultSubtitle)}</strong></p>

      <p>${safe(introduction)}</p>

    </div>

    ${radarChart}

    <section class="report-section">
      <h3>01. Una mirada a tus respuestas</h3>

      <p>${safe(category.description)}</p>

      ${mainAnalysis}
    </section>

    <section class="report-section">
      <h3>02. Lo que podés observar</h3>

      <p>
        Este análisis se basa en tus respuestas a las
        ${profile.total} preguntas.
      </p>

      ${secondaryAnalysis}
    </section>

    <section class="report-section">
      <h3>03. Tus recursos personales</h3>
      ${strengthsAnalysis}
    </section>

    <section class="report-section">
      <h3>04. Aspectos que podrías explorar</h3>
      ${challengeAnalysis}
    </section>

    <section class="report-section">
      <h3>05. Tu manera de construir vínculos</h3>
      ${relationshipAnalysis}
    </section>

    ${resultVisualization}

    <section class="report-section">
      <h3>07. Una oportunidad para crecer</h3>

      ${growthAnalysis}
      ${exercise}
    </section>

    <section class="report-section">
      <h3>08. Preguntas para seguir descubriéndote</h3>

      <p>
        Podés utilizar estas preguntas como punto de partida
        para pensar sobre tus experiencias.
      </p>

      <div class="report-grid">
        ${reflectionHTML}
      </div>
    </section>

    <section class="report-section report-card">
      <h3>09. Un mensaje para llevarte</h3>
      ${closing}
    </section>

    ${disclaimer}

    <p class="report-footer">
      MENTE+ · AUTOCONOCIMIENTO Y REFLEXIÓN PERSONAL
    </p>
  `;
}

/* =====================================================
   DESBLOQUEAR RESULTADO
===================================================== */

/*
  IMPORTANTE:
  Este botón sigue siendo una DEMOSTRACIÓN.
  Todavía NO cobra dinero ni verifica pagos.
*/

const unlockButton = $("#unlock-btn");

if (unlockButton) {

  unlockButton.addEventListener(
    "click",
    () => {

      const resultContent =
        $("#result-content");

      if (resultContent) {
        resultContent.innerHTML =
          buildReport();
      }

      show("result");

    }
  );

}


/* =====================================================
   NAVEGACIÓN
===================================================== */

const backHome = $("#back-home");

if (backHome) {
  backHome.addEventListener(
    "click",
    () => show("home")
  );
}


const restart = $("#restart");

if (restart) {
  restart.addEventListener(
    "click",
    () => show("home")
  );
}


const restartFromPay =
  $("#restart-from-pay");

if (restartFromPay) {
  restartFromPay.addEventListener(
    "click",
    () => show("home")
  );
}


/* =====================================================
   BOTONES PRINCIPALES
===================================================== */

document
  .querySelectorAll("[data-start]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const categoryId =
          button.dataset.start === "iq"
            ? "inteligencia"
            : "personalidad";

        startTest(categoryId);

      }
    );

  });


/* =====================================================
   INICIO
===================================================== */

createCatalog();

show("home");


/* =====================================================
   LOGO → INICIO
===================================================== */

const brandLogo =
  document.querySelector(".brand");

if (brandLogo) {

  brandLogo.addEventListener(
    "click",
    event => {

      event.preventDefault();

      show("home");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}

// BOTÓN PARA VOLVER AL INICIO DESDE EL INFORME

const backResult = $("#back-home-result");

if (backResult) {
  backResult.addEventListener("click", () => {
    show("home");
  });
}