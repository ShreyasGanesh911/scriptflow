import React from 'react'
import type { RootState } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { languageSetter } from '../Redux/Slice/Language'
type Props = {
    error : boolean,
    value : string[] | undefined
}

export default function Output({value,error}:Props) {
    const language = useSelector((state: RootState) => state.language.value)
    const dispatch = useDispatch()
  return (
    <>
    <div className={` my-2 p-5 w-full bg-slate-800 border-2 text-white h-96 ${error ? 'border-red-500' :''}`}>
        {value?.map(e=><p>{e}</p>)}
     </div>
    </>
  )
}
