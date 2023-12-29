import { Label, TextInput } from 'flowbite-react'


export const CustomInput = ({ value, setName }: { value: string, setName: (e: string) => void }) => {



  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Nombre" />
      </div>
      <TextInput
        value={ value }
        onChange={ (e) => setName(e.target.value) }
        name='name'
        id="nombre"
        type="text"
        placeholder="Jhon Doe"
        required
      />
    </div>
  )
}