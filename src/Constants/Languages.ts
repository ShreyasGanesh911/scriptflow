import { snippets } from "./Snippets"

type Obj = {
    lang:string,
    version:string,
    snippet:string
}
export const languages:Obj[] = [ {lang:'java',version:'15.0.2',snippet:snippets['java']},
    {lang:'javascript',version:'18.15.0',snippet:snippets['javascript']},
    {lang:'python',version:"3.10.0",snippet:""},
    {lang:'csharp',version:"6.12.0",snippet:""},
    {lang:'php',version:"8.2.3",snippet:""},
    {lang:'typescript',version:"5.0.3",snippet:snippets['typescript']}]