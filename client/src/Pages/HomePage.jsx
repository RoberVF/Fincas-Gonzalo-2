
import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskHook'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// Lo elaboro todo en el HomePage DE MOMENTO!!

const HomePage = () => {

    // ----- CreateTask -----
    const { handleSubmit, register } = useForm()
    const { createNewTask, getTasks, tasks } = useTasks()

    const navigate = useNavigate()

    const onSubmit = handleSubmit((task) => {
        try {
            createNewTask(task)
            console.log("TaskHandleSubmit task: ", task)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    })


    // ----- GetTasks -----
    const fincaName = 'tempranillo'

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getTasks(fincaName);
                console.log("Tasks: ", tasks)
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData(); // Llama a la función para cargar las tareas cuando el componente se monte
    }, [])

    return (
        <div>
            <h1>HomePage</h1>
            <h3>Incluir task</h3>
            <form onSubmit={onSubmit}>
                <input {...register('fincaName')} type="text" name='fincaName' placeholder='Finca Name' />
                <input {...register('production')} type="number" name='production' placeholder='Production' />
                <input {...register('information')} type="text" name='information' placeholder='Information' />
                <input {...register('date')} type="text" name='date' placeholder='Date' />
                <button type='submit'>Incluir</button>
            </form>

            <h3 className='mt-4'>Ver datos</h3>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <div key={index}>
                        <li>{task.fincaName}</li>
                        <li>{task.production}</li>
                        <li>{task.information}</li>
                        <li>{task.date}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default HomePage