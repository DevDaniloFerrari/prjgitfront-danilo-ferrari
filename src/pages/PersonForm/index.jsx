import React from 'react'
import { addPerson } from '../../shared/services/people.service'
import { useForm } from "react-hook-form";

export default function PersonForm() {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        addPerson(data)
    }


    return (
        <div>
            <input type="text" {...register("nome", { required: true })} />
            <button onClick={handleSubmit(onSubmit)}>adicionar</button>
        </div>
    )
}