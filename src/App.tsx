import Nav from './components/Nav'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='px-6 pt-9 pb-4 font-raleway relative'>
      <Nav />
      <main className='mt-12 max-w-2xl mx-auto'>
        <Home />
      </main>
    </div>
  )
}
