export const dateTimeFormat = (dateTimeISO: string): string => {
  return new Date(dateTimeISO).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true  // Para usar el formato de 12 horas
  })
}