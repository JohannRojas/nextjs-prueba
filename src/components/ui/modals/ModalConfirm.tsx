import { Button, Modal } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

interface Props {
  openModal: boolean,
  setOpenModal: (value: boolean) => void
  id: string
  message: string
}

export const ModalConfirm = ({ message, openModal, setOpenModal, id }: Props) => {


  async function deleteUser(id: string) {

    const res = await fetch(`https://nest-prueba-tecnica-production.up.railway.app/api/v1/users/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    return res.status
  }

  return (
    <Modal show={ openModal } size="md" onClose={ () => setOpenModal(false) } popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            { message }
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={ () => {
              deleteUser(id)
              setOpenModal(false)

            } }>
              { "Si, estoy seguro" }
            </Button>
            <Button color="gray" onClick={ () => setOpenModal(false) }>
              No, cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}