import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox'

function App() {

  return (
    <div className='container m-4'>
      <AlertBox
        type="success"
        message='This was a success'
        onClose={() => alert('Time to close this jawn down.')}>
        <p className='text-sm'>
          You can now continue using the application that doesn't really do anything 🫣.
        </p>
      </AlertBox>
    </div>
  )
}

export default App
