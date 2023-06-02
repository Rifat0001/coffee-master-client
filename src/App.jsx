
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-40 py-8'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
        }
      </div>


    </>
  )
}

export default App
