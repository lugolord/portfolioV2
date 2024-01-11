import { ToastContainer } from 'react-toastify'

export default function MailToast () {
  return (
    <ToastContainer
      limit={1}
      position='bottom-center'
      autoClose={3000}
      newestOnTop={false}
      closeOnClick={false}
      pauseOnHover={false}
      rtl={false}
      draggable={false}
      hideProgressBar
      closeButton={false}
    />
  )
}
