import './App.css'
import { UserProfileCard } from './components/ProductDisplay/UserProfileCard'
// import { AlertBox } from './components/AlertBox/AlertBox'

function App() {

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
  }

  return (
    <div className='container m-4'>
      {/* <AlertBox
        type="success"
        message='This was a success'
        onClose={() => alert('Time to close this jawn down.')}>
        <p className='text-sm'>
          You can now continue using the application that doesn't really do anything 🫣.
        </p>
      </AlertBox> */}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Once you change your name user ${userId}, we will unneccessarily charge you to change it again.`)}>
        <div className='text-sm text-muted'>
          Last Seen before Touching Grass: 2 hours ago
        </div>
      </UserProfileCard>
    </div>
  )
}

export default App
