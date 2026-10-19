const T = {
  pt: {
    doc: "Cuidar de Idosos",
    h1: "Cuidar de idosos com atenção e segurança",
    lead: "Guia simples para quem cuida de uma pessoa idosa: o que fazer numa emergência, o que evitar no prato, o que ajuda no dia a dia e como manter corpo e mente saudáveis.",
    emerg: ["Emergência: ligue antes de qualquer outra coisa", "Brasil: 192 (SAMU) ou 193 (Bombeiros). Portugal e Espanha: 112."],
    sec: [
      { id: "socorros", nav: "Primeiros socorros", h: "Primeiros socorros", intro: "Ligue para a emergência primeiro e siga as orientações do atendente.", items: [
        ["Engasgo", "Se a pessoa não consegue falar, tossir nem respirar, ligue para a emergência e faça a manobra de Heimlich: abrace por trás, feche uma mão acima do umbigo e puxe com força para dentro e para cima, repetindo até o objeto sair. Se ela desmaiar, comece as compressões no peito."],
        ["Queda", "Não levante a pessoa se houver dor forte no pescoço, nas costas, no quadril, deformidade ou batida na cabeça. Mantenha-a calma e parada e ligue para a emergência. Se não houver dor e ela conseguir se mexer, ajude a sentar devagar e observe por 24 horas: tontura, vômito ou sonolência exigem avaliação médica."],
        ["Sinais de AVC", "Rosto torto, braço fraco ou fala enrolada de repente: anote a hora em que começou e ligue na hora. Não dê comida, água nem remédios."],
        ["Parada cardíaca", "Se não responde e não respira normalmente, ligue para a emergência e faça compressões no centro do peito, fortes e rápidas (100 a 120 por minuto), sem parar até a equipe chegar."],
        ["Queimadura leve", "Deixe água corrente fria por 10 a 20 minutos e cubra com pano limpo. Não use gelo, pasta de dente, manteiga nem fure bolhas. Queimadura grande ou no rosto exige atendimento médico."]
      ] },
      { id: "alimentos", nav: "Alimentos", h: "Alimentos de difícil digestão", intro: "Com a idade a digestão fica mais lenta. Cada pessoa reage de um jeito: observe e converse com o médico ou nutricionista.", items: [
        ["Frituras e comidas muito gordurosas", "Demoram para digerir e causam azia, estufamento e sono pesado. Prefira cozidos, assados e grelhados."],
        ["Embutidos e carnes gordurosas", "Salsicha, presunto e bacon têm muito sal e gordura, o que pesa na digestão e na pressão."],
        ["Leite e derivados, se houver gases ou diarreia", "A intolerância à lactose é comum com a idade. Se incomoda, teste versões sem lactose."],
        ["Feijão, repolho, brócolis e couve-flor", "Podem causar gases em quantidade grande. Cozinhe bem e sirva porções menores."],
        ["Alimentos duros ou secos", "Castanhas inteiras, pipoca, pão seco e casca de frutas aumentam o risco de engasgo. Corte pequeno, amoleça ou rale."],
        ["Café forte, refrigerante, álcool e pimenta", "Irritam o estômago, pioram o sono e podem desidratar."]
      ] },
      { id: "remedios", nav: "Remédios naturais", h: "Remédios naturais de apoio", intro: "Ajudam no bem-estar, mas não substituem tratamento médico.", items: [
        ["Camomila", "Chá morno à noite ajuda a relaxar."],
        ["Melissa (erva-cidreira)", "Chá leve que acalma e ajuda a dormir."],
        ["Gengibre", "Em pouca quantidade ajuda no enjoo e na digestão. Cuidado com quem usa anticoagulantes."],
        ["Erva-doce e hortelã", "Ajudam na digestão e nos gases. Quem tem refluxo deve evitar a hortelã."],
        ["Mel", "Pode aliviar tosse leve. Diabéticos só com orientação médica."],
        ["Aveia e linhaça", "Ajudam o intestino preso, desde que acompanhadas de bastante água."]
      ], warn: "Natural não quer dizer sem risco. Ginkgo, erva-de-são-joão e valeriana, entre outras, podem interagir com remédios. Se a pessoa usa medicamentos (pressão, diabetes, anticoagulantes), pergunte antes ao médico ou ao farmacêutico." },
      { id: "habitos", nav: "Hábitos", h: "Hábitos que ajudam", intro: "Pequenas rotinas, repetidas todos os dias, fazem muita diferença.", items: [
        ["Caminhar todos os dias", "Cerca de 30 minutos, no ritmo da pessoa, mantêm músculos, equilíbrio e humor."],
        ["Beber água ao longo do dia", "A sede diminui com a idade. Ofereça água mesmo sem pedido."],
        ["Dormir em horários regulares", "Quarto escuro e silencioso, sem café à tarde."],
        ["Tomar sol de manhã", "10 a 15 minutos cedo ajudam o sono e a vitamina D."],
        ["Manter a mente ativa", "Leitura, palavras cruzadas, jogos de memória, música e conversas."],
        ["Conviver com pessoas", "Visitas, ligações e atividades em grupo diminuem a solidão."],
        ["Organizar os remédios", "Use uma caixa com os dias e horários e anote tudo o que a pessoa toma."],
        ["Deixar a casa segura", "Retire tapetes soltos, melhore a iluminação e instale barras no banheiro."],
        ["Fazer exames em dia", "Consultas, visão e audição devem ser revistas pelo menos uma vez por ano."]
      ] }
    ],
    foot: "Conteúdo informativo. Não substitui a avaliação de médicos e outros profissionais de saúde."
  },
  en: {
    doc: "Caring for Older Adults",
    h1: "Caring for older adults with attention and safety",
    lead: "A simple guide for anyone caring for an older person: what to do in an emergency, what to avoid on the plate, what helps day to day, and how to keep body and mind healthy.",
    emerg: ["Emergency: call before anything else", "Brazil: 192 (ambulance) or 193 (fire dept.). Europe: 112. USA and Canada: 911."],
    sec: [
      { id: "socorros", nav: "First aid", h: "First aid", intro: "Call emergency services first and follow the dispatcher's instructions.", items: [
        ["Choking", "If the person cannot speak, cough or breathe, call emergency services and do the Heimlich maneuver: hug from behind, place a fist above the navel and pull hard inward and upward, repeating until the object comes out. If they pass out, start chest compressions."],
        ["Falls", "Do not lift the person if there is strong pain in the neck, back or hip, a visible deformity, or a blow to the head. Keep them calm and still and call emergency services. If there is no pain and they can move, help them sit up slowly and watch for 24 hours: dizziness, vomiting or drowsiness need a medical check."],
        ["Stroke signs", "Sudden drooping face, weak arm or slurred speech: note the time it started and call right away. Give no food, water or medicine."],
        ["Cardiac arrest", "If the person does not respond and is not breathing normally, call emergency services and press hard and fast in the center of the chest (100 to 120 per minute), without stopping until help arrives."],
        ["Minor burns", "Hold under cool running water for 10 to 20 minutes and cover with a clean cloth. Do not use ice, toothpaste or butter, and do not pop blisters. Large burns or burns on the face need medical care."]
      ] },
      { id: "alimentos", nav: "Foods", h: "Foods that are hard to digest", intro: "Digestion slows with age. Everyone reacts differently: observe and talk to a doctor or dietitian.", items: [
        ["Fried and very fatty foods", "They digest slowly and cause heartburn, bloating and heavy sleep. Prefer boiled, baked or grilled food."],
        ["Processed and fatty meats", "Sausages, ham and bacon are high in salt and fat, which strains digestion and blood pressure."],
        ["Milk and dairy, if gas or diarrhea appear", "Lactose intolerance is common with age. If it bothers them, try lactose-free versions."],
        ["Beans, cabbage, broccoli and cauliflower", "Large portions can cause gas. Cook them well and serve smaller portions."],
        ["Hard or dry foods", "Whole nuts, popcorn, dry bread and fruit skins raise the choking risk. Cut small, soften or grate."],
        ["Strong coffee, soda, alcohol and hot pepper", "They irritate the stomach, worsen sleep and can dehydrate."]
      ] },
      { id: "remedios", nav: "Natural remedies", h: "Natural supportive remedies", intro: "They support well-being but do not replace medical treatment.", items: [
        ["Chamomile", "A warm tea at night helps to relax."],
        ["Lemon balm", "A mild tea that calms and helps sleep."],
        ["Ginger", "In small amounts it helps nausea and digestion. Take care if the person uses blood thinners."],
        ["Fennel and mint", "They help digestion and gas. People with reflux should avoid mint."],
        ["Honey", "It can ease a mild cough. People with diabetes only under medical guidance."],
        ["Oats and flaxseed", "They help constipation, as long as there is plenty of water."]
      ], warn: "Natural does not mean risk-free. Ginkgo, St. John's wort and valerian, among others, can interact with medicines. If the person takes medication (blood pressure, diabetes, blood thinners), ask a doctor or pharmacist first." },
      { id: "habitos", nav: "Habits", h: "Helpful habits", intro: "Small routines repeated every day make a big difference.", items: [
        ["Walk every day", "About 30 minutes, at the person's pace, keep muscles, balance and mood in shape."],
        ["Drink water through the day", "Thirst fades with age. Offer water even if they do not ask."],
        ["Sleep at regular times", "A dark, quiet room and no coffee in the afternoon."],
        ["Get morning sunlight", "10 to 15 minutes early in the day help sleep and vitamin D."],
        ["Keep the mind active", "Reading, crosswords, memory games, music and conversation."],
        ["Spend time with people", "Visits, calls and group activities reduce loneliness."],
        ["Organize medicines", "Use a pill box with days and times and keep a list of everything taken."],
        ["Make the home safe", "Remove loose rugs, improve lighting and install grab bars in the bathroom."],
        ["Keep checkups up to date", "Check-ups, vision and hearing should be reviewed at least once a year."]
      ] }
    ],
    foot: "Informational content. It does not replace the assessment of doctors and other health professionals."
  },
  es: {
    doc: "Cuidar de personas mayores",
    h1: "Cuidar de personas mayores con atención y seguridad",
    lead: "Guía sencilla para quien cuida a una persona mayor: qué hacer en una emergencia, qué evitar en el plato, qué ayuda en el día a día y cómo mantener cuerpo y mente saludables.",
    emerg: ["Emergencia: llame antes que nada", "España y Europa: 112. Brasil: 192 (ambulancia) o 193 (bomberos). México: 911."],
    sec: [
      { id: "socorros", nav: "Primeros auxilios", h: "Primeros auxilios", intro: "Llame primero a emergencias y siga las indicaciones del operador.", items: [
        ["Atragantamiento", "Si la persona no puede hablar, toser ni respirar, llame a emergencias y haga la maniobra de Heimlich: abrace por detrás, coloque un puño sobre el ombligo y tire con fuerza hacia dentro y hacia arriba, repitiendo hasta que salga el objeto. Si se desmaya, comience las compresiones en el pecho."],
        ["Caída", "No levante a la persona si hay dolor fuerte en el cuello, la espalda o la cadera, deformidad o golpe en la cabeza. Manténgala tranquila e inmóvil y llame a emergencias. Si no hay dolor y puede moverse, ayúdela a sentarse despacio y observe durante 24 horas: mareo, vómitos o somnolencia requieren evaluación médica."],
        ["Señales de ictus", "Cara caída, brazo débil o habla confusa de repente: anote la hora de inicio y llame de inmediato. No dé comida, agua ni medicinas."],
        ["Paro cardíaco", "Si no responde y no respira con normalidad, llame a emergencias y haga compresiones en el centro del pecho, fuertes y rápidas (100 a 120 por minuto), sin parar hasta que llegue el equipo."],
        ["Quemadura leve", "Ponga la zona bajo agua fría corriente de 10 a 20 minutos y cúbrala con un paño limpio. No use hielo, pasta de dientes ni mantequilla, ni reviente las ampollas. Una quemadura grande o en la cara necesita atención médica."]
      ] },
      { id: "alimentos", nav: "Alimentos", h: "Alimentos de difícil digestión", intro: "Con la edad la digestión se vuelve más lenta. Cada persona reacciona distinto: observe y consulte con el médico o el nutricionista.", items: [
        ["Fritos y comidas muy grasas", "Tardan en digerirse y causan acidez, hinchazón y sueño pesado. Prefiera cocidos, al horno y a la plancha."],
        ["Embutidos y carnes grasas", "Salchichas, jamón y tocino tienen mucha sal y grasa, lo que pesa en la digestión y en la tensión."],
        ["Leche y derivados, si hay gases o diarrea", "La intolerancia a la lactosa es común con la edad. Si molesta, pruebe versiones sin lactosa."],
        ["Frijoles, repollo, brócoli y coliflor", "En cantidad grande pueden causar gases. Cocínelos bien y sirva porciones menores."],
        ["Alimentos duros o secos", "Frutos secos enteros, palomitas, pan seco y cáscaras de fruta aumentan el riesgo de atragantamiento. Corte pequeño, ablande o ralle."],
        ["Café fuerte, refrescos, alcohol y picante", "Irritan el estómago, empeoran el sueño y pueden deshidratar."]
      ] },
      { id: "remedios", nav: "Remedios naturales", h: "Remedios naturales de apoyo", intro: "Ayudan al bienestar, pero no sustituyen el tratamiento médico.", items: [
        ["Manzanilla", "Una infusión tibia por la noche ayuda a relajarse."],
        ["Melisa", "Infusión suave que calma y ayuda a dormir."],
        ["Jengibre", "En poca cantidad ayuda con las náuseas y la digestión. Precaución si usa anticoagulantes."],
        ["Hinojo y menta", "Ayudan con la digestión y los gases. Quien tiene reflujo debe evitar la menta."],
        ["Miel", "Puede aliviar una tos leve. Las personas con diabetes, solo con indicación médica."],
        ["Avena y linaza", "Ayudan con el estreñimiento, siempre con mucha agua."]
      ], warn: "Natural no significa sin riesgo. El ginkgo, la hierba de San Juan y la valeriana, entre otras, pueden interactuar con medicamentos. Si la persona toma medicinas (tensión, diabetes, anticoagulantes), consulte antes con el médico o el farmacéutico." },
      { id: "habitos", nav: "Hábitos", h: "Hábitos que ayudan", intro: "Pequeñas rutinas repetidas cada día marcan una gran diferencia.", items: [
        ["Caminar todos los días", "Unos 30 minutos, al ritmo de la persona, mantienen músculos, equilibrio y ánimo."],
        ["Beber agua durante el día", "La sed disminuye con la edad. Ofrezca agua aunque no la pida."],
        ["Dormir en horarios regulares", "Habitación oscura y silenciosa, sin café por la tarde."],
        ["Tomar el sol por la mañana", "De 10 a 15 minutos temprano ayudan al sueño y a la vitamina D."],
        ["Mantener la mente activa", "Lectura, crucigramas, juegos de memoria, música y conversación."],
        ["Convivir con otras personas", "Visitas, llamadas y actividades en grupo reducen la soledad."],
        ["Organizar los medicamentos", "Use un pastillero con días y horarios y anote todo lo que toma."],
        ["Hacer la casa segura", "Quite alfombras sueltas, mejore la iluminación e instale barras en el baño."],
        ["Mantener los controles al día", "Revisiones, vista y oído deben evaluarse al menos una vez al año."]
      ] }
    ],
    foot: "Contenido informativo. No sustituye la evaluación de médicos y otros profesionales de la salud."
  }
};

const app = document.getElementById("app");
const nav = document.getElementById("nav");
const buttons = document.querySelectorAll(".lang button");
const htmlLang = { pt: "pt-BR", en: "en", es: "es" };

function render(code) {
  const d = T[code];
  document.documentElement.lang = htmlLang[code];
  document.title = d.doc;
  nav.innerHTML = d.sec.map(s => `<a href="#${s.id}">${s.nav}</a>`).join("");
  app.innerHTML =
    `<h1>${d.h1}</h1><p class="lead">${d.lead}</p>` +
    `<div class="emerg" role="note"><strong>${d.emerg[0]}</strong><p>${d.emerg[1]}</p></div>` +
    d.sec.map(s =>
      `<section id="${s.id}"><h2>${s.h}</h2><p>${s.intro}</p>` +
      s.items.map(i => `<details><summary>${i[0]}</summary><p>${i[1]}</p></details>`).join("") +
      (s.warn ? `<p class="warn">${s.warn}</p>` : "") +
      `</section>`
    ).join("") +
    `<footer>${d.foot}</footer>`;
  buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === code)));
  try { localStorage.setItem("lang", code); } catch (e) {}
}

function startLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const browser = (navigator.language || "pt").slice(0, 2);
  return [fromUrl, saved, browser].find(c => c && T[c]) || "pt";
}

buttons.forEach(b => b.addEventListener("click", () => render(b.dataset.lang)));
render(startLang());
