import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  console.log(name)
  console.log('Component Rendered')

  const onChangeInputName = event => setName(event.target.value)

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        onChange={onChangeInputName}
        value={name}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
