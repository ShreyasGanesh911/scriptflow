import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
  value: string | null | void
}

const initialState: LanguageState = {
  value: localStorage.getItem('selectedLanguage')? localStorage.getItem('selectedLanguage') : localStorage.setItem('selectedLanguage','javascript')
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageSetter : (state, action: PayloadAction<string>)=>{
        localStorage.setItem('selectedLanguage',action.payload)
        state.value = action.payload
    },
  },
})

export const {languageSetter} = languageSlice.actions

export default languageSlice.reducer