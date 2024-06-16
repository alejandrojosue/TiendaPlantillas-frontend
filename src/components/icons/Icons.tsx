type Dimention = {
  width: string
  height: string
}

export const IconURL = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circles-relation mr-2"
    width={width} height={height} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
    <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
  </svg>
)

export const IconRoundedPuls = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-square-rounded-plus"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
    <path d="M15 12h-6"></path>
    <path d="M12 9v6"></path>
  </svg>
)

export const IconX = ({ width, height }: Dimention) => (
  <svg
    aria-hidden="true"
    class="btn-close"
    fill="currentColor"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    fill-rule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clip-rule="evenodd"></path></svg>
)
export const IconUserEdit = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-user-edit"
    width={width} height={height}
    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
    <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
  </svg>
)

export const IconHome = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-home-2"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="2.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
    <path d="M10 12h4v4h-4z"></path>
  </svg>
)
export const IconCertificate = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-certificate-2"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M10 7h4"></path>
    <path d="M10 18v4l2 -1l2 1v-4"></path>
    <path
      d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2"
    ></path>
  </svg>
)
export const IconInfoCircle = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-info-circle"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="2.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 9h.01"></path>
    <path d="M11 12h1v4h1"></path>
  </svg>
)
export const IconUserCircle = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-user-circle"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
    ></path>
  </svg>
)

export const IconTrash = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-trash"
    width={width} height={height}
    viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
)

export const IconTablerBrandTelegram = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-telegram"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
  </svg>
)

export const IconTablerCoin = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-coin mr-2"
    width={width} height={height} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
    fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
    <path d="M12 7v10"></path>
  </svg>
)

export const IconTablerEyeFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-eye-filled stroke-current"
    width={width} height={height} viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
  </svg>
)

export const IconTablerEmailFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-mail-filled"
    width={width} height={height}
    viewBox="0 0 24 24" stroke-width="1.5" stroke="" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" />
    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" />
  </svg>
)

export const IconSearch = () => (
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
  </svg>
)

export const IconTablerLogout = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-logout"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
    <path d="M9 12h12l-3 -3" />
    <path d="M18 15l3 -3" />
  </svg>
)

export const IconCirclePlus = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circle-plus"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
)

export const IconExpand = () => (
  <svg
    class="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"></path>
  </svg>
)

export const IconImageAlt = () => (
  <svg
    class="w-10 h-10 text-gray-200 dark:text-gray-600"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
  >
    <path
      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
    ></path>
  </svg>
)

export const IconAirBallon = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-air-balloon mb-3 mx-auto rounded-full border-slate-700 dark:border-white border-2 p-3"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M10 19m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
    ></path>
    <path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8z"
    ></path>
    <path d="M12 9m-2 0a2 7 0 1 0 4 0a2 7 0 1 0 -4 0"></path>
  </svg>
)

export const IconTablerTemplate = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-template mb-3 mx-auto rounded-full border-slate-700 dark:border-white border-2 p-3"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"
    ></path>
    <path
      d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
    ></path>
    <path d="M14 12l6 0"></path>
    <path d="M14 16l6 0"></path>
    <path d="M14 20l6 0"></path>
  </svg>
)

export const IconArrowUpFilled = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circle-arrow-up-filled"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
      stroke-width="0"
      fill="currentColor"></path>
  </svg>
)

export const IconArrowLeft = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circle-arrow-left"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
    <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
    <path d="M8 12l4 4"></path>
    <path d="M8 12h8"></path>
    <path d="M12 8l-4 4"></path>
  </svg>
)

export const IconArrowUp = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circle-arrow-up stroke-current"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 8l-4 4"></path>
    <path d="M12 8v8"></path>
    <path d="M16 12l-4 -4"></path>
  </svg>
)

export const IconArrowDown = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-circle-arrow-down stroke-current"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M8 12l4 4"></path>
    <path d="M12 8v8"></path>
    <path d="M16 12l-4 4"></path>
  </svg>
)

export const IconClose = () => (<path
  d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
  fill="currentColor"
  stroke-width="0"></path>
);


export const IconFilterAdd = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-filter-plus stroke-current"
    width={width} height={height}
    viewBox="0 0 24 24"
    stroke-width="1.5" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
)

export const IconFilterClear = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-filter-cancel stroke-current"
    width={width} height={height} viewBox="0 0 24 24"
    stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
    <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M17 21l4 -4" />
  </svg>
)

