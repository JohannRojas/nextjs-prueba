
interface Props {
  text: string
  color?: 'primary' | 'secondary' | 'white'
  variant: 'solid' | 'outline' | 'ghost'
  onClick: () => void
}

export const CustomButton = ({ text, variant, onClick, color = 'primary' }: Props) => {

  const variants = {
    solid: `bg-${color} text-primary-foreground shadow hover:bg-primary/90`,
    outline: `border border-${color} text-${color} hover:bg-${color} hover:bg-opacity-10`,
    ghost: `text-${color} hover:bg-${color} hover:bg-opacity-10`
  }

  const colors = {
    primary: 'bg-primary text-black',
    secondary: 'bg-secondary text-secondary-foreground',
    white: 'bg-white text-gray-900 '
  }

  return (
    <button
      onClick={ () => onClick() }
      className={ `${variants[variant]} inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${colors[color]} text-primary-foreground shadow h-9 px-4 py-2` }>
      { text }
    </button>
  )
}