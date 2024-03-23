import {useForm} from 'react-hook-form'
import {useParams} from 'react-router-dom'
import {useTasks} from '../context/TaskContext'


const TaskFormPage = () => {
    const {handleSubmit} = useForm()
    const params = useParams()
    const {createTask} = useTasks()

    const onSubmit = handleSubmit((data) => {
        try{
            // if(params.id){
            //     updateTask(params.id, data)
            // } else {
            //     console.log(data)
            //     createTask(data)
            // }
            createTask(data)
        } catch (e){
            console.log(e)
        }
    })

    return (
        <div>
            TaskFormPage view is correctly!

            <form onSubmit={onSubmit}>
                <label htmlFor="finca">Seleccione la finca</label>
                <input type="text" name="finca"/> 

                <label htmlFor="production">Cantidad producida (en kilogramos)</label>
                <input type="number" name="description" placeholder='Escriba solamente la cantidad en numero (sin kg, cajas, etc)' />

                <label htmlFor="information">Informacion extra</label>
                <input type="text" name='information' placeholder='¿Algo que añadir?'/>

                <label htmlFor="date">Fecha</label>
                <input type="text" name='date' placeholder='Formato: DD/MM/AAAA' />

                <button type='submit'>Guardar!</button>
            </form>
        </div>
        )
}

export default TaskFormPage