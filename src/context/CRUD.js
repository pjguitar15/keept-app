import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
export const DiaryData = React.createContext()
export const CreateEntry = React.createContext()
export const NameValue = React.createContext()
export const TitleValue = React.createContext()
export const TextAreaValue = React.createContext()
const CRUD = ({ children }) => {
  const [data, setData] = useState([])
  const [nameValue, setNameValue] = useState('')
  const [titleValue, setTitleValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const history = useHistory()
  const createEntry = (e) => {
    e.preventDefault()
    Axios.post('https://keept-app.herokuapp.com/api/diary/post', {
      name: nameValue,
      title: titleValue,
      content: textAreaValue
    })
    console.log('Data sent')
    setNameValue('')
    setTitleValue('')
    setTextAreaValue('')
    history.goBack()
  }
  useEffect(() => {
    Axios.get('https://keept-app.herokuapp.com/api/diary/read').then(res => setData(res.data))
  }, [data])
  return (
    <CreateEntry.Provider value={createEntry}>
      <TitleValue.Provider value={[titleValue, setTitleValue]}>
        <TextAreaValue.Provider value={[textAreaValue, setTextAreaValue]}>
          <NameValue.Provider value={[nameValue, setNameValue]}>
            <DiaryData.Provider value={[data, setData]}>
              {children}
            </DiaryData.Provider>
          </NameValue.Provider>
        </TextAreaValue.Provider>
      </TitleValue.Provider>
    </CreateEntry.Provider>
  )
}

export default CRUD
