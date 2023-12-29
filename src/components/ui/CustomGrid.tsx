'use client'

import { UserType } from '@/app/usuario/consulta/user.interface'
import { capitalize, formatDate } from '@/utils/utils'
import { Table } from 'flowbite-react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { ModalConfirm } from './modals/ModalConfirm'
import { SuccessModal } from './modals/SuccessModal'

async function deleteUser(id: string) {
  await fetch(`https://nest-prueba-tecnica-production.up.railway.app/api/v1/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res)
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response))

}

interface Props {
  users: UserType[]
}

export const CustomGrid = ({ users, }: Props) => {

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [succesModal, setSuccesModal] = useState(false)

  const deleteUsuario = async (id: string) => {
    await deleteUser(id).then(() => { setOpenModal(false); setSuccesModal(true) })
  }

  return (
    <div className="overflow-x-auto mt-10">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>id</Table.HeadCell>
          <Table.HeadCell>Nombre de usuario</Table.HeadCell>
          <Table.HeadCell>Fecha de Nacimiento</Table.HeadCell>
          <Table.HeadCell>Genero</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            users.map((user: UserType) => (
              <Fragment key={ user._id }>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={ `row-${user._id}` }>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    { user._id }
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    { capitalize(user.name) }
                  </Table.Cell>
                  <Table.Cell>{ formatDate(user.birthday) }</Table.Cell>
                  <Table.Cell>{ user.gender }</Table.Cell>
                  <Table.Cell>
                    <Link href={ `consulta/${user._id}` } className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={ () => setOpenModal(true) }>
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
                <ModalConfirm message='Esta seguro de borrar este usuario' onConfirm={ () => deleteUsuario(user._id) } openModal={ openModal } setOpenModal={ setOpenModal } key={ `modal-${user._id}` } />
                <SuccessModal openModal={ succesModal } setOpenModal={ setSuccesModal } message={ 'Usuario borrado correctamente' } />

              </Fragment>
            ))
          }


        </Table.Body>
      </Table>
    </div>
  )
}