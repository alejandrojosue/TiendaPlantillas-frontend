import type { Project } from '../../types/api';
import { setCookie } from '../../util/cookies';
import CategoryTag from '../CategoryTag';
import { IconTablerCoin, IconTablerEmailFilled, IconTablerEyeFilled } from '../icons/Icons';
import LinkButton from '../common/LinkButton';
import ReaderMarkdown from '../ReaderMarkdown';

/**
 * Props del componente CardProject.
 * Extiende la interfaz Project con una propiedad opcional isProfile.
 */
interface Props extends Project {
  isProfile?: boolean; // Indica si el proyecto se muestra en un perfil de usuario
}

/**
 * Componente funcional que muestra un proyecto en forma de tarjeta.
 * @param id Identificador único del proyecto.
 * @param title Título del proyecto.
 * @param description Descripción del proyecto en formato markdown.
 * @param categories Arreglo de categorías asociadas al proyecto.
 * @param unitPrice Precio unitario del proyecto.
 * @param customer Información del cliente que publicó el proyecto.
 * @param status Estado actual del proyecto.
 * @param createdAt Fecha y hora de publicación del proyecto.
 * @param isProfile Indica si el proyecto se muestra en un perfil de usuario.
 */
export default function CardProject({
  id,
  title,
  description,
  categories,
  unitPrice,
  customer,
  status,
  createdAt,
  isProfile,
}: Props) {
  
  /**
   * Función para actualizar las cookies con la información de contacto del proyecto.
   * @param recipientEmail Correo electrónico del destinatario de la solicitud de contacto.
   * @param senderEmail Correo electrónico del remitente de la solicitud de contacto.
   * @param projectTitle Título del proyecto.
   * @param projectID Identificador único del proyecto.
   * @param customerName Nombre de usuario del cliente que publicó el proyecto.
   */
  const updateCookie = ({
    recipientEmail,
    senderEmail,
    projectTitle,
    projectID,
    customerName,
  }: {
    recipientEmail: string;
    senderEmail: string;
    projectTitle: string;
    projectID: string;
    customerName: string;
  }) => {
    setCookie('recipientEmail', recipientEmail);
    setCookie('senderEmail', senderEmail);
    setCookie('projectTitle', projectTitle);
    setCookie('projectID', projectID);
    setCookie('customerName', customerName);
  };

  return (
    <div class="p-4 mb-5 rounded-md border-2 w-full border-gray-400 dark:border-gray-400">
      {/* Título del proyecto */}
      <h1 class="text-gray-600 dark:text-white capitalize">{title}</h1>

      {/* Información de publicación y precio */}
      <div class="flex flex-col justify-between items-center lg:flex-row gap-3">
        <p class="font-semibold text-gray-300 dark:text-gray-600">
          Publicado el {createdAt!.split(',')[0]} a las {createdAt!.split(',')[1]}
        </p>
        <strong class="text-gray-600 bg-gray-200 dark:bg-gray-800 dark:text-white px-2 py-1 rounded flex items-center">
          <IconTablerCoin width="25" height="25" />
          {unitPrice}
        </strong>
      </div>

      {/* Descripción del proyecto */}
      <p class="my-1 text-justify line-clamp-5 text-gray-500 dark:text-gray-400">
        {/* Componente ReaderMarkdown para renderizar la descripción en formato markdown */}
        <ReaderMarkdown description={description} />
      </p>

      {/* Etiquetas de categoría */}
      <div class="flex flex-wrap gap-1 my-2 mb-3">
        {categories.map(({ categoryName }) => (
          <CategoryTag size="small" categoryName={categoryName} />
        ))}
      </div>

      {/* Separador horizontal */}
      <hr />

      {/* Sección de botones y detalles adicionales */}
      <div class="flex flex-col lg:flex-row mt-2 items-center justify-between">
        <div>
          {/* Botón para contactar al cliente */}
          {!isProfile && (
            <span
              onClick={() =>
                updateCookie({
                  recipientEmail: customer.email + '',
                  senderEmail: 'josued.ad13@gmail.com',
                  customerName: customer.username as string,
                  projectID: id + '',
                  projectTitle: title,
                })
              }
            >
              <LinkButton link="/user/contact" size="small">
                <IconTablerEmailFilled width="25" height="25" />
                Contactar
              </LinkButton>
            </span>
          )}

          {/* Botón para leer más detalles del proyecto */}
          <LinkButton link={`/projects/${id}`} size="small">
            <IconTablerEyeFilled width="25" height="25" />
            Leer más
          </LinkButton>
        </div>

        {/* Información adicional dependiendo del contexto */}
        {isProfile ? (
          <p class="dark:text-gray-500">
            <span class="font-semibold">Estado:</span>{' '}
            {/* Estilo condicional basado en el estado del proyecto */}
            <span
              class={`font-semibold ${
                status.toString() === 'Finished' ? 'text-red-700' : 'text-sky-600'
              }`}
            >
              {status}
            </span>
          </p>
        ) : (
          <p class="dark:text-gray-500">
            <span class="font-semibold">Publicado por:</span> {customer?.username}
          </p>
        )}
      </div>
    </div>
  );
}
