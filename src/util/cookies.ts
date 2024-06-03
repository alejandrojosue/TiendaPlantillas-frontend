export function setCookie(name:string, value:string) {
 const now = new Date();
 const expirationTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutos en milisegundos
 document.cookie = `${name}=${value}; expires=${expirationTime.toUTCString()}; path=/`;
}
