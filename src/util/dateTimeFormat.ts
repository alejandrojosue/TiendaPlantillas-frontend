/**
 * The function `dateTimeFormat` takes a date and time in ISO format and returns it formatted in
 * Spanish with 12-hour clock.
 * @param {string} dateTimeISO - The `dateTimeISO` parameter in the `dateTimeFormat` function is
 * expected to be a string representing a date and time in the ISO 8601 format. This format typically
 * looks like this: "YYYY-MM-DDTHH:mm:ss.sssZ" where:
 * @returns A formatted date and time string in the Spanish (Spain) locale with the year, month, day,
 * hour, minute, and second displayed in a specific format. The time is displayed in a 12-hour format.
 */
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