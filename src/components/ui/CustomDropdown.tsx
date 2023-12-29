import { Label, Select } from 'flowbite-react'

interface Props {
  value: string
  setValue: (value: string) => void
}

export const CustomDropdown = ({ setValue, value }: Props) => {

  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="Genero" value="Genero" />
      </div>
      <Select
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        name='gender'
        theme={ {
          base: "!mt-2",
        } }
      >
        <option value="" hidden>Selecciona una opción</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        <option value="otro">Otro</option>
      </Select>
    </>
  )
}