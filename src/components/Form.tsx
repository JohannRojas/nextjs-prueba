'use client'

import { CustomDatePicker } from './ui/CustomDatePicker'
import { CustomDropdown } from './ui/CustomDropdown'
import { CustomInput } from './ui/CustomInput'

interface Props {
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  edit?: boolean
  properties: {
    name: string,
    birthday: string,
    gender: string
  }
  setName: (e: string) => void
  setBirthdate: (e: string) => void
  setGender: (e: string) => void

}

export const Form = ({ handleSubmit, properties, setName, setBirthdate, setGender }: Props) => {

  return (

    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        onSubmit={ handleSubmit }
        className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registra un nuevo usuario</h5>
        <CustomInput setName={ setName } value={ properties.name } />
        <CustomDatePicker setValue={ setBirthdate } value={ properties.birthday } />
        <CustomDropdown value={ properties.gender } setValue={ setGender } />
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrar
        </button>
      </form>
    </div>


  )
}