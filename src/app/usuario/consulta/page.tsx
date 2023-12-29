
import { CustomGrid } from '@/components/ui/CustomGrid'

async function getUsers() {
  const res = await fetch('https://nest-prueba-tecnica-production.up.railway.app/api/v1/users')
  if (!res.ok) throw new Error('Error al obtener los usuarios')

  return res.json()
}

export default async function Consulta() {

  const users = await getUsers()

  return (
    <div className="min-h-screen mx-6">
      <CustomGrid users={ users } />
    </div>
  )
}