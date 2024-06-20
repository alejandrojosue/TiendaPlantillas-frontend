import { useState } from "preact/hooks";
import { IconCirclePlus } from "./icons/Icons";
import LinkButton from "./common/LinkButton";

// Definición de las propiedades que el componente Expand espera recibir
interface Props {
  label: string;
  children: preact.ComponentChildren;
}

/**
 * Componente Expand
 * 
 * Este componente permite mostrar u ocultar su contenido al hacer clic en un botón. 
 * El contenido inicial está oculto y se muestra cuando el usuario hace clic en el botón.
 * 
 * @param {string} label - El texto que se muestra en el botón de expansión.
 * @param {preact.ComponentChildren} children - El contenido que se muestra u oculta.
 */
export default function Expand({ label, children }: Props) {
  // Estado para controlar si el contenido está abierto o cerrado
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Botón de expansión */}
      <div class="justify-center flex mb-5">
        <span id="btnExpand" onClick={() => setOpen(prev => !prev)}>
          <LinkButton size="medium">
            <IconCirclePlus width="25" height="25" />
            <div dangerouslySetInnerHTML={{ __html: label }}></div>
          </LinkButton>
        </span>
      </div>

      {/* Contenedor del contenido expandible */}
      <div
        id="containerExpand"
        class={`w-full z-10 ${open ? '' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  );
}
