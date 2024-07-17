import { snippets } from "./Snippets"

type Obj = {
    lang:string,
    version:string,
    snippet:string
}
export const languages:Obj[] = [ {lang:'java',version:'15.0.2',snippet:snippets['java']},
    {lang:'javascript',version:'18.15.0',snippet:snippets['javascript']},
    {lang:'python',version:"3.10.0",snippet:snippets['python']},
    {lang:'csharp',version:"6.12.0",snippet:snippets['csharp']},
    {lang:'php',version:"8.2.3",snippet:snippets['php']},
    {lang:'typescript',version:"1.32.3",snippet:snippets['typescript']},
    {lang:'dart',version:'2.19.6',snippet:snippets['dart']},
    {lang:'elixir',version:'1.11.3',snippet:snippets['elixer']}




]