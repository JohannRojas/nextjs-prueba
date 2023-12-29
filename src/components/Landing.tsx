'use client'

import { useRouter } from 'next/navigation'
import { CustomButton } from './ui/CustomButton'

export const Landing = () => {

  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-36 lg:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Bienvenido a Digital Bank</h1>
                <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                  La solución moderna para sus necesidades bancarias. Gestione sus cuentas, haga transferencias y pague sus facturas,
                  todo desde la comodidad de su casa.
                </p>
                <div>
                  <CustomButton
                    text='Ir a Usuario'
                    variant='solid'
                    color='primary'
                    onClick={ () => router.push('/usuario') }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex justify-center items-center w-full border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Digital Bank. All rights reserved.</p>
      </footer>
    </div>
  )
}

