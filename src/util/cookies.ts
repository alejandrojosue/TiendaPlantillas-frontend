export const setCookie =
    (name: string, value: unknown) => {
      let expires = '';
      let date = new Date();
      // Establecer tiempo para 1 minuto
      date.setTime(date.getTime() + (60 * 1000));
      expires = '; expires=' + date.toUTCString();
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

// Función para obtener el valor de una cookie específica
export function getCookie(name: string): string {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name == cookiePair[0].trim()) {
      // Decodifica el valor de la cookie y retorna
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // Retorna '' si la cookie no se encuentra
  return '';
}