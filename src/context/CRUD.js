import React, { useState } from 'react'
export const CreateEntry = React.createContext()
export const TitleValue = React.createContext()
export const TextAreaValue = React.createContext()
const CRUD = ({ children }) => {
  const [titleValue, setTitleValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const createEntry = (e) => {
    e.preventDefault()
    console.log(titleValue)
    console.log(textAreaValue)
    setTitleValue('')
    setTextAreaValue('')
  }
  return (
    <CreateEntry.Provider value={createEntry}>
      <TitleValue.Provider value={[titleValue, setTitleValue]}>
        <TextAreaValue.Provider value={[textAreaValue, setTextAreaValue]}>
          {children}
        </TextAreaValue.Provider>
      </TitleValue.Provider>
    </CreateEntry.Provider>
  )
}

export default CRUD
