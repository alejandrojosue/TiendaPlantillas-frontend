import { useState } from 'preact/hooks';

interface Props {
  type: 'images' | '.zip'; // "images" || ".zip"
  onFilesAdded: (files: FileList) => void;
  onFilesRemoved: (index: number) => void;
}

/**
 * Componente UploadFile
 * 
 * Este componente permite al usuario subir archivos arrastrándolos y soltándolos en una zona específica,
 * o seleccionándolos mediante un input file. Valida los archivos seleccionados según el tipo y tamaño 
 * máximo permitido, muestra vistas previas de las imágenes seleccionadas y gestiona la eliminación de 
 * archivos previamente seleccionados.
 * 
 * @param {'images' | '.zip'} type - Tipo de archivos permitidos ("images" para imágenes o ".zip" para archivos ZIP).
 * @param {(files: FileList) => void} onFilesAdded - Función callback llamada cuando se agregan archivos válidos.
 * @param {(index: number) => void} onFilesRemoved - Función callback llamada cuando se elimina un archivo de las vistas previas.
 */
export default function UploadFile({ type, onFilesAdded, onFilesRemoved }: Props) {
  const MAX_FILES = type === "images" ? 3 : 1;
  const MIN_FILES = 1;
  const MAX_SIZE_FILE = type === "images" ? 0.9 : 8;
  const MAX_SIZE = MAX_SIZE_FILE * 1024 * 1024;
  
  const [highlight, setHighlight] = useState<boolean>(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  /**
   * Maneja el evento de arrastre sobre la zona de carga.
   * 
   * @param {DragEvent} e - Evento de arrastre.
   */
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setHighlight(true);
  };

  /**
   * Maneja el evento de salida de arrastre de la zona de carga.
   */
  const handleDragLeave = () => {
    setHighlight(false);
  };

  /**
   * Maneja el evento de soltar archivos en la zona de carga.
   * 
   * @param {DragEvent} e - Evento de soltar archivos.
   */
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setHighlight(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      validateFiles(e.dataTransfer.files);
    }
  };

  /**
   * Maneja la selección de archivos desde el input file.
   * 
   * @param {Event} e - Evento de selección de archivos.
   */
  const handleFileSelect = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      validateFiles(target.files);
    }
  };

  /**
   * Muestra las vistas previas de las imágenes seleccionadas.
   * 
   * @param {FileList} files - Lista de archivos seleccionados.
   */
  const previewFiles = (files: FileList) => {
    const filePreviews: string[] = [];
    if (type === '.zip') {
      setPreviews([`${files[0].name}`])
      return;
    }
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        filePreviews.push(reader.result as string);
        if (filePreviews.length === files.length) {
          setPreviews(filePreviews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  /**
   * Valida los archivos seleccionados antes de agregarlos.
   * 
   * @param {FileList} files - Lista de archivos seleccionados.
   */
  const validateFiles = (files: FileList) => {
    if (files.length < MIN_FILES || files.length > MAX_FILES) {
      setError(`Por favor, selecciona entre ${MIN_FILES} y ${MAX_FILES} archivos.`);
      return;
    }

    for (let i = 0; i < files.length; i++) {
      if (type === "images" && !files[i].type.startsWith('image/')) {
        setError(`El archivo ${files[i].name} no es una imagen válida.`);
        return;
      }

      if (type === ".zip" && files[i].type !== 'application/x-zip-compressed') {
        setError(`El archivo ${files[i].name} no es un archivo ZIP válido.`);
        return;
      }

      if (files[i].size > MAX_SIZE) {
        setError(`El archivo ${files[i].name} excede el tamaño máximo de ${MAX_SIZE_FILE} MB.`);
        return;
      }
    }

    setError('');
    onFilesAdded(files);
    previewFiles(files);
  };

  /**
   * Maneja la eliminación de una vista previa de archivo.
   * 
   * @param {number} index - Índice del archivo en las vistas previas.
   */
  const handleRemovePreview = (index: number) => {
    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
    onFilesRemoved(index);
  };

  return (
    <>
      <div
        class={`my-4 border-2 border-dashed p-4 rounded-md cursor-pointer ${highlight ? 'border-blue-500 bg-blue-100' : 'border-gray-400 bg-gray-800'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`fileInput-${type}`)?.click()}
      >
        <input
          id={`fileInput-${type}`}
          type="file"
          multiple
          class="hidden"
          onChange={handleFileSelect}
        />
        <p class="text-center text-gray-400 text-xl">Arrastra & suelta <span class="text-sky-500">{type}</span> aquí, o cliquea para seleccionar <span class="text-sky-500">{type}</span>.</p>
        <p class="text-center text-gray-500">Sube hasta {MAX_FILES} {type}, {MAX_SIZE_FILE} MB por {type}.</p>
      </div>
      <div class="flex flex-wrap mt-4 gap-4">
        {type === 'images'
          ? previews.map((preview, index) => (
            <div key={index} class="relative w-24 h-24">
              <img src={preview} alt="Preview" class="w-full h-full object-cover rounded-md shadow-md" />
              <button
                type="button"
                onClick={() => handleRemovePreview(index)}
                class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
              >
                &times;
              </button>
            </div>
          ))
          : <span class={`rounded-sm font-bold ${previews[0]?.length > 1 && 'p-2 border border-gray-400'} text-gray-400`}>{previews[0]}</span>}
      </div>
      {error && <p class="text-red-500">{error}</p>}
    </>
  );
}