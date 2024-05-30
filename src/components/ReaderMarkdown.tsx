import '../css/ReaderMarkdown.css'
export default function ReaderMarkdown({description}:{description?:string}) {

 return(
 <div id="reader-markdown-component" class="text-justify my-2" dangerouslySetInnerHTML={{__html: description + ''}}>
 </div> 
)
}
