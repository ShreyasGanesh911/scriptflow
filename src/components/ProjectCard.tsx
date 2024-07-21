
import CardDropDown from './CardDropDown'
type Props = {
    title:string,
    html:string,
    css:string,
    js:string,
    admin:boolean,
    id:string
}
export default function ProjectCard({title,html,css,js,admin,id}:Props) {
  const srcDoc = `
          <html>
          <body>${html}</body>  
          <style>${css}</style>
           <script>${js}</script>
          </html>
      `
      
  return (
    <>
        <div className=" rounded m-3 2xl:w-72 2xl:h-72 lg:h-64 lg:w-64">
          <div className="w-full h-5/6  bg-white">
          <iframe className='border w-full h-full overflow-y-hidden '  scrolling='no' sandbox="allow-scripts" srcDoc={srcDoc} title='HTML CSS JS'/>
          </div>
          <div className="h-1/6 w-full flex bg-black border border-slate-800 ">
          <p className={`${admin ? "w-3/4": "w-11/12"} pl-2 h-full flex items-center truncate`}>{title}</p>
          {
            admin ?<CardDropDown type='project' id={id}/>:<></>
          }
          </div>
          </div> 
    </>
  )
}
