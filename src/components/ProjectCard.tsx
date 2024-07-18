
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
        <div className="border m-3 w-72 h-72">
          <div className="w-full h-5/6 bg-red-50">
          <iframe className='border w-full h-full overflow-y-hidden '  scrolling='no' sandbox="allow-scripts" srcDoc={srcDoc} title='HTML CSS JS'/>
          </div>
          <div className="h-1/6 w-full flex">
          <p className="w-3/4 h-full flex items-center truncate">{title}</p>
          {
            admin ?<CardDropDown type='project' id={id}/>:<p className="w-1/4 h-full text-center border">Like</p>
          }
          </div>
          </div> 
    </>
  )
}
