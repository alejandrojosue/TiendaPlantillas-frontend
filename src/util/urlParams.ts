export const setParam = (paramName: string, value: string) => {
 const urlParams = new URLSearchParams(window.location.search);
 urlParams.set(paramName, value);
 // Construir la nueva URL con los parámetros actualizados
 const nuevaURL = `${window.location.pathname}?${urlParams.toString()}`;

 // Redireccionar a la nueva URL
 window.location.href = nuevaURL;
}