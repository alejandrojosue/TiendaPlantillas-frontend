import {  useState } from "preact/hooks";
import { IconCirclePlus } from "./icons/Icons";
import LinkButton from "./LinkButton";

interface Props{
  label: string
  children: any
}

export default function Expand({label, children}: Props) {
 const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div class="justify-center flex mb-5">
        <span id="btnExpand" onClick={()=>setOpen(prev=> !prev)}>
          <LinkButton size="medium">
            <IconCirclePlus width="25" height="25" />
            <div dangerouslySetInnerHTML={{__html: label}}></div>
          </LinkButton>
        </span>
      </div>
      <div
        id="containerExpand"
        class={`w-full z-10 ${open ? '' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  )
}
