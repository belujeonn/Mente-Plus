
/* =====================================================
   MENTE+ — CATÁLOGO COMPLETO
   14 TESTS · INFORMES DETALLADOS
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

/* =====================================================
   PERFILES GENERALES
===================================================== */

function axis(name, short, description, strengths, challenge, relationships, growth) {
  return { name, short, description, strengths, challenge, relationships, growth };
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
      axis("El comunicador reflexivo", "Comprender antes de responder", "Tendés a escuchar, observar y pensar antes de expresar una opinión.", "Escucha atenta, reflexión y comprensión.", "Podrías guardar demasiado tiempo lo que pensás.", "Valorás las conversaciones sinceras y profundas.", "Compartir tus pensamientos con espontaneidad fortalece la comunicación."),
      axis("El vínculo espontáneo", "Conectar desde la autenticidad", "Buscás relaciones dinámicas, abiertas y naturales.", "Espontaneidad, iniciativa y apertura.", "Podrías perder interés cuando una relación requiere constancia.", "Valorás la libertad y la autenticidad.", "La profundidad también se construye sosteniendo conversaciones difíciles."),
      axis("El compañero", "Construir confianza y cercanía", "Prestás atención a las necesidades de las personas importantes para vos.", "Disponibilidad, sensibilidad y compromiso.", "Podrías sentir que tenés que solucionar los problemas ajenos.", "Buscás apoyo y cuidado mutuos.", "Aprender a poner límites permite construir vínculos equilibrados."),
      axis("El vínculo práctico", "Demostrar interés mediante acciones", "Expresás tu compromiso a través de hechos concretos.", "Responsabilidad, confiabilidad e iniciativa.", "Podrías concentrarte tanto en resolver problemas que olvides escuchar.", "Valorás la coherencia entre palabras y acciones.", "No todos necesitan soluciones: a veces escuchar es suficiente.")
    ]
  },
  {
    id: "inteligencia",
    name: "Inteligencia",
    subtitle: "Descubrí tus preferencias al pensar y resolver problemas.",
    icon: "◈",
    description: "Explora tus tendencias para procesar información, resolver desafíos e imaginar posibilidades.",
    axes: [
      axis("Pensamiento lógico", "La mente que identifica patrones", "Preferís organizar información, detectar relaciones y construir conclusiones.", "Análisis, razonamiento y precisión.", "Podrías buscar explicaciones lógicas en situaciones ambiguas.", "Disfrutás las conversaciones basadas en argumentos.", "Combinar análisis con intuición amplía tus perspectivas."),
      axis("Pensamiento creativo", "La mente que conecta ideas", "Tendés a encontrar relaciones inesperadas y soluciones diferentes.", "Originalidad, flexibilidad e imaginación.", "Podrías generar tantas alternativas que resulte difícil elegir.", "Aportás perspectivas diferentes.", "La creatividad se potencia cuando concretás tus ideas."),
      axis("Pensamiento interpersonal", "La mente que interpreta perspectivas", "Comprendés los problemas observando las perspectivas de las personas.", "Comprensión social, escucha y cooperación.", "Podrías dedicar demasiada atención a las opiniones externas.", "Te interesa comprender cómo piensan los demás.", "Equilibrar la comprensión ajena con tu propio criterio fortalece tus decisiones."),
      axis("Pensamiento aplicado", "La mente que resuelve", "Preferís aprender mediante la práctica y convertir información en soluciones útiles.", "Resolución de problemas y organización.", "Podrías descartar ideas sin utilidad inmediata.", "Valorás la colaboración y las soluciones concretas.", "Explorar ideas nuevas puede abrir oportunidades.")
    ]
  },
  {
    id: "valores",
    name: "Valores y decisiones",
    subtitle: "Descubrí qué principios suelen orientar tus elecciones.",
    icon: "⚖",
    description: "Una exploración de tus prioridades, criterios personales y manera de evaluar decisiones.",
    axes: [
      axis("El buscador de justicia", "La importancia de la coherencia", "Te importa que las decisiones tengan fundamentos y que las personas reciban un trato justo.", "Sentido de justicia, coherencia y responsabilidad.", "Podrías frustrarte ante situaciones sin soluciones completamente justas.", "Valorás la honestidad y el respeto.", "Comprender diferentes circunstancias ayuda a aplicar tus principios con flexibilidad."),
      axis("El idealista", "La búsqueda de posibilidades mejores", "Tus decisiones están influidas por aquello que considerás valioso para el futuro.", "Visión, imaginación e iniciativa.", "Podrías frustrarte cuando la realidad avanza lentamente.", "Valorás compartir proyectos e ideas.", "Transformar ideales en pasos concretos acerca tus objetivos."),
      axis("El solidario", "La importancia de las personas", "Evaluás las decisiones considerando cómo afectan a quienes participan.", "Empatía, solidaridad y compromiso.", "Podrías tener dificultades cuando tus necesidades entran en conflicto con las ajenas.", "Valorás la reciprocidad.", "Tus necesidades también merecen ser consideradas."),
      axis("El pragmático", "La importancia de lo posible", "Te interesa encontrar decisiones que puedan llevarse a la práctica.", "Responsabilidad, realismo y planificación.", "Podrías priorizar tanto lo inmediato que olvides el largo plazo.", "Valorás los compromisos claros.", "Considerar ideales y emociones enriquece tu criterio.")
    ]
  },
  {
    id: "emociones",
    name: "Desarrollo personal",
    subtitle: "Explorá cómo reconocés y gestionás tus experiencias.",
    icon: "☼",
    description: "Un cuestionario sobre tus tendencias para interpretar situaciones y responder ante desafíos.",
    axes: [
      axis("El observador interior", "Comprender lo que sentís", "Reflexionás sobre tus experiencias y buscás comprender tus reacciones.", "Autoconocimiento, reflexión y observación.", "Podrías pensar demasiado sin expresar lo que necesitás.", "Valorás la comunicación y la confianza.", "Expresar tus emociones también ayuda a comprenderlas."),
      axis("El adaptable", "Encontrar nuevas perspectivas", "Buscás alternativas cuando las circunstancias cambian.", "Flexibilidad, apertura y adaptación.", "Podrías cambiar de dirección antes de procesar una experiencia.", "Valorás los vínculos abiertos al diálogo.", "Reconocer lo que sentís complementa tu capacidad de adaptación."),
      axis("El sensible al entorno", "Comprender el impacto emocional", "Prestás atención a los climas emocionales y a cómo afectan a las personas.", "Empatía y sensibilidad interpersonal.", "Podrías sentirte responsable por emociones ajenas.", "Valorás la cercanía y el cuidado mutuo.", "Diferenciar tus emociones de las ajenas ayuda a cuidar tu bienestar."),
      axis("El orientado a la acción", "Transformar dificultades en pasos", "Buscás qué podés hacer para avanzar ante un desafío.", "Iniciativa, constancia y organización.", "Podrías intentar resolver rápidamente algo que necesita reflexión.", "Demostrás apoyo mediante acciones.", "No todas las experiencias necesitan una solución inmediata.")
    ]
  },
  {
    id: "arquetipos",
    name: "Arquetipos",
    subtitle: "Descubrí qué personaje simbólico representa tus tendencias.",
    icon: "✧",
    description: "Una experiencia narrativa que transforma tus respuestas en un arquetipo ficticio.",
    axes: [
      axis("El sabio", "El que busca comprender", "Representa la curiosidad, la observación y el deseo de encontrar sentido.", "Reflexión, conocimiento y análisis.", "Puede quedarse demasiado tiempo buscando respuestas.", "Valora las conversaciones profundas.", "El conocimiento adquiere otra dimensión cuando se convierte en experiencia."),
      axis("El explorador", "El que abre caminos", "Representa la independencia, la curiosidad y el deseo de descubrir.", "Apertura, creatividad y valentía para experimentar.", "Puede tener dificultades para permanecer en un camino.", "Valora la libertad y las experiencias compartidas.", "Elegir un destino no significa renunciar a descubrir."),
      axis("El guardián", "El que protege lo importante", "Representa la lealtad, el compromiso y la atención a lo valioso.", "Constancia, responsabilidad y sensibilidad.", "Puede asumir responsabilidades que no le corresponden.", "Valora la confianza y la reciprocidad.", "Cuidar también significa reconocer los propios límites."),
      axis("El creador", "El que transforma posibilidades", "Representa la imaginación y la capacidad de construir alternativas.", "Originalidad, iniciativa y flexibilidad.", "Puede entusiasmarse con muchas ideas sin concretarlas.", "Valora la autenticidad.", "La constancia permite transformar una idea en algo real.")
    ]
  },
  {
    id: "estilo",
    name: "Hábitos y estilo de vida",
    subtitle: "Descubrí cómo organizás tus actividades y objetivos.",
    icon: "⌁",
    description: "Una exploración de tus preferencias al planificar, aprender y organizar el tiempo.",
    axes: [
      axis("El planificador", "Organizar antes de avanzar", "Te resulta útil anticipar tareas y ordenar prioridades.", "Previsión, organización y constancia.", "Los cambios inesperados podrían frustrarte.", "Valorás la claridad y los acuerdos.", "Dejar espacios flexibles hace que tus planes sean sostenibles."),
      axis("El improvisador", "Adaptarse sobre la marcha", "Preferís conservar libertad para cambiar de dirección.", "Adaptabilidad y espontaneidad.", "Podrías postergar tareas que requieren continuidad.", "Disfrutás los planes espontáneos.", "Una estructura mínima ayuda a concretar tus ideas."),
      axis("El colaborador", "Organizarse con otras personas", "Tu experiencia mejora cuando compartís objetivos e intercambiás ideas.", "Cooperación, comunicación y escucha.", "Podrías depender demasiado de las decisiones del grupo.", "Valorás el trabajo compartido.", "Desarrollar autonomía también fortalece tu capacidad de colaborar."),
      axis("El ejecutor", "Avanzar mediante acciones", "Te motiva ver avances concretos y comprobar que cada paso te acerca al resultado.", "Iniciativa, constancia y sentido práctico.", "Podrías concentrarte demasiado en terminar tareas.", "Valorás la responsabilidad.", "Reconocer avances y revisar prioridades ayuda a sostener el ritmo.")
    ]
  }
];

/* =====================================================
   FUNCIONES PARA CREAR PREGUNTAS Y TESTS NUEVOS
===================================================== */

function makeQuestion(prompt, options) {
  return {
    prompt,
    options: options.map((text, score) => ({ text, score }))
  };
}

function makeNewTest(id, name, subtitle, icon, description, questions, axes) {
  return { id, name, subtitle, icon, description, questions, axes, custom: true };
}

/* =====================================================
   TEST 8 — TDAH
   Exploración de atención y organización.
   No diagnostica TDAH.
===================================================== */

const testTDAH = makeNewTest(
  "tdah",
  "TDAH",
  "Explorá tus hábitos de atención, organización y concentración.",
  "◎",
  "Este cuestionario explora experiencias cotidianas relacionadas con la atención, la organización y la actividad. No permite diagnosticar TDAH.",
  [
    makeQuestion("Cuando tenés que concentrarte en una tarea larga, ¿qué suele pasarte?", [
      "Mantengo la atención con bastante facilidad.",
      "Me distraigo ocasionalmente, pero puedo retomar.",
      "Me cuesta sostener la concentración durante bastante tiempo.",
      "Me resulta muy difícil mantener la atención, incluso cuando quiero hacerlo."
    ]),
    makeQuestion("Cuando tenés varias tareas pendientes, ¿cómo te organizás?", [
      "Las ordeno y avanzo de manera planificada.",
      "Me organizo, aunque a veces cambio el orden.",
      "Me cuesta decidir por dónde empezar.",
      "Me siento fácilmente desbordado y me cuesta comenzar."
    ]),
    makeQuestion("¿Qué suele pasar cuando alguien te explica varias instrucciones seguidas?", [
      "Puedo recordar y seguir todos los pasos.",
      "A veces necesito que repitan algún detalle.",
      "Suelo olvidar una parte de las instrucciones.",
      "Me cuesta retener varios pasos al mismo tiempo."
    ]),
    makeQuestion("Cuando estás haciendo algo y aparece una distracción, ¿qué ocurre?", [
      "Puedo ignorarla y continuar.",
      "Me distraigo un momento y vuelvo.",
      "Me cuesta bastante retomar lo que estaba haciendo.",
      "Frecuentemente termino dejando la tarea original."
    ]),
    makeQuestion("¿Cómo manejás los tiempos y las fechas de entrega?", [
      "Suelo anticiparme y cumplir los plazos.",
      "A veces calculo mal el tiempo.",
      "Con frecuencia termino organizándome a último momento.",
      "Me cuesta mucho calcular cuánto tiempo necesito."
    ]),
    makeQuestion("Cuando una actividad te interesa mucho, ¿cómo es tu concentración?", [
      "Mi concentración suele ser bastante estable.",
      "Me concentro más, aunque sigo teniendo distracciones.",
      "Puedo concentrarme intensamente y perder la noción del tiempo.",
      "Mi atención cambia mucho según el interés que me genera."
    ]),
    makeQuestion("¿Qué sucede cuando necesitás recordar algo importante?", [
      "Suelo recordarlo sin dificultad.",
      "Uso recordatorios algunas veces.",
      "Necesito anotarlo para no olvidarlo.",
      "Incluso con recordatorios puedo olvidarme de algunas cosas."
    ]),
    makeQuestion("Cuando tenés que esperar o permanecer en una actividad tranquila, ¿cómo te sentís?", [
      "Me resulta cómodo.",
      "A veces me inquieto un poco.",
      "Me cuesta permanecer tranquilo durante mucho tiempo.",
      "Siento una inquietud frecuente y necesito cambiar de actividad."
    ])
  ],
  [
    axis("Atención sostenida", "Concentrarte y mantener el foco", "Tus respuestas muestran una preferencia por mantener la atención y trabajar con continuidad.", "Concentración y seguimiento de tareas.", "Las actividades prolongadas pueden requerir estrategias específicas.", "Podés prestar atención a las conversaciones y actividades compartidas.", "Dividir tareas largas en etapas puede facilitar el trabajo."),
    axis("Atención flexible", "Alternar entre diferentes estímulos", "Tus respuestas sugieren que tu atención puede variar según el interés, el entorno y la actividad.", "Adaptabilidad y capacidad de cambiar de enfoque.", "Los cambios frecuentes pueden dificultar la continuidad.", "Podrías necesitar momentos de menor distracción.", "Identificar qué entornos te ayudan a concentrarte puede ser útil."),
    axis("Organización y planificación", "Ordenar tareas y prioridades", "Tus respuestas reflejan que la organización y la administración del tiempo pueden requerir esfuerzo adicional.", "Reconocer prioridades y buscar herramientas de organización.", "Recordar varios pendientes puede resultar agotador.", "Los acuerdos claros pueden facilitar actividades compartidas.", "Las listas breves y los recordatorios pueden ayudarte."),
    axis("Actividad e inquietud", "Regular tu nivel de actividad", "Tus respuestas muestran cómo experimentás la espera, la actividad y la necesidad de movimiento.", "Energía e iniciativa.", "Las situaciones que requieren permanecer quieto pueden resultar incómodas.", "Los entornos flexibles pueden favorecer tu participación.", "Incorporar pausas y movimiento puede ayudarte a organizar tus actividades.")
  ]
);

/* =====================================================
   TEST 9 — PROBLEMAS DE IRA
===================================================== */

const testIra = makeNewTest(
  "ira",
  "Problemas de ira",
  "Descubrí cómo reaccionás ante la frustración y los conflictos.",
  "⚡",
  "Una exploración de tus reacciones ante el enojo y tus estrategias para manejar desacuerdos. No es una evaluación clínica.",
  [
    makeQuestion("Cuando algo no sale como esperabas, ¿cómo reaccionás?", [
      "Lo acepto y busco otra solución.",
      "Me molesta, pero logro continuar.",
      "Me cuesta controlar mi frustración.",
      "La frustración suele dominar mi reacción."
    ]),
    makeQuestion("Cuando alguien te lleva la contra, ¿qué suele pasar?", [
      "Escucho su punto de vista.",
      "Me incomoda, pero intento conversar.",
      "Me cuesta evitar una discusión.",
      "Reacciono de manera impulsiva."
    ]),
    makeQuestion("¿Cuánto tiempo tardás en recuperar la calma después de un desacuerdo?", [
      "Generalmente poco tiempo.",
      "Depende de la situación.",
      "A veces necesito bastante tiempo.",
      "Puedo quedarme pensando en el conflicto durante mucho tiempo."
    ]),
    makeQuestion("Cuando estás enojado, ¿qué te resulta más difícil?", [
      "Generalmente puedo identificar lo que necesito.",
      "A veces me cuesta expresarlo.",
      "Me cuesta explicar lo que me pasa sin discutir.",
      "Me resulta muy difícil pensar con claridad en ese momento."
    ]),
    makeQuestion("Si alguien te hace una crítica, ¿cómo la recibís?", [
      "Intento evaluar si tiene fundamento.",
      "Me molesta al principio, pero puedo reflexionar.",
      "Suelo tomarla de manera personal.",
      "Me cuesta mucho escucharla sin reaccionar."
    ]),
    makeQuestion("Cuando tenés un problema con alguien, ¿qué preferís hacer?", [
      "Conversarlo con tranquilidad.",
      "Esperar un momento y después hablar.",
      "A veces evito el tema hasta sentirme preparado.",
      "Me cuesta encontrar una manera tranquila de resolverlo."
    ]),
    makeQuestion("¿Qué suele ayudarte a recuperar la calma?", [
      "Reflexionar y buscar una solución.",
      "Tomarme un momento a solas.",
      "Hablar con alguien de confianza.",
      "Todavía me cuesta encontrar algo que me ayude."
    ])
  ],
  [
    axis("Respuesta reflexiva", "Pensar antes de reaccionar", "Solés contar con recursos para reconocer el enojo y responder de manera deliberada.", "Autocontrol, reflexión y comunicación.", "Podrías minimizar lo que te molesta para evitar conflictos.", "Podés favorecer conversaciones respetuosas.", "Expresar desacuerdos sin acumular frustración fortalece tus vínculos."),
    axis("Frustración ocasional", "Un equilibrio que puede variar", "Generalmente manejás bien las diferencias, aunque algunas situaciones pueden superar tu paciencia.", "Capacidad para recuperar la calma.", "El cansancio o el estrés pueden influir en tus reacciones.", "Podés resolver desacuerdos si contás con tiempo.", "Reconocer tus desencadenantes puede ayudarte."),
    axis("Reacción intensa", "Emociones que necesitan espacio", "Algunas situaciones parecen generar respuestas emocionales intensas.", "Reconocer que algo te molesta es un primer paso.", "Podrías responder antes de tener tiempo para pensar.", "Los momentos de pausa pueden favorecer el diálogo.", "Practicar pausas y comunicación asertiva puede ser útil."),
    axis("Regulación en desarrollo", "Encontrar nuevas herramientas", "Tus respuestas sugieren que manejar la frustración puede ser un desafío en algunas situaciones.", "Podés aprender nuevas formas de responder.", "Quizás te cueste recuperar la calma después de un conflicto.", "Los límites y acuerdos claros pueden ayudar.", "Hablar con alguien de confianza puede ayudarte a desarrollar estrategias.")
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
    makeQuestion("¿Qué valorás más en una relación?", [
      "La comunicación sincera.",
      "La espontaneidad y las experiencias nuevas.",
      "La cercanía y el acompañamiento.",
      "La estabilidad y el compromiso."
    ]),
    makeQuestion("Cuando aparece un desacuerdo, ¿qué preferís?", [
      "Hablarlo hasta comprender ambos puntos de vista.",
      "Tomar distancia un momento y retomarlo después.",
      "Buscar una solución que cuide a ambos.",
      "Acordar pasos concretos para resolverlo."
    ]),
    makeQuestion("¿Qué tipo de tiempo compartido disfrutás más?", [
      "Conversaciones profundas.",
      "Planes diferentes e improvisados.",
      "Momentos tranquilos y cercanos.",
      "Actividades y proyectos compartidos."
    ]),
    makeQuestion("¿Qué lugar debería tener la independencia en una relación?", [
      "Cada persona necesita conservar su espacio.",
      "Es importante mantener libertad para descubrir cosas nuevas.",
      "Tiene que existir equilibrio entre cercanía y autonomía.",
      "Es importante compartir objetivos sin perder la individualidad."
    ]),
    makeQuestion("¿Qué te genera más confianza?", [
      "La honestidad y la comunicación.",
      "La autenticidad y la espontaneidad.",
      "La empatía y la consideración.",
      "La coherencia entre palabras y acciones."
    ]),
    makeQuestion("¿Qué característica te parece esencial para construir algo duradero?", [
      "Poder hablar de todo con sinceridad.",
      "Seguir descubriendo cosas juntos.",
      "Cuidarse y acompañarse mutuamente.",
      "Cumplir acuerdos y compartir responsabilidades."
    ]),
    makeQuestion("¿Qué actitud considerás más importante?", [
      "Escuchar sin juzgar.",
      "Respetar la libertad del otro.",
      "Demostrar interés y consideración.",
      "Ser responsable y coherente."
    ])
  ],
  [
    axis("Conexión intelectual", "Una relación basada en la comunicación", "Valorás especialmente poder conversar, compartir ideas y comprender la perspectiva de la otra persona.", "Comunicación, reflexión y honestidad.", "Podrías necesitar conversaciones profundas incluso cuando el otro no está preparado.", "Te interesa construir confianza mediante el diálogo.", "Recordá que compartir silencios también puede ser una forma de conexión."),
    axis("Conexión aventurera", "Una relación con espontaneidad", "Te atraen los vínculos que permiten descubrir experiencias y mantener la curiosidad.", "Apertura, espontaneidad y flexibilidad.", "La rutina podría hacerte sentir desconectado.", "Valorás compartir experiencias nuevas.", "La estabilidad también puede ser una aventura construida entre dos."),
    axis("Conexión emocional", "Una relación con cercanía y cuidado", "Valorás la empatía, el acompañamiento y la posibilidad de expresar lo que sentís.", "Sensibilidad, consideración y capacidad de acompañamiento.", "Podrías dejar tus necesidades en segundo plano.", "Buscás reciprocidad y confianza.", "Una relación saludable también necesita límites y autonomía."),
    axis("Conexión estable", "Una relación basada en compromiso", "Valorás la coherencia, la responsabilidad y los acuerdos que se sostienen en el tiempo.", "Constancia, responsabilidad y compromiso.", "Podrías sentirte incómodo ante cambios inesperados.", "Buscás seguridad y reciprocidad.", "La flexibilidad permite que el compromiso crezca sin volverse rígido.")
  ]
);

/* =====================================================
   TEST 11 — PSICOPATÍA
   Enfoque educativo sobre rasgos interpersonales.
   No mide ni diagnostica psicopatía.
===================================================== */

const testPsicopatia = makeNewTest(
  "psicopatia",
  "Psicopatía",
  "Explorá empatía, responsabilidad y toma de decisiones.",
  "◉",
  "Este cuestionario aborda actitudes interpersonales y responsabilidad. No mide psicopatía, no identifica trastornos y no permite etiquetar a una persona.",
  [
    makeQuestion("Si descubrís que una acción tuya lastimó a alguien, ¿qué hacés?", [
      "Intento comprender el impacto y reparar el daño.",
      "Me cuesta al principio, pero después reflexiono.",
      "Me concentro primero en explicar por qué actué así.",
      "No siempre sé cómo responder ante esa situación."
    ]),
    makeQuestion("Cuando alguien te cuenta un problema, ¿cómo reaccionás?", [
      "Intento comprender cómo se siente.",
      "Escucho, aunque no siempre sé qué decir.",
      "Suelo pensar en soluciones prácticas.",
      "Me cuesta conectar con lo que está sintiendo."
    ]),
    makeQuestion("Si cometés un error, ¿qué suele pasar?", [
      "Lo reconozco y trato de corregirlo.",
      "Necesito tiempo para aceptarlo.",
      "Primero intento justificar mi decisión.",
      "Me cuesta asumir mi responsabilidad."
    ]),
    makeQuestion("Cuando una decisión beneficia a otras personas pero te exige un esfuerzo, ¿qué considerás?", [
      "El impacto en todos los involucrados.",
      "Busco un equilibrio entre mis necesidades y las ajenas.",
      "Evalúo principalmente las consecuencias para mí.",
      "Depende mucho de la situación."
    ]),
    makeQuestion("¿Qué importancia tiene para vos respetar los límites de otras personas?", [
      "Es fundamental, incluso cuando no estoy de acuerdo.",
      "Es importante, aunque a veces necesito recordarlo.",
      "Depende del vínculo y de la situación.",
      "No siempre me resulta fácil identificar esos límites."
    ]),
    makeQuestion("Cuando alguien piensa diferente a vos, ¿qué hacés?", [
      "Intento comprender su perspectiva.",
      "Escucho, aunque puedo mantener mi desacuerdo.",
      "Me cuesta considerar opiniones opuestas.",
      "Prefiero no involucrarme demasiado."
    ]),
    makeQuestion("¿Cómo describirías tu manera de asumir compromisos?", [
      "Intento cumplirlos y ser responsable.",
      "A veces necesito ayuda para organizarme.",
      "Puedo cambiar de opinión si me conviene.",
      "Me cuesta sostener compromisos."
    ])
  ],
  [
    axis("Responsabilidad interpersonal", "Considerar el impacto de tus acciones", "Tus respuestas sugieren que prestás atención a las consecuencias de tus decisiones sobre otras personas.", "Responsabilidad, consideración y capacidad de reparar errores.", "Podrías exigirte demasiado por situaciones que no dependen completamente de vos.", "Valorás la confianza y el respeto mutuo.", "Mantener límites saludables también forma parte de la responsabilidad."),
    axis("Empatía reflexiva", "Intentar comprender otras perspectivas", "Solés considerar que otras personas pueden vivir una misma situación de maneras diferentes.", "Escucha, reflexión y apertura.", "Podrías dedicar demasiado esfuerzo a comprender a los demás.", "Valorás el diálogo y la comprensión.", "Recordá que comprender a alguien no significa estar siempre de acuerdo."),
    axis("Orientación práctica", "Priorizar soluciones concretas", "Tus respuestas muestran una preferencia por analizar situaciones desde sus consecuencias y posibles soluciones.", "Practicidad y capacidad de análisis.", "Podrías pasar por alto la dimensión emocional de algunas situaciones.", "Podés aportar soluciones, aunque también es importante escuchar.", "Incorporar la perspectiva emocional puede enriquecer tus decisiones."),
    axis("Reflexión interpersonal", "Reconocer aspectos para desarrollar", "Tus respuestas muestran que algunas situaciones interpersonales pueden requerir más reflexión o herramientas.", "Disposición para reconocer áreas de aprendizaje.", "Podrías necesitar más tiempo para identificar cómo afectan tus decisiones a los demás.", "La comunicación clara puede ayudar a evitar malentendidos.", "Practicar la escucha y la responsabilidad puede fortalecer tus relaciones.")
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
    makeQuestion("¿Qué gesto te hace sentir especialmente valorado?", [
      "Que alguien me diga algo sincero y lindo.",
      "Que dedique tiempo exclusivamente para compartir conmigo.",
      "Que tenga un detalle pensado para mí.",
      "Que me ayude cuando lo necesito."
    ]),
    makeQuestion("¿Cómo solés demostrar que alguien te importa?", [
      "Expresando lo que siento con palabras.",
      "Buscando momentos para compartir.",
      "Preparando una sorpresa o un detalle.",
      "Ayudando y estando presente."
    ]),
    makeQuestion("Después de un día difícil, ¿qué te gustaría recibir?", [
      "Palabras de ánimo y comprensión.",
      "Que alguien se quede conmigo un rato.",
      "Un pequeño gesto que demuestre que pensó en mí.",
      "Ayuda para resolver algo que me preocupa."
    ]),
    makeQuestion("¿Qué gesto recordás con más cariño?", [
      "Una frase que me hizo sentir comprendido.",
      "Un momento compartido que disfruté mucho.",
      "Un regalo significativo.",
      "Una acción de alguien que estuvo cuando lo necesitaba."
    ]),
    makeQuestion("¿Qué te hace sentir más acompañado?", [
      "Que me expresen su cariño.",
      "Que compartan tiempo conmigo sin distracciones.",
      "Que tengan presentes mis gustos y preferencias.",
      "Que me ayuden con acciones concretas."
    ]),
    makeQuestion("Si querés demostrar agradecimiento, ¿qué elegís?", [
      "Decir cuánto significa esa persona para mí.",
      "Organizar un momento para compartir.",
      "Dar un detalle especial.",
      "Hacer algo útil para ayudar."
    ]),
    makeQuestion("¿Qué detalle cotidiano valorás más?", [
      "Un mensaje amable.",
      "Una charla tranquila.",
      "Una pequeña sorpresa.",
      "Que alguien se ofrezca a ayudarme."
    ])
  ],
  [
    axis("Palabras de afirmación", "El cariño expresado con palabras", "Las palabras sinceras tienen un lugar importante en tu manera de recibir y expresar afecto.", "Comunicación, reconocimiento y expresión emocional.", "Podrías darle demasiado peso a comentarios aislados.", "Valorás que las personas expresen lo que sienten.", "También podés aprender a reconocer el cariño que aparece en acciones."),
    axis("Tiempo de calidad", "El cariño expresado con presencia", "Sentís que compartir tiempo y atención genuina es una forma importante de construir cercanía.", "Presencia, escucha y conexión.", "Podrías interpretar la falta de tiempo como falta de interés.", "Valorás los momentos compartidos.", "La calidad de un vínculo no depende únicamente de la cantidad de tiempo."),
    axis("Regalos significativos", "El cariño expresado con detalles", "Los objetos y pequeños gestos pueden representar para vos que alguien te tuvo presente.", "Atención a los detalles y capacidad de expresar consideración.", "Podrías esperar que otras personas demuestren afecto de la misma manera.", "Valorás los gestos con significado personal.", "Un detalle no necesita tener valor económico para ser significativo."),
    axis("Actos de servicio", "El cariño expresado con acciones", "Valorás especialmente que las personas demuestren interés mediante ayuda y acciones concretas.", "Colaboración, compromiso y atención.", "Podrías asumir demasiadas tareas para demostrar afecto.", "Valorás la reciprocidad y el apoyo.", "También es importante permitir que otros te acompañen.")
  ]
);

/* =====================================================
   TEST 13 — DEPRESIÓN
   Cuestionario de bienestar emocional.
   No diagnostica depresión.
===================================================== */

const testDepresion = makeNewTest(
  "depresion",
  "Depresión",
  "Explorá tu bienestar emocional durante las últimas semanas.",
  "☁",
  "Este cuestionario invita a reflexionar sobre el ánimo, la energía y el interés por las actividades cotidianas. No diagnostica depresión ni reemplaza una evaluación profesional.",
  [
    makeQuestion("Durante las últimas semanas, ¿cómo describirías tu estado de ánimo?", [
      "Generalmente positivo o estable.",
      "Variable, con algunos momentos difíciles.",
      "Más bajo de lo habitual.",
      "Frecuentemente desanimado."
    ]),
    makeQuestion("¿Cómo estuvo tu interés por las actividades que normalmente disfrutás?", [
      "Se mantuvo igual.",
      "Disminuyó algunos días.",
      "Disminuyó bastante.",
      "Me costó encontrar interés en muchas actividades."
    ]),
    makeQuestion("¿Cómo estuvo tu energía durante el día?", [
      "Similar a la habitual.",
      "Un poco más baja algunos días.",
      "Frecuentemente baja.",
      "Me costó mucho encontrar energía para mis actividades."
    ]),
    makeQuestion("¿Cómo estuvo tu descanso?", [
      "Bastante regular.",
      "Tuve algunas variaciones.",
      "Me costó descansar bien con frecuencia.",
      "Mi descanso estuvo muy alterado."
    ]),
    makeQuestion("¿Cómo te resultó concentrarte en tus actividades?", [
      "Pude concentrarme como siempre.",
      "Tuve algunas dificultades.",
      "Me costó concentrarme con frecuencia.",
      "Me resultó difícil mantener la atención."
    ]),
    makeQuestion("¿Cómo te sentiste respecto a tus actividades cotidianas?", [
      "Pude realizarlas normalmente.",
      "Algunas me costaron más de lo habitual.",
      "Varias me resultaron difíciles de sostener.",
      "Sentí que muchas actividades me exigían demasiado."
    ]),
    makeQuestion("¿Con qué frecuencia encontraste momentos agradables durante el día?", [
      "Con bastante frecuencia.",
      "Algunos días sí y otros no.",
      "Con poca frecuencia.",
      "Me costó encontrar momentos agradables."
    ])
  ],
  [
    axis("Bienestar estable", "Un estado emocional relativamente equilibrado", "Tus respuestas sugieren que durante el período considerado pudiste mantener un estado de ánimo y una energía relativamente habituales.", "Reconocer lo que te hace bien y mantener actividades significativas.", "Incluso en etapas positivas pueden aparecer días difíciles.", "Los vínculos de confianza pueden contribuir al bienestar.", "Seguí prestando atención a tus necesidades y rutinas."),
    axis("Variaciones emocionales", "Días buenos y días difíciles", "Tus respuestas reflejan algunos cambios en tu estado de ánimo, energía o interés.", "Reconocer tus cambios y buscar momentos de descanso.", "Las exigencias cotidianas pueden influir en cómo te sentís.", "Compartir cómo estás puede ayudarte a sentirte acompañado.", "Identificar qué situaciones influyen en tu ánimo puede ser útil."),
    axis("Bienestar en tensión", "Una etapa que merece atención", "Tus respuestas muestran varias experiencias de cansancio, desánimo o menor interés durante el período considerado.", "Poder reconocer lo que estás atravesando es importante.", "Puede resultar difícil sostener las actividades cuando el bienestar disminuye.", "Hablar con alguien de confianza puede ayudar.", "Si esto persiste o afecta tu vida diaria, sería importante conversar con un adulto de confianza y un profesional."),
    axis("Necesidad de acompañamiento", "Priorizar tu bienestar", "Tus respuestas indican que varias áreas de tu bienestar podrían estar siendo difíciles últimamente. Este resultado no identifica una causa ni establece un diagnóstico.", "Reconocer que necesitás apoyo es un paso valioso.", "No tenés que resolver todo por tu cuenta.", "El acompañamiento de personas confiables puede ser importante.", "Si te sentís así con frecuencia, hablá con un adulto de confianza o un profesional de salud.")
  ]
);

/* =====================================================
   TEST 14 — ANSIEDAD
   Cuestionario orientativo.
   No diagnostica ansiedad.
===================================================== */

const testAnsiedad = makeNewTest(
  "ansiedad",
  "Ansiedad",
  "Explorá cómo vivís las preocupaciones y las situaciones de tensión.",
  "〰",
  "Una exploración de preocupaciones, tensión y respuestas ante la incertidumbre. No diagnostica trastornos de ansiedad.",
  [
    makeQuestion("Cuando tenés algo importante por hacer, ¿qué suele pasar?", [
      "Puedo organizarme y ocuparme cuando corresponde.",
      "Lo pienso algunas veces antes de hacerlo.",
      "Me preocupa bastante incluso con anticipación.",
      "Me cuesta dejar de pensar en lo que podría salir mal."
    ]),
    makeQuestion("Cuando no sabés qué va a pasar, ¿cómo te sentís?", [
      "Puedo tolerar la incertidumbre.",
      "Me genera cierta inquietud.",
      "Me cuesta bastante no tener respuestas.",
      "La incertidumbre puede ocupar gran parte de mis pensamientos."
    ]),
    makeQuestion("¿Qué pasa cuando cometés un error?", [
      "Lo acepto y busco corregirlo.",
      "Me queda dando vueltas durante un rato.",
      "Pienso mucho en sus posibles consecuencias.",
      "Me cuesta dejar de preocuparme por eso."
    ]),
    makeQuestion("Cuando tenés muchas cosas pendientes, ¿cómo reaccionás?", [
      "Las organizo y avanzo de a poco.",
      "Me inquieto, pero puedo continuar.",
      "Me cuesta ordenar mis pensamientos.",
      "Siento que las preocupaciones me dificultan empezar."
    ]),
    makeQuestion("¿Cómo te resulta descansar cuando tenés preocupaciones?", [
      "Generalmente puedo desconectarme.",
      "A veces sigo pensando en mis pendientes.",
      "Me cuesta dejar de pensar en algunas situaciones.",
      "Las preocupaciones suelen interferir con mi descanso."
    ]),
    makeQuestion("Cuando estás en una situación nueva, ¿qué suele ocurrir?", [
      "Me adapto y observo qué sucede.",
      "Siento nervios al principio.",
      "Me preocupo bastante por cómo saldrá todo.",
      "La anticipación puede hacer que me cueste disfrutar la experiencia."
    ]),
    makeQuestion("¿Qué hacés cuando notás que estás preocupado?", [
      "Identifico el problema y pienso qué puedo hacer.",
      "Intento distraerme un rato.",
      "Busco hablarlo con alguien.",
      "A veces me cuesta encontrar una manera de manejarlo."
    ])
  ],
  [
    axis("Tranquilidad flexible", "Adaptarte ante la incertidumbre", "Tus respuestas sugieren que generalmente podés manejar las preocupaciones sin que ocupen demasiado espacio.", "Flexibilidad, organización y perspectiva.", "Algunas situaciones inesperadas también pueden generarte tensión.", "Podés conversar sobre tus inquietudes.", "Seguí desarrollando estrategias que te ayuden a mantener el equilibrio."),
    axis("Preocupación ocasional", "Una inquietud que aparece por momentos", "Experimentás preocupación en algunas situaciones, aunque generalmente podés continuar con tus actividades.", "Reconocimiento de situaciones que generan tensión.", "Podrías anticipar problemas que todavía no ocurrieron.", "Compartir tus inquietudes puede aliviar la tensión.", "Diferenciar lo que podés controlar de lo que no puede ayudarte."),
    axis("Preocupación frecuente", "Pensamientos que ocupan espacio", "Tus respuestas sugieren que algunas preocupaciones aparecen con frecuencia y pueden interferir con tu concentración o descanso.", "Capacidad para identificar tus preocupaciones.", "Podrías dedicar mucho tiempo a anticipar resultados negativos.", "Hablar con alguien de confianza puede ayudarte a ordenar ideas.", "Si estas preocupaciones persisten, buscá acompañamiento de un adulto de confianza o profesional."),
    axis("Tensión elevada", "Necesidad de herramientas y apoyo", "Tus respuestas muestran que la preocupación puede estar ocupando un lugar importante en tu vida cotidiana. Este resultado no es un diagnóstico.", "Reconocer lo que te pasa es un primer paso.", "Puede ser difícil desconectarte de las preocupaciones.", "El acompañamiento y la escucha pueden ser importantes.", "Si afecta tu descanso, tus estudios o tus actividades, hablá con un adulto de confianza y un profesional.")
  ]
);

/* =====================================================
   CATÁLOGO COMPLETO: 7 + 7
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

const allTests = [...categories, ...newTests];


/* ==========================================
   ESTILOS DEL CATÁLOGO
   Aprovecha todo el ancho de la pantalla
========================================== */

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

  /* DISTRIBUCIÓN DE LAS TARJETAS */

  .category-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 22px;
    row-gap: 25px;
    width: 100%;
    margin-top: 35px;
  }

  /* TARJETAS */

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

  /* PANTALLAS MEDIANAS */

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

  /* TABLETS */

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

  /* CELULARES */

  @media (max-width: 450px) {
    .category-grid {
      grid-template-columns: 1fr;
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
    if (screen) screen.classList.toggle("hidden", id !== name);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
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
  if (oldCatalog) oldCatalog.remove();

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

          <div class="category-icon">${test.icon}</div>
          <h3>${test.name}</h3>
          <p>${test.subtitle}</p>
          <span>REALIZAR TEST →</span>
        </button>
      `).join("")}
    </div>
  `;

  home.appendChild(section);

  section.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      startTest(button.dataset.category);
    });
  });
}

/* ==========================================
   PREGUNTAS COMPLEMENTARIAS
   Se utilizan para completar los tests
   hasta llegar a 16 preguntas.
========================================== */

const extraQuestions = [
  {
    prompt: "Cuando te enfrentás a una situación que no esperabas, ¿qué suele pasar por tu mente?",
    options: [
      "Analizo rápidamente qué está ocurriendo.",
      "Pienso en distintas posibilidades.",
      "Me pregunto cómo afecta a las personas involucradas.",
      "Busco qué puedo hacer para resolverlo."
    ]
  },
  {
    prompt: "¿Qué situación te resulta más difícil de manejar?",
    options: [
      "No tener información suficiente.",
      "Sentir que estoy limitado por una rutina.",
      "No poder expresar lo que siento.",
      "No conseguir los resultados que esperaba."
    ]
  },
  {
    prompt: "Cuando alguien te contradice, ¿qué es lo primero que hacés?",
    options: [
      "Intento encontrar argumentos para responder.",
      "Considero si existe otra forma de ver las cosas.",
      "Presto atención a cómo se siente esa persona.",
      "Busco llegar a una conclusión concreta."
    ]
  },
  {
    prompt: "¿Qué te hace sentir que estás avanzando en tu vida?",
    options: [
      "Comprender mejor las cosas.",
      "Descubrir experiencias nuevas.",
      "Construir vínculos significativos.",
      "Alcanzar objetivos que me propuse."
    ]
  },
  {
    prompt: "Si tuvieras que tomar una decisión importante, ¿qué necesitarías primero?",
    options: [
      "Datos claros y argumentos.",
      "Conocer todas las alternativas.",
      "Pensar en las personas involucradas.",
      "Tener un plan de acción."
    ]
  },
  {
    prompt: "¿Qué suele hacer que pierdas el interés en algo?",
    options: [
      "Que no tenga sentido para mí.",
      "Que se vuelva demasiado repetitivo.",
      "Que no exista conexión con los demás.",
      "Que no vea avances concretos."
    ]
  },
  {
    prompt: "Cuando recordás una experiencia importante, ¿qué aspecto queda más presente?",
    options: [
      "Lo que aprendí de ella.",
      "Lo inesperado o diferente que fue.",
      "Las personas y emociones que estuvieron presentes.",
      "Lo que logré o conseguí."
    ]
  },
  {
    prompt: "¿Qué te gustaría que los demás comprendieran mejor de vos?",
    options: [
      "Mi manera de analizar las situaciones.",
      "Mi necesidad de explorar y cambiar.",
      "Mi mundo emocional y mis vínculos.",
      "Mi esfuerzo por conseguir mis objetivos."
    ]
  },
  {
    prompt: "Cuando algo no sale como esperabas, ¿qué suele ayudarte a continuar?",
    options: [
      "Entender qué salió mal.",
      "Probar un camino diferente.",
      "Hablarlo con alguien de confianza.",
      "Organizarme y volver a intentarlo."
    ]
  }
];
/* ==========================================
   INICIAR TEST
========================================== */

function startTest(testId) {
  const selected = allTests.find(item => item.id === testId);

  if (!selected) {
    console.error("No se encontró el test:", testId);
    return;
  }

  state.category = selected;
  state.index = 0;
  state.answers = [];

  // Copiar las preguntas originales del test
  const baseQuestions = selected.custom
    ? [...selected.questions]
    : [...questionBank];

  // Calcular cuántas preguntas faltan para llegar a 16
  const needed = Math.max(0, 16 - baseQuestions.length);

  // Completar el test hasta llegar a 16 preguntas
  state.questions = [
    ...baseQuestions,
    ...extraQuestions.slice(0, needed)
  ];

  // Mezclar el orden de las preguntas
  state.questions.sort(() => Math.random() - 0.5);

  // Actualizar los títulos
  $("#test-kicker").textContent = selected.name.toUpperCase();
  $("#test-label").textContent = selected.name.toUpperCase();

  // Mostrar el test
  show("test");
  renderQuestion();
}

/* =====================================================
   PREGUNTAS GENERALES PARA LAS 7 CATEGORÍAS ORIGINALES
===================================================== */

const questionBank = [
  {
    prompt: "Te enfrentás a una situación nueva y no sabés exactamente qué hacer. ¿Cuál suele ser tu primera reacción?",
    options: [
      "Observo, analizo la situación y trato de comprenderla.",
      "Imagino distintas posibilidades y pienso en alternativas.",
      "Considero cómo afecta a las personas involucradas.",
      "Busco una manera concreta de empezar a resolverla."
    ]
  },
  {
    prompt: "Cuando tenés que tomar una decisión importante, ¿qué suele influir más?",
    options: [
      "La información disponible y los argumentos.",
      "Las posibilidades que todavía no exploré.",
      "Mis valores y las consecuencias para los demás.",
      "La viabilidad y los resultados que puedo conseguir."
    ]
  },
  {
    prompt: "En un proyecto grupal, ¿qué papel terminás ocupando con mayor frecuencia?",
    options: [
      "Analizo los problemas y detecto posibles errores.",
      "Propongo ideas y caminos diferentes.",
      "Escucho, conecto a las personas y busco acuerdos.",
      "Organizo las tareas y ayudo a que se concreten."
    ]
  },
  {
    prompt: "Cuando algo no sale como esperabas, ¿qué hacés habitualmente?",
    options: [
      "Intento descubrir qué salió mal y por qué.",
      "Cambio de enfoque y pruebo algo distinto.",
      "Pienso en cómo afecta la situación a quienes participan.",
      "Reorganizo el plan y busco una solución práctica."
    ]
  },
  {
    prompt: "¿Qué característica valorás especialmente en vos?",
    options: [
      "Mi capacidad para pensar con claridad.",
      "Mi imaginación y originalidad.",
      "Mi capacidad para comprender a otras personas.",
      "Mi constancia para transformar ideas en acciones."
    ]
  },
  {
    prompt: "¿Qué situación te resulta más frustrante?",
    options: [
      "Que se tomen decisiones sin analizar los hechos.",
      "Que se rechacen ideas solamente porque son diferentes.",
      "Que no se tengan en cuenta los sentimientos de los demás.",
      "Que se hable mucho y no se avance."
    ]
  },
  {
    prompt: "Cuando tenés tiempo para reflexionar sobre tu vida, ¿en qué solés concentrarte?",
    options: [
      "En comprender mis decisiones y aprender de ellas.",
      "En imaginar qué otras experiencias podría vivir.",
      "En mis vínculos y en las personas importantes para mí.",
      "En mis objetivos y en los pasos que quiero dar."
    ]
  },
  {
    prompt: "Si recibís una crítica sobre algo que hiciste, ¿cómo reaccionás?",
    options: [
      "Evalúo si tiene fundamento y qué puedo aprender.",
      "La utilizo como oportunidad para probar otra idea.",
      "Intento comprender la intención de quien me la hizo.",
      "Identifico qué puedo cambiar y paso a la acción."
    ]
  }
];

/* =====================================================
   SEGURIDAD DE TEXTO
===================================================== */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function renderQuestion() {
  const question = state.questions[state.index];
  const total = state.questions.length;

  $("#test-count").textContent = `${state.index + 1} / ${total}`;

  $("#progress-bar").style.width =
    `${(state.index / total) * 100}%`;

  $("#question").textContent = question.prompt;

  $("#question-help").textContent =
    "No hay respuestas correctas o incorrectas. Elegí la opción que mejor representa tu experiencia.";

  $("#visual").innerHTML = `
    <div class="sequence sequence-text">
      <div class="cell sequence-prompt">
        Pregunta ${state.index + 1}
      </div>
    </div>
  `;

  const options = $("#options");
  options.className = "options text";

  options.innerHTML = question.options.map((option, index) => {
    const text = typeof option === "string" ? option : option.text;

    return `
      <button class="option" type="button" data-index="${index}">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHTML(text)}</span>
      </button>
    `;
  }).join("");
}

/* =====================================================
   GUARDAR RESPUESTAS
===================================================== */

if ($("#options")) {
  $("#options").addEventListener("click", event => {
    const button = event.target.closest(".option");

    if (!button || button.disabled) return;

    const chosen = Number(button.dataset.index);

    state.answers.push(chosen);

    $("#options").querySelectorAll("button").forEach(option => {
      option.disabled = true;
    });

    button.classList.add("selected");

    setTimeout(() => {
      state.index++;

      if (state.index < state.questions.length) {
        renderQuestion();
      } else {
        $("#progress-bar").style.width = "100%";
        show("paywall");
      }
    }, 250);
  });
}

/* =====================================================
   CALCULAR PERFIL
===================================================== */

function calculateProfile() {
  const scores = [0, 0, 0, 0];

  state.answers.forEach((answer, questionIndex) => {
    const question = state.questions[questionIndex];
    const option = question.options[answer];

    // Los tests nuevos tienen puntuación propia.
    // Las categorías originales utilizan el índice elegido.
    const score = typeof option === "string"
      ? answer
      : option.score;

    scores[score]++;
  });

  const total = state.answers.length;

  const ranking = scores
    .map((score, index) => ({ score, index }))
    .sort((a, b) => b.score - a.score);

  return {
    scores,
    total,
    primary: ranking[0].index,
    secondary: ranking[1].index
  };
}

/* =====================================================
   CREAR INFORME DETALLADO
===================================================== */

function buildReport() {
  const category = state.category;
  const profile = calculateProfile();

  const primary = category.axes[profile.primary];
  const secondary = category.axes[profile.secondary];

  const percentages = profile.scores.map(score =>
    Math.round((score / profile.total) * 100)
  );

  const tie = profile.scores.filter(
    score => score === profile.scores[profile.primary]
  ).length > 1;

  const distribution = category.axes.map((axis, index) => `
    <article class="report-card">
      <h3>${axis.name}</h3>
      <p>${axis.short}</p>
      <div class="profile-meter">
        <span style="width:${percentages[index]}%"></span>
      </div>
      <strong>${percentages[index]}%</strong>
    </article>
  `).join("");

  const tieText = tie
    ? "Tus respuestas muestran una combinación de tendencias principales. Distintas facetas pueden aparecer según el contexto."
    : `Tu tendencia predominante es ${primary.name.toLowerCase()}, acompañada por características de ${secondary.name.toLowerCase()}.`;

  const disclaimer = category.custom
    ? `<p class="result-disclaimer">${category.description} Este resultado es orientativo y recreativo; no constituye un diagnóstico ni una evaluación profesional.</p>`
    : `<p class="result-disclaimer">MENTE+ · Experiencia recreativa de autoconocimiento. No reemplaza una evaluación profesional ni constituye una medición psicométrica validada.</p>`;

  return `
    <div class="result-hero">
      <span class="eyebrow">
        INFORME MENTE+ · ${category.name.toUpperCase()}
      </span>

      <h2>${primary.name}</h2>
      <p><strong>${primary.short}</strong></p>
      <p>${tieText}</p>
    </div>

    <section class="report-section">
      <h3>Una mirada general sobre tu perfil</h3>
      <p class="report-intro">${category.description}</p>
      <p>
        Tus respuestas sugieren una tendencia relacionada con:
        ${primary.description}
      </p>
    </section>

    <div class="report-grid">
      <article class="report-card">
        <h3>Cómo funciona tu tendencia principal</h3>
        <p>${primary.description}</p>
      </article>

      <article class="report-card">
        <h3>Tus principales fortalezas</h3>
        <p>${primary.strengths}</p>
      </article>

      <article class="report-card">
        <h3>Tu posible punto ciego</h3>
        <p>${primary.challenge}</p>
      </article>

      <article class="report-card">
        <h3>Cómo puede aparecer en tus relaciones</h3>
        <p>${primary.relationships}</p>
      </article>

      <article class="report-card">
        <h3>Una oportunidad de crecimiento</h3>
        <p>${primary.growth}</p>
      </article>

      <article class="report-card">
        <h3>Tu segunda tendencia</h3>
        <p>
          También aparecen características de ${secondary.name.toLowerCase()}.
          ${secondary.description}
        </p>
      </article>
    </div>

    <section class="report-section">
      <h3>Tu mapa de tendencias</h3>
      <p class="report-intro">
        Esta distribución representa cómo se repartieron tus respuestas
        entre las cuatro dimensiones de este cuestionario.
      </p>

      <div class="report-grid">
        ${distribution}
      </div>
    </section>

    <section class="report-section report-card">
      <h3>Cómo interpretar este resultado</h3>
      <p>
        Este informe describe tus elecciones en un conjunto limitado
        de situaciones. No constituye una descripción definitiva
        de quién sos.
      </p>
      <p>
        Podés reconocer características de varios perfiles y tus
        preferencias pueden cambiar con el tiempo y el contexto.
      </p>
    </section>

    ${disclaimer}
  `;
}

/* =====================================================
   DESBLOQUEAR RESULTADO
===================================================== */

/*
  IMPORTANTE:
  Este botón es una DEMOSTRACIÓN.
  No cobra dinero ni verifica pagos.
  El pago real necesita servidor y confirmación segura.
*/

if ($("#unlock-btn")) {
  $("#unlock-btn").addEventListener("click", () => {
    $("#result-content").innerHTML = buildReport();
    show("result");
  });
}

/* =====================================================
   NAVEGACIÓN
===================================================== */

if ($("#back-home")) {
  $("#back-home").addEventListener("click", () => show("home"));
}

if ($("#restart")) {
  $("#restart").addEventListener("click", () => show("home"));
}

if ($("#restart-from-pay")) {
  $("#restart-from-pay").addEventListener("click", () => show("home"));
}

/* =====================================================
   BOTONES PRINCIPALES
===================================================== */

document.querySelectorAll("[data-start]").forEach(button => {
  button.addEventListener("click", () => {
    const categoryId = button.dataset.start === "iq"
      ? "inteligencia"
      : "personalidad";

    startTest(categoryId);
  });
});

/* =====================================================
   INICIO
===================================================== */

createCatalog();
show("home");


/* VOLVER AL INICIO AL TOCAR EL LOGO */

const brandLogo = document.querySelector(".brand");

if (brandLogo) {
  brandLogo.addEventListener("click", (event) => {
    event.preventDefault();
    show("home");
    window.scrollTo(0, 0);
  });
}