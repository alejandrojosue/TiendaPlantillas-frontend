/*
 Froala es una librería UI para leer y escribir Markdown.
 La siguiente configuración define las barras de herramientas y los conjuntos de
 emoticonos para ser utilizados con Froala.
*/

// Definición de las barras de herramientas que estarán disponibles en el
// editor.

export const TOOLBARS = [
  [
    'bold', 'italic', 'underline', 'paragraphFormat', 'formatOL', 'formatUL'
  ],  // Primera fila de la barra de herramientas
  [
    'insertHR', 'undo', 'redo', 'emoticons', 'html'
  ],  // Segunda fila de la barra de herramientas
];

// Definición de los conjuntos de emoticonos disponibles en el editor.
export const EMOTICONS_SET = [
  {
    id: 'people',
    name: 'Smileys & People',
    code: '1f600',
    emoticons: [
      {code: '1f600', desc: 'Grinning face'},
      {code: '1f601', desc: 'Grinning face with smiling eyes'},
      {code: '1f602', desc: 'Face with tears of joy'},
      {code: '1f603', desc: 'Smiling face with open mouth'},
      {code: '1f604', desc: 'Smiling face with open mouth and smiling eyes'},
      {code: '1f605', desc: 'Smiling face with open mouth and cold sweat'}, {
        code: '1f606',
        desc: 'Smiling face with open mouth and tightly-closed eyes'
      },
      {code: '1f607', desc: 'Smiling face with halo'}
    ]
  },
  {
    id: 'nature',
    name: 'Animals & Nature',
    code: '1F435',
    emoticons: [
      {code: '1F435', desc: 'Monkey Face'}, {code: '1F412', desc: 'Monkey'},
      {code: '1F436', desc: 'Dog Face'}, {code: '1F415', desc: 'Dog'},
      {code: '1F429', desc: 'Poodle'}, {code: '1F43A', desc: 'Wolf Face'},
      {code: '1F431', desc: 'Cat Face'}, {code: '1F408', desc: 'Cat'},
      {code: '1F42F', desc: 'Tiger Face'}, {code: '1F405', desc: 'Tiger'},
      {code: '1F406', desc: 'Leopard'}, {code: '1F434', desc: 'Horse Face'},
      {code: '1F40E', desc: 'Horse'}, {code: '1F42E', desc: 'Cow Face'},
      {code: '1F402', desc: 'Ox'}, {code: '1F403', desc: 'Water Buffalo'}
    ]
  },
  {
    id: 'food',
    name: 'Food & Drink',
    code: '1F373',
    emoticons: [
      {code: '1F371', desc: 'Bento Box'}, {code: '1F372', desc: 'Pot of Food'},
      {code: '1F9C0', desc: 'Cheese Wedge'},
      {code: '1F375', desc: 'Teacup Without Handle'},
      {code: '1F35D', desc: 'Pizza'}, {code: '1F354', desc: 'Hamburger'},
      {code: '1F355', desc: 'French Fries'}
    ]
  },
  {
    id: 'activities',
    name: 'Activities',
    code: '26BD',
    emoticons: [
      {code: '26BD', desc: 'Soccer Ball'}, {code: '26BE', desc: 'Baseball'},
      {code: '1F3C0', desc: 'Basketball and Hoop'},
      {code: '1F3C8', desc: 'American Football'},
      {code: '1F3BE', desc: 'Tennis Racquet and Ball'},
      {code: '1F3AF', desc: 'Direct Hit'}, {code: '1F3D1', desc: 'Ping Pong'},
      {code: '1F3B1', desc: 'Billiards'}
    ]
  },
  {
    id: 'emojis-utiles',
    name: 'Emojis Útiles',
    code: '1F4AA',
    emoticons: [
      {code: '1F4AA', desc: 'Flexed Biceps'},
      {code: '1F44A', desc: 'Oncoming Fist'},
      {code: '1F440', desc: 'Eyes'},
      {code: '2602', desc: 'Umbrella with Rain Drops'},
      {code: '1F911', desc: 'Money-Mouth Face'},
      {code: '1F448', desc: 'Backhand Index Pointing Left'},
      {code: '1F449', desc: 'Backhand Index Pointing Right'},
      {code: '25B6', desc: 'Black Right-Pointing Triangle'},
      {code: '23F8', desc: 'Double Vertical Bar'},
      {code: '23EF', desc: 'Double Right-Pointing Triangle'},
      {code: '23F9', desc: 'Stop Button'},
      {code: '23FA', desc: 'Record Button'},
      {code: '23ED', desc: 'Black Right-Pointing Double Triangle'},
      {code: '23EE', desc: 'Black Left-Pointing Double Triangle'},
      {code: '23EB', desc: 'Black Left-Pointing Triangle'},
      {code: '23EC', desc: 'Black Up-Pointing Triangle'},
      {code: '1F501', desc: 'Back Arrow'},
      {code: '1F502', desc: 'End Arrow'},
      {code: '1F503', desc: 'Ahead Arrow'},
      {code: '1F504', desc: 'Back Arrow'},
      {code: '1F505', desc: 'Upwards Arrow'},
      {code: '1F506', desc: 'Downwards Arrow'},
      {code: '1F501', desc: 'Clockwise Arrows Button'},
      {code: '1F502', desc: 'Anticlockwise Arrows Button'},
      {code: '1F503', desc: 'Clockwise Small Circle Arrow Button'},
      {code: '1F3B5', desc: 'Musical Note'},
      {code: '1F514', desc: 'Bell'},
      {code: '1F4E2', desc: 'Public Address Loudspeaker'},
      {code: '1F389', desc: 'Party Popper'}
    ]
  },
  {
    id: 'otros-emojis',
    name: 'Otros Emojis',
    code: '1F680',
    emoticons: [
      {code: '1F680', desc: 'Rocket'},
      {code: '1F4E1', desc: 'Satellite Antenna'}, {code: '1F525', desc: 'Fire'}
    ]
  }
];

// Plantilla md usada para cuando crear una descripción de una plantilla

export const TEXT_EXAMPLE = `
<h2>[Nombre del Producto] - [Breve descripción del producto]</h2>
  <br>
  <p>[Nombre del Producto] es una <strong>herramienta poderosa</strong> diseñada para <em>mejorar la productividad</em> y <strong>facilitar la colaboración</strong> en tus proyectos. Con su enfoque modular y su integración perfecta con Elementor, [Nombre del Producto] te permite crear <strong>sitios web impresionantes</strong> sin necesidad de conocimientos de codificación.</p>
  <br>
  <h3>Características Principales:</h3>
  <ul>
    <li><strong>Modularidad:</strong> [Nombre del Producto] está construido sobre un enfoque modular, lo que significa que puedes personalizar y combinar diferentes elementos y estilos de diseño para crear tu propio diseño único y adaptarlo a tus necesidades específicas.</li>
    <li><strong>Totalmente Compatible con Elementor:</strong> El tema está completamente integrado con Elementor, lo que te permite crear y personalizar páginas de forma visual y sin necesidad de conocimientos de codificación.</li>
    <li><strong>Diseños Predefinidos:</strong> [Nombre del Producto] viene con una amplia variedad de diseños predefinidos y demos importables con un solo clic, que te proporcionan un punto de partida sólido para tu proyecto.</li>
    <li><strong>Optimizado para SEO:</strong> El tema está diseñado teniendo en cuenta las mejores prácticas de SEO para garantizar que tu sitio tenga una buena visibilidad en los motores de búsqueda.</li>
    <li><strong>Totalmente Responsivo:</strong> [Nombre del Producto] es totalmente receptivo y se ve genial en todos los dispositivos, desde teléfonos móviles hasta computadoras de escritorio.</li>
    <li><strong>Compatibilidad con WooCommerce:</strong> Si deseas crear una tienda en línea, [Nombre del Producto] es compatible con WooCommerce, lo que te permite vender productos y servicios directamente desde tu sitio web.</li>
  </ul>

  <p>[Nombre del Producto] es la solución perfecta para cualquier persona que desee <strong> un sitio web impresionante</strong> y funcional con WordPress y Elementor. Con su combinación de flexibilidad, facilidad de uso y potentes características, [Nombre del Producto] hace que sea fácil crear un sitio web profesional sin necesidad de conocimientos técnicos avanzados.</p>
  <br>
  <hr>
  <br>
  <p>Esta plantilla proporciona una estructura clara y fácil de seguir para crear descripciones de productos utilizando Markdown (HTML). Solo necesitas reemplazar los marcadores de posición con la información específica de tu producto.</p>
`;