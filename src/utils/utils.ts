export const formatDate = (date: string): string => {
  const newDate = new Date(date)

  const opcionesDeFormato: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' }

  const formatoFecha = new Intl.DateTimeFormat('es-ES', opcionesDeFormato)
  const fechaFormateada = formatoFecha.format(newDate)

  return fechaFormateada
}

export const capitalize = (string: string): string => {
  const words = string.split(' ')
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizedWords.join(' ')
}