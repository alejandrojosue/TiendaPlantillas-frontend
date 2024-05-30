export function isEmpty (values:unknown[]):Boolean{
 return values.includes(null) || values.includes(undefined) || values.includes('')
}