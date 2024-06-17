import '../css/ReaderMarkdown.css';

/**
 * Componente ReaderMarkdown
 * 
 * Este componente muestra contenido en formato Markdown de manera segura mediante la propiedad
 * `description`, utilizando `dangerouslySetInnerHTML` para renderizar el contenido HTML generado
 * a partir del Markdown.
 * 
 * @param {string} description - El contenido en formato Markdown que se desea renderizar.
 */
export default function ReaderMarkdown({ description }: { description?: string }) {
  return (
    <div id="reader-markdown-component" class="text-justify my-2 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: description + '' }}>
    </div>
  );
}
