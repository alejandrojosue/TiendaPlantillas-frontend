export const setParam =
    (paramName: string, value: string) => {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set(paramName, value);
      const newURI = `${window.location.pathname}?${urlParams.toString()}`;
      // window.location.href = newURI; // --> Reload page
      history.pushState({}, '', newURI); // --> No reload page
    }

export const getParam = (paramName: string): string|null => {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get(paramName)
}