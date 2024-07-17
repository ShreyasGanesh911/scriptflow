export type Project = {
    html :string,
    css :string,
    js :string,
    projectName: string,
    publicView : boolean 
    user : {_id: string, name: string, email: string}
    _id : string
  }

export type Snippet = {
  language :string,
  version :string,
  content :string,
  projectName: string,
  publicView : boolean 
  user : {_id: string, name: string, email: string}
  _id : string

}