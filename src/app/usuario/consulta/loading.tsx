import { Button, Spinner } from 'flowbite-react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  )
}
export default Loading