'use client'

import { Form } from '@/components/Form'
import { useEffect, useState } from 'react'

interface EditUserType {
  name: string,
  birthday: Date,
  gender: string
}

async function editUser(body: EditUserType, id: string) {
  const res = await fetch(`https://nest-prueba-tecnica-production.up.railway.app/api/v1/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),

  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response))

  return res
}



export default function EditUsuario({ params }: { params: { id: string } }) {

  const [name, setName] = useState<string>('')
  const [birthday, setBirthday] = useState<string>((new Date().toDateString()))
  const [gender, setGender] = useState<string>('')


  async function getUser(id: string) {
    const res = await fetch(`https://nest-prueba-tecnica-production.up.railway.app/api/v1/users/${id}`)
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    return res.json()

  }
  const resetForm = () => {
    setName('')
    setBirthday((new Date().toDateString()))
    setGender('')
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    editUser({
      name: name,
      birthday: new Date(birthday),
      gender: gender
    }, params.id)

    resetForm()
  }

  useEffect(() => {

    getUser(params.id).then((res) => {
      setName(res.name)
      setBirthday(new Date(res.birthday).toDateString())
      setGender(res.gender)
    })

  }, [])


  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Form
        handleSubmit={ handleSubmit }
        properties={ { name, birthday, gender } }
        setName={ setName }
        setBirthdate={ setBirthday }
        setGender={ setGender }
      />
    </div>
  )

}