import { Datepicker, Label } from 'flowbite-react'

interface Props {
  setValue: (value: string) => void
  value: string
}

export const CustomDatePicker = ({ value, setValue }: Props) => {

  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="fecha de nacimiento" value="Fecha de nacimiento" />
      </div>
      <Datepicker
        value={ value }
        name='birthdate'
        labelTodayButton='Hoy'
        labelClearButton='Limpiar'
        maxDate={ new Date() }
        showTodayButton={ false }
        onSelectedDateChanged={ (e) => {
          setValue(e.toDateString())
        } }
        theme={ {
          root: {
            base: "!mt-2",
          }
        } }
      />
    </>
  )
}