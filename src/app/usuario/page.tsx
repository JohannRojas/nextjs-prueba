'use client'

import { Form } from '@/components/Form'
import { SuccessModal } from '@/components/ui/modals/SuccessModal'
import { useState } from 'react'
import { newUserType } from './newUser.interface'

async function saveUser(body: newUserType) {
  const res = await fetch('https://nest-prueba-tecnica-production.up.railway.app/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),

  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then(() => console.log("Success:", "Usuario Creado Correctamente"))

  return res
}



export default function Usuario() {

  const [name, setName] = useState<string>('')
  const [birthday, setBirthday] = useState<string>((new Date().toDateString()))
  const [gender, setGender] = useState<string>('')
  const [succesModal, setSuccesModal] = useState(false)

  const resetForm = () => {
    setName('')
    setBirthday((new Date().toDateString()))
    setGender('')
  }



  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {


    evt.preventDefault()

    saveUser({
      no: Math.floor(Math.random() * 1000),
      name,
      birthday: new Date(birthday),
      gender,
    }).then(() => resetForm()).finally(() => setSuccesModal(true))


  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Form
        handleSubmit={ handleSubmit }
        properties={ { name, birthday, gender } }
        setName={ setName }
        setBirthdate={ setBirthday }
        setGender={ setGender }
      />
      <SuccessModal openModal={ succesModal } setOpenModal={ setSuccesModal } message={ 'Usuario Creaado Correctamente' } />
    </div>

  )
}