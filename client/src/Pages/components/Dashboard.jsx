import Card from './Card'
import { useEffect } from 'react'
import { useFinca } from '../../context/Finca/FincaHook'

function Dashboard() {
    // ----- getAllFincas -----
    const { finca, getFincas } = useFinca()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getFincas()
                console.log("Finca: ", finca)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])
  return (
    <>
      <div className="min-h-full">
        <header className="shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tigh">Fincas Gonzalo App</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 m-3'>
                {finca && finca.map((oneFinca, index) => (
                    <Card key={index} name={oneFinca.name} parras={oneFinca.parras} dimentions={oneFinca.dimentions} />
                ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
