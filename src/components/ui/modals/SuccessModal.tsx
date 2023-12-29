import { Button, Modal } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { HiCheckCircle } from 'react-icons/hi'

interface Props {
  openModal: boolean,
  setOpenModal: (value: boolean) => void
  message: string
}

export const SuccessModal = ({ message, openModal, setOpenModal }: Props) => {

  const router = useRouter()

  return (
    <Modal show={ openModal } size="md" onClose={ () => setOpenModal(false) } popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiCheckCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            { message }
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="green" className='bg-green-400 text-white' onClick={ () => {
              setOpenModal(false)
            } }>
              { "Genial" }
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}