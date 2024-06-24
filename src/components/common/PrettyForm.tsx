import PrettyButton from "./PrettyButton";
import { IconTablerBrandTelegram } from "../icons/Icons";

interface Props {
  children: any
  header_before_form: any
  footer_after_form?: any
}

export default function PrettyForm({ header_before_form, children, footer_after_form }: Props) {
  return (<>
    <div class="mx-auto lg:max-w-lg md:max-w-sm bg-gray-100 dark:bg-slate-800 dark:text-slate-400 p-8 flex flex-col rounded-md gap-4">
      {/* Slot para contenido antes del formulario */}
      {header_before_form}

      {/* Formulario */}
      <form method="POST" class="flex flex-col">
        {/* Slot para los campos del formulario */}
        {children}
        {/* Botón de envío */}
        <PrettyButton type="submit">
          <IconTablerBrandTelegram width="35" height="35" /> Enviar
        </PrettyButton>
      </form>

      {/* Slot para contenido después del formulario */}
      {footer_after_form}
    </div>
  </>)
}


{/* Componente PrettyForm */ }
{/* 
  Este componente proporciona un formulario estilizado con soporte para slots personalizados.
  Incluye un botón de envío con un icono de Telegram.

  Slots:
  - header-before-form: Contenido que se mostrará antes del formulario.
  - default: Campos del formulario.
  - footer-after-form: Contenido que se mostrará después del formulario.
*/}


