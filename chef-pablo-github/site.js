
/* Idioma: la web está escrita en español; con ?lang=en o el botón EN se traduce al vuelo con este diccionario. */
var LANG = (function(){
  var q = new URLSearchParams(location.search).get('lang'), l = q === 'es' || q === 'en' ? q : null;
  try { if(l) localStorage.setItem('ps-lang', l); else l = localStorage.getItem('ps-lang'); } catch(e){}
  if(l !== 'es' && l !== 'en') l = /^es/i.test(navigator.language || '') ? 'es' : 'en';
  return l;
})();
var EN = {
  'Desliza para ver los servicios': 'Swipe to see the services',
  'Marbella, Málaga y alrededores': 'Marbella, Málaga and surrounding areas',
  'Pablo cocina en tu casa, villa o terraza.': 'Pablo cooks in your home, villa or on your terrace.',
  'Ocultar paellas': 'Hide paellas',
  'Ver paellas': 'See paellas',
  'Selección de paellas': 'Paella selection',
  'Anterior': 'Previous',
  'Siguiente': 'Next',
  'Cocinados a la vista, delante de tus invitados. Elige entre nuestros arroces o diseñamos uno para tu celebración.': 'Cooked in front of your guests. Choose one of our paellas or let us design one for your celebration.',
  'Presa ibérica, setas, foie y mayonesa de trufa': 'Iberian pork, mushrooms, foie gras and truffle mayonnaise',
  'Arroz negro de gamba roja, vieiras y alioli de cabezas de gamba': 'Black rice with red prawns, scallops and prawn-head aioli',
  'Chuletón de vaca rubia, gamba roja y judías verdes': 'Blonde beef rib steak, red prawns and green beans',
  'Carabineros, calamares y gambón': 'Scarlet prawns, squid and king prawns',
  'Abrir en WhatsApp Web': 'Open in WhatsApp Web',
  'Completa el servicio, los comensales, el lugar y la fecha para enviar tu propuesta.': 'Choose the service, guests, venue and date to send your request.',
  'Desayunos a domicilio': 'Breakfast at home',
  'Ver fotos': 'See photos',
  'Huevos pochados con salmón': 'Poached eggs with salmon',
  'Bol de fruta fresca': 'Fresh fruit bowl',
  'Croissant de jamón y queso': 'Ham and cheese croissant',
  'Tostada de aguacate y tomate': 'Avocado and tomato toast',
  'Avena con plátano y fresas': 'Oats with banana and strawberries',
  'Hojaldre dorado': 'Golden puff pastry',
  'Pablo Sánchez · Chef Privado en Marbella y Málaga': 'Pablo Sánchez · Private Chef in Marbella and Málaga',
  'Chef privado en Marbella y Málaga. Arroces, catering exclusivo, cenas privadas, desayunos y eventos a medida.': 'Private chef in Marbella and Málaga. Paellas, exclusive catering, private dinners, breakfasts and bespoke events.',
  'Pablo Sánchez, inicio': 'Pablo Sánchez, home', 'Idioma': 'Language',
  'Solicitar propuesta': 'Request a proposal',
  'Paella de presa ibérica, foie y setas recién terminada al aire libre': 'Iberian pork, foie and mushroom paella, just finished outdoors',
  'PS, Chef Privado': 'PS, Private Chef',
  'Alta cocina, en tu mesa.': 'Fine dining, at your table.',
  'Catering': 'Catering', 'Desayunos': 'Breakfasts', 'Arroces': 'Paellas', 'Cenas': 'Dinners', 'Eventos privados': 'Private events',
  'Solicita tu experiencia': 'Request your experience',
  'Experiencia': 'Experience', 'años': 'years', 'de oficio como chef': 'working as a chef',
  'Alta cocina': 'Fine dining', 'formado en restaurantes de lujo': 'trained in luxury restaurants',
  'Villas': 'Villas', 'servicio privado en Marbella y Málaga': 'private service in Marbella and Málaga',
  'su especialidad, cocinados a la vista': 'his speciality, cooked in front of you',
  'Servicios': 'Services',
  'Pablo Sánchez terminando una paella al aire libre, con el monograma PS en la camiseta': 'Pablo Sánchez finishing a paella outdoors, with the PS monogram on his T-shirt',
  'La especialidad de la casa': 'The house speciality',
  'Cocinados a la vista, delante de tus invitados. Presa ibérica y foie, negro con carabineros o el que diseñemos para ti.': 'Cooked in front of your guests. Iberian pork and foie, black rice with red prawns, or one we design just for you.',
  'Consultar': 'Enquire',
  'Brioches de carne mechada con brotes': 'Pulled beef brioches with sprouts',
  'Para celebraciones': 'For celebrations', 'Catering exclusivo': 'Exclusive catering',
  'Bocados preparados al momento, tablas de quesos e ibéricos, servidos en casa, en la villa o en el barco.': 'Bites made to order, cheese and Iberian ham boards, served at home, at the villa or on the boat.',
  'Mesa montada con la minuta y la tarjeta de Pablo Sánchez': 'Table set with the menu card and Pablo Sánchez’s place card',
  'En tu mesa': 'At your table', 'Cenas privadas': 'Private dinners',
  'Un menú diseñado para ti, con minuta propia, servicio de sala y la cocina recogida al terminar.': 'A menu designed for you, with its own menu card, table service and the kitchen cleaned up afterwards.',
  'Bandeja de fruta fresca servida en una terraza': 'Fresh fruit platter served on a terrace',
  'En tu terraza': 'On your terrace',
  'La mañana servida en casa: fruta fresca cortada al momento, bollería recién hecha, huevos al gusto y café.': 'Morning served at home: fresh fruit cut to order, freshly baked pastries, eggs your way and coffee.',
  'Mesa larga blanca con vistas al mar': 'Long white table with sea views',
  'Experiencias gastronómicas': 'Gastronomic experiences', 'Eventos a medida': 'Bespoke events',
  'Cumpleaños, aniversarios y encuentros de empresa. Pablo se ocupa del menú, el montaje y el equipo.': 'Birthdays, anniversaries and corporate gatherings. Pablo takes care of the menu, the set-up and the team.',
  'Diseña tu experiencia': 'Design your experience',
  'Elige cuatro detalles. Pablo hace el resto.': 'Choose four details. Pablo does the rest.',
  'Tu propuesta se escribe sola en la minuta. Envíasela por WhatsApp y recibirás un menú y un presupuesto a medida.': 'Your request writes itself on the menu card. Send it on WhatsApp and you will receive a tailored menu and quote.',
  'Qué te apetece': 'What would you like', 'Cena privada': 'Private dinner', 'Desayuno': 'Breakfast', 'Evento a medida': 'Bespoke event',
  'Cuántos sois': 'How many guests', '2 a 8': '2 to 8', '8 a 20': '8 to 20', '20 a 50': '20 to 50', 'Más de 50': 'More than 50',
  'Dónde': 'Where', 'Casa': 'Home', 'Barco': 'Boat', 'Finca u otro espacio': 'Estate or other venue', 'Cuándo': 'When',
  'Tu propuesta': 'Your request', 'Servicio': 'Service', 'Comensales': 'Guests', 'Lugar': 'Venue', 'Fecha': 'Date', 'Por elegir': 'To choose',
  'Pedir presupuesto por WhatsApp': 'Request a quote on WhatsApp',
  'Sin compromiso. Pablo responde personalmente.': 'No obligation. Pablo replies personally.',
  'Vieiras en su concha preparadas sobre la paellera antes de cocinar': 'Scallops in their shells on the paella pan, ready to cook',
  'Especialista en arroces': 'Paella specialist',
  'El lujo también se sirve en paella.': 'Luxury can be served in a paella too.',
  'Pablo cocina cada arroz delante de los invitados, con el producto elegido esa misma mañana. Es el momento que todos recuerdan de la celebración.': 'Pablo cooks every paella in front of the guests, with produce chosen that same morning. It is the moment everyone remembers.',
  'Presa ibérica, foie y setas de temporada': 'Iberian pork, foie and seasonal mushrooms',
  'Arroz negro con carabineros': 'Black rice with red prawns', 'Vieiras y carabinero': 'Scallops and red prawn',
  'Pide tu arroz': 'Order your paella',
  'Setas, judías verdes, tomates cherry y romero sobre una tabla, junto a los cucharones y cuchillos del chef': 'Mushrooms, green beans, cherry tomatoes and rosemary on a board, next to the chef’s ladles and knives',
  'Sobre Pablo': 'About Pablo', 'El restaurante va a tu casa.': 'The restaurant comes to your home.',
  'Pablo Sánchez cocina en villas, terrazas y jardines de Marbella y Málaga. Elige el producto esa misma mañana y lo cocina a la vista, para que la velada empiece mucho antes de sentarse a la mesa.': 'Pablo Sánchez cooks in villas, terraces and gardens across Marbella and Málaga. He chooses the produce that same morning and cooks it in front of you, so the evening begins long before you sit down.',
  'Hablemos': 'Let’s talk', 'Cada propuesta se prepara a medida.': 'Every proposal is made to measure.',
  'Escríbele a Pablo por WhatsApp con la fecha, el lugar y cuántos seréis. Trabaja en Marbella, Málaga y alrededores; consulta otros destinos.': 'Message Pablo on WhatsApp with the date, the venue and how many guests. He works in Marbella, Málaga and the surrounding area; other destinations on request.',
  'Escribir por WhatsApp': 'Message on WhatsApp', 'Hablar con el asistente': 'Chat with the assistant',
  'Escríbele a Pablo por WhatsApp o resuelve tus dudas con el asistente. Trabaja en Marbella, Málaga y alrededores; consulta otros destinos.': 'Message Pablo on WhatsApp or ask the assistant your questions. He works in Marbella, Málaga and the surrounding area; other destinations on request.',
  'Abrir el asistente': 'Open the assistant', 'Asistente': 'Assistant', 'Asistente de Pablo Sánchez': 'Pablo Sánchez’s assistant', 'Asistente de Pablo': 'Pablo’s assistant',
  'Responde al momento': 'Replies instantly', 'Cerrar el asistente': 'Close the assistant', 'Escribe tu pregunta…': 'Type your question…', 'Tu mensaje': 'Your message', 'Enviar': 'Send',
  'Diseñado por': 'Designed by',
  'Hola Pablo, te escribo para pedir presupuesto.': 'Hi Pablo, I’m getting in touch to request a quote.',
  'Hola Pablo, te escribo para pedir presupuesto para lo siguiente:': 'Hi Pablo, I’m getting in touch to request a quote for the following:'
};
function t(s){ return LANG === 'en' && EN[s] ? EN[s] : s; }
(function(){
  document.documentElement.lang = LANG;
  [].forEach.call(document.querySelectorAll('#idioma button'), function(b){
    b.setAttribute('aria-pressed', b.dataset.l === LANG);
    b.addEventListener('click', function(){
      if(b.dataset.l === LANG) return;
      try { localStorage.setItem('ps-lang', b.dataset.l); } catch(e){}
      var u = new URL(location.href); u.searchParams.set('lang', b.dataset.l); location.replace(u);
    });
  });
  if(LANG !== 'en') return;
  document.title = t(document.title);
  var md = document.querySelector('meta[name=description]'); md.content = t(md.content);
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
  while((n = w.nextNode())){
    var k = n.nodeValue.trim();
    if(k && EN[k]) n.nodeValue = n.nodeValue.replace(k, EN[k]);
  }
  [].forEach.call(document.querySelectorAll('[alt],[aria-label],[placeholder]'), function(el){
    ['alt', 'aria-label', 'placeholder'].forEach(function(a){ var v = el.getAttribute(a); if(v && EN[v]) el.setAttribute(a, EN[v]); });
  });
})();
(function(){
  var quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar = document.getElementById('bar');
  var portada = document.getElementById('inicio');
  var foto = document.getElementById('fotoPortada');
  var centro = document.getElementById('centroPortada');
  var sec = document.getElementById('servicios');
  var escena = sec.querySelector('.escena');
  var pantallaCompacta = matchMedia('(max-width: 760px), (pointer: coarse)');
  var paneles = [].slice.call(escena.querySelectorAll('.panel'));
  var cuadros = paneles.map(function(panel){
    return {imagen:panel.firstElementChild, progreso:null, visible:null, fundido:null};
  });
  var puntos = [].slice.call(sec.querySelectorAll('.indice button'));
  var N = paneles.length, pend = false;
  var rev = [].slice.call(document.querySelectorAll('.revela'));
  function lim(v){ return Math.min(1, Math.max(0, v)); }
  function pintar(){
    pend = false;
    var y = window.scrollY, vh = window.innerHeight, ph = portada.offsetHeight;
    var tarjetas = pantallaCompacta.matches || quieto;
    var r = sec.getBoundingClientRect();
    bar.classList.toggle('solida', y > ph - 70 && (tarjetas || !(r.top < 60 && r.bottom > 60)));
    if(!tarjetas && y < ph){
      var t = y / ph;
      foto.style.transform = 'translateY(' + (y * 0.28) + 'px) scale(' + (1 + t * 0.12) + ')';
      centro.style.transform = 'translateY(' + (y * -0.18) + 'px)';
      centro.style.opacity = Math.max(0, 1 - t * 1.7);
    }
  var recorrido = sec.offsetHeight - escena.offsetHeight;
  var f = lim(-r.top / recorrido) * (N - 1);
  var fundido = pantallaCompacta.matches || quieto;
  paneles.forEach(function(panel, k){
    var cuadro = cuadros[k];
    var a = k === 0 || f >= k - 0.2 ? 1 : lim((f - k + 0.8) / 0.6);
    var visible = a > 0 && (k + 1 === N || f < (k + 1) - 0.2);
    if (cuadro.visible !== visible) {
      panel.style.visibility = visible ? 'visible' : 'hidden';
      panel.inert = !visible;
      cuadro.visible = visible;
    }
    if (cuadro.progreso === a && cuadro.fundido === fundido) return;
    cuadro.progreso = a;
    cuadro.fundido = fundido;
    panel.style.opacity = '';
    panel.style.clipPath = fundido || a === 1 ? '' : 'inset(' + ((1 - a) * 100) + '% 0 0 0)';
    cuadro.imagen.style.transform = fundido || a === 1 ? '' : 'scale(' + (1.1 - 0.1 * a) + ')';
  });
    rev = rev.filter(function(el){
      if(quieto || el.getBoundingClientRect().top < vh * 0.85){ el.classList.add('dentro'); return false; }
      return true;
    });
    var act = Math.round(f);
    puntos.forEach(function(b, k){ b.classList.toggle('activo', k === act); });
  }
  function alScroll(){ if(!pend){ pend = true; requestAnimationFrame(pintar); } }
  window.addEventListener('scroll', alScroll, {passive:true});
  window.addEventListener('resize', alScroll);
  pintar();
  puntos.forEach(function(b, k){
    b.addEventListener('click', function(){
      var rec = sec.offsetHeight - escena.offsetHeight;
      var top = sec.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({top: top + rec * (k / (N - 1)), behavior: quieto ? 'auto' : 'smooth'});
    });
  });
  /* Número del chef con prefijo internacional, sin + ni espacios. */
  var WA_NUM = '34628994399';
  function wa(texto){ return 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(texto); }

  var sel = {servicio:'', comensales:'', lugar:'', fecha:''};
  var enlacesPresupuesto = document.querySelectorAll('#wa-minuta, .wa-gen');
  function fechaBonita(v){ var p = v.split('-'); return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : ''; }
  function minuta(){
    Object.keys(sel).forEach(function(k){
      var dd = document.getElementById('m-' + k);
      dd.textContent = sel[k] || t('Por elegir');
      dd.classList.toggle('vacio', !sel[k]);
    });
    var mensaje = mensajePresupuesto();
    var enlace = wa(mensaje);
    var enlaceWeb = new URL('https://web.whatsapp.com/send');
    enlaceWeb.searchParams.set('phone', WA_NUM);
    enlaceWeb.searchParams.set('text', mensaje);
    document.getElementById('wa-web-minuta').href = enlaceWeb.href;
    enlacesPresupuesto.forEach(function(a){ a.href = enlace; });
    document.getElementById('wa-estado').hidden = true;
    enlaceChat();
  }
  function mensajePresupuesto(){
    var campos = {servicio:'Servicio', comensales:'Comensales', lugar:'Lugar', fecha:'Fecha'};
    var detalles = Object.keys(campos).filter(function(k){ return sel[k]; }).map(function(k){
      return '*' + t(campos[k]) + ':* ' + sel[k];
    });
    if (!detalles.length) return t('Hola Pablo, te escribo para pedir presupuesto.');
    return t('Hola Pablo, te escribo para pedir presupuesto para lo siguiente:') + '\n\n' + detalles.join('\n');
  }
  [].forEach.call(document.querySelectorAll('.chip'), function(c){
    c.addEventListener('click', function(){
      var g = c.dataset.g, ya = c.getAttribute('aria-pressed') === 'true';
      [].forEach.call(document.querySelectorAll('.chip[data-g="' + g + '"]'), function(o){ o.setAttribute('aria-pressed', 'false'); });
      c.setAttribute('aria-pressed', ya ? 'false' : 'true');
      sel[g] = ya ? '' : c.textContent;
      minuta();
    });
  });
  document.getElementById('d-fecha').addEventListener('input', function(e){ sel.fecha = fechaBonita(e.target.value); minuta(); });

  /* Asistente: respuestas automáticas escritas aquí (sin servicio externo). Nunca da precios y siempre lleva a WhatsApp. */
  var chat = document.getElementById('chat'), flot = document.getElementById('flot'), hilo = document.getElementById('hilo');
  var sug = document.getElementById('sug'), campo = document.getElementById('chat-texto'), waChat = document.getElementById('wa-chat');
  var mias = [], ocupado = false, iniciado = false;
  var R = {
    es: {
      hola: 'Hola, soy el asistente de Pablo. Cuéntame qué celebración tienes en mente o pregúntame por sus servicios.',
      sug: ['¿Qué servicios ofrece?', 'Quiero un arroz en mi villa', '¿En qué zonas trabaja?'],
      precio: 'Cada propuesta se prepara a medida, así que el presupuesto te lo da Pablo personalmente. Pulsa el botón de abajo y escríbele por WhatsApp con la fecha, el lugar y cuántos seréis.',
      zona: 'Pablo trabaja en Marbella, Málaga y alrededores. Para otros destinos, consúltalo con él por WhatsApp.',
      arroz: 'Los arroces son su especialidad y los cocina a la vista de tus invitados: presa ibérica, foie y setas, negro con carabineros, vieiras y carabinero… ¿Para cuántas personas sería?',
      catering: 'El catering exclusivo incluye bocados preparados al momento y tablas de quesos e ibéricos, en casa, en la villa o en el barco. ¿Qué celebración es?',
      cena: 'En las cenas privadas Pablo diseña un menú para ti, con minuta propia y servicio de sala, y deja la cocina recogida al terminar. ¿Cuántos seréis?',
      desayuno: 'Los desayunos se sirven en casa: fruta cortada al momento, bollería recién hecha, huevos al gusto y café. ¿Qué día lo quieres?',
      evento: 'Pablo organiza cumpleaños, aniversarios, bodas íntimas y encuentros de empresa: menú, montaje y equipo. ¿Para cuántas personas sería?',
      dieta: 'Sí, Pablo adapta el menú a alergias, intolerancias y dietas vegetarianas o veganas. Indícaselo en tu mensaje de WhatsApp.',
      fecha: 'La disponibilidad depende de la agenda de Pablo. Escríbele por WhatsApp con la fecha y te confirma enseguida.',
      personas: 'Pablo cocina tanto para cenas íntimas de 2 personas como para eventos de más de 50. Cuéntale cuántos seréis por WhatsApp.',
      gracias: '¡A ti! Cuando quieras, pulsa el botón de abajo y Pablo te responde personalmente.',
      servicios: 'Pablo ofrece arroces, catering exclusivo, cenas privadas, desayunos y eventos a medida. ¿Qué celebración tienes en mente?',
      saludo: '¡Hola! ¿Qué celebración estás preparando? Te cuento cómo puede ayudarte Pablo.',
      otro: 'Eso te lo confirma Pablo personalmente. Pulsa el botón de abajo y escríbele por WhatsApp; cuéntale la fecha, el lugar y cuántos seréis.'
    },
    en: {
      hola: 'Hi, I am Pablo’s assistant. Tell me what you are celebrating or ask me about his services.',
      sug: ['What services does he offer?', 'I want a paella at my villa', 'Which areas does he cover?'],
      precio: 'Every proposal is made to measure, so Pablo gives you the quote personally. Tap the button below and message him on WhatsApp with the date, the venue and how many guests.',
      zona: 'Pablo works in Marbella, Málaga and the surrounding area. For other destinations, ask him on WhatsApp.',
      arroz: 'Paellas are his speciality and he cooks them in front of your guests: Iberian pork, foie and mushrooms, black rice with red prawns, scallops and red prawn… How many guests would it be for?',
      catering: 'Exclusive catering includes bites made to order and cheese and Iberian ham boards, at home, at the villa or on the boat. What is the occasion?',
      cena: 'For private dinners Pablo designs a menu for you, with its own menu card and table service, and leaves the kitchen clean afterwards. How many guests?',
      desayuno: 'Breakfasts are served at home: fruit cut to order, freshly baked pastries, eggs your way and coffee. Which day would you like it?',
      evento: 'Pablo organises birthdays, anniversaries, intimate weddings and corporate gatherings: menu, set-up and team. How many guests would it be for?',
      dieta: 'Yes, Pablo adapts the menu to allergies, intolerances and vegetarian or vegan diets. Just mention it in your WhatsApp message.',
      fecha: 'Availability depends on Pablo’s calendar. Message him on WhatsApp with the date and he will confirm straight away.',
      personas: 'Pablo cooks for intimate dinners for 2 as well as events of more than 50. Tell him how many guests on WhatsApp.',
      gracias: 'You are welcome! Whenever you are ready, tap the button below and Pablo will reply personally.',
      servicios: 'Pablo offers paellas, exclusive catering, private dinners, breakfasts and bespoke events. What are you celebrating?',
      saludo: 'Hello! What are you planning? I can tell you how Pablo can help.',
      otro: 'Pablo will confirm that personally. Tap the button below and message him on WhatsApp with the date, the venue and how many guests.'
    }
  }[LANG];
  var REGLAS = [
    ['precio', /preci|cuest|cost|presupuest|tarifa|cu[aá]nto|euro|€|price|quote|how much|rate/],
    ['dieta', /alerg|intoler|vegan|vegetar|celiac|gluten|lactos|diet|allerg/],
    ['arroz', /arro|paella|rice/],
    ['catering', /catering|canap|aperitiv|bocado|tapa|finger/],
    ['desayuno', /desayun|brunch|breakfast/],
    ['cena', /cena|cenar|dinner|menú|menu/],
    ['evento', /evento|boda|cumple|aniversar|empresa|fiesta|celebra|event|wedding|birthday|party|corporate/],
    ['zona', /zona|d[oó]nde|marbella|m[aá]laga|desplaz|estepona|benalm|fuengirola|mijas|sotogrande|where|area|travel/],
    ['fecha', /fecha|disponib|d[ií]a|cu[aá]ndo|reserv|date|availab|when|book/],
    ['personas', /persona|invitad|comensal|gente|guest|people/],
    ['gracias', /gracias|thank|perfecto|genial|great/],
    ['servicios', /servici|ofrece|hace|service|offer/],
    ['saludo', /^(hola|buenas|hey|hello|hi)\b/]
  ];
  function responde(q){
    q = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for(var i = 0; i < REGLAS.length; i++) if(REGLAS[i][1].test(q)) return R[REGLAS[i][0]];
    return R.otro;
  }
  function burbuja(txt, quien){ var d = document.createElement('div'); d.className = 'msg ' + quien; d.textContent = txt; hilo.appendChild(d); hilo.scrollTop = hilo.scrollHeight; return d; }
  function enlaceChat(){ waChat.href = wa(mensajePresupuesto() + (mias.length ? '\n\n' + mias.join('\n') : '')); }
  function enviar(txt){
    txt = (txt || '').trim();
    if(!txt || ocupado) return;
    sug.hidden = true; campo.value = '';
    burbuja(txt, 'yo'); mias.push(txt); enlaceChat();
    var r = responde(txt), b = burbuja('···', 'ia escribe'); ocupado = true;
    setTimeout(function(){ b.className = 'msg ia'; b.textContent = r; ocupado = false; hilo.scrollTop = hilo.scrollHeight; }, 700 + Math.min(1400, r.length * 8));
  }
  var botonesChat = [].slice.call(document.querySelectorAll('.abre-chat'));
  var disparadorChat;
  function abrir(evento){
    disparadorChat = evento.currentTarget;
    botonesChat.forEach(function(b){ b.setAttribute('aria-expanded', 'true'); });
    chat.hidden = false; flot.hidden = true;
    if(!iniciado){
      iniciado = true;
      burbuja(R.hola, 'ia');
      R.sug.forEach(function(s){ var x = document.createElement('button'); x.type = 'button'; x.textContent = s; x.addEventListener('click', function(){ enviar(s); }); sug.appendChild(x); });
      enlaceChat();
    }
    if(matchMedia('(hover:hover)').matches) campo.focus();
  }
  [].forEach.call(document.querySelectorAll('.abre-chat'), function(b){ b.addEventListener('click', abrir); });
function cerrar() {
  chat.hidden = true;
  flot.hidden = false;
  botonesChat.forEach(function(b){ b.setAttribute('aria-expanded', 'false'); });
  disparadorChat.focus();
}
document.getElementById('chat-cerrar').addEventListener('click', cerrar);
chat.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrar(); });
  document.getElementById('chat-form').addEventListener('submit', function(e){ e.preventDefault(); enviar(campo.value); });
  var estadoPresupuesto = document.getElementById('wa-estado');
  function mostrarEstadoPresupuesto(mensaje){
    estadoPresupuesto.hidden = false;
    estadoPresupuesto.textContent = t(mensaje);
  }
  function prepararEnvio(evento){
    var pendiente = Object.keys(sel).find(function(campo){ return !sel[campo]; });
    if (pendiente) {
      evento.preventDefault();
      mostrarEstadoPresupuesto('Completa el servicio, los comensales, el lugar y la fecha para enviar tu propuesta.');
      var control = pendiente === 'fecha' ? document.getElementById('d-fecha') : document.querySelector('.chip[data-g="' + pendiente + '"]');
      control.focus();
      return;
    }
  }
  document.querySelectorAll('#wa-minuta, #wa-web-minuta').forEach(function(control){
    control.addEventListener('click', prepararEnvio);
  });
  minuta();
})();

(function(){
  var alternar = document.getElementById('alternar-paellas');
  var seccion = document.getElementById('paellas');
  var galeria = document.getElementById('paellas-fotos');
  var navegacion = document.querySelector('.paellas-navegacion');
  var botones = navegacion.querySelectorAll('button');
  var primera = galeria.children[0];
  var segunda = galeria.children[1];

  function actualizarBotones(){
    var maximo = galeria.scrollWidth - galeria.clientWidth;
    botones[0].disabled = galeria.scrollLeft < 2;
    botones[1].disabled = galeria.scrollLeft >= maximo - 2;
  }

  alternar.addEventListener('click', function(){
    var abrir = seccion.hidden;
    seccion.hidden = !abrir;
    alternar.setAttribute('aria-expanded', String(abrir));
    alternar.textContent = t(abrir ? 'Ocultar paellas' : 'Ver paellas');
    if (abrir) {
      actualizarBotones();
      galeria.focus({preventScroll:true});
      seccion.scrollIntoView({block:'start'});
    }
  });
  navegacion.hidden = false;
  botones.forEach(function(boton){
    boton.addEventListener('click', function(){
      var paso = segunda.offsetLeft - primera.offsetLeft;
      galeria.scrollBy({
        left: paso * Number(boton.dataset.paellas),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  });
  galeria.addEventListener('scroll', actualizarBotones, {passive:true});
  window.addEventListener('resize', actualizarBotones);
  actualizarBotones();
})();
