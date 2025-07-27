import './App.css'
import { ProductDisplay } from './components/UserProfileCard/ProductDisplay'
import { UserProfileCard } from './components/ProductDisplay/UserProfileCard'
import { AlertBox } from './components/AlertBox/AlertBox'

function App() {

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
  }

  const product = {
    id: '1',
    name: 'Wireless Dohickies',
    price: 1000000,
    description: "The coolest doodad you never knew you needed. Because to be honest, you probably didn't",
    inStock: true,
  }

  return (
    <div className='container m-4'>
      {<AlertBox
        type="success"
        message='This was a success'
        onClose={() => alert('Time to close this jawn down.')}>
        <p className='text-sm'>
          You can now continue using the application that doesn't really do anything 🫣.
        </p>
      </AlertBox>}

      {<UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Once you change your name ${userId}, we will unneccessarily charge you to change it again.`)}>
        <div className='text-sm text-muted'>
          Last Seen before Touching Grass: 2 hours ago
        </div>
      </UserProfileCard>}

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`We dont do refunds for ${productId} and charge you for the inconvenience if you try`)}>
        <div className='text-sm text-muted'>
          <p className='card-text'>Here's the info about the thing you really don't need.</p>
          <p className='card-text'>Product: {product.name}, Price: {product.price}</p>
        </div>
      </ProductDisplay>

    </div>
  )
}

export default App
