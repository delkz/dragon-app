'use client';
import { useForm } from "react-hook-form"
import React from 'react'
import api from "@/utils/axios";
import { Dragon } from "@/utils/types/dragon";

type FormData = Dragon;
type EditFormProps = {
    dragon: Dragon
}


const EditForm = ({dragon}:EditFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {

        // Essa parte do codigo trata o campo de historias, que pode ser um array ou uma string
        let historiesArray = Array.isArray(data.histories) ? data.histories : [data.histories];
        if(historiesArray.length == 1 && historiesArray[0]){
            const tempArray = historiesArray[0].split(",");
            historiesArray = tempArray;
        }
        data.histories = historiesArray.filter((history): history is string => history !== undefined);
        

        const response = await api.put("/"+dragon.id, data);

        if(response.status == 201){
          console.log('Dragon created');
        }
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome</label>
                <input placeholder="Nome do dragão"  defaultValue={dragon.name} id="name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="type">Tipo</label>
                <select defaultValue={dragon.type} id="type" {...register("type", { required: true })}>
                    <option value="Fogo">Fogo</option>
                    <option value="Agua">Agua</option>
                    <option value="Terra">Terra</option>
                    <option value="Ar">Ar</option>
                    <option value="Escuridao">Escuridao</option>
                </select>
                {errors.type && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="histories">Lendas</label>
                <textarea placeholder="Separe as lendas de avistamento com virgulas" defaultValue={dragon.histories} id="description" {...register("histories", { required: true })} />
                {errors.histories && <span>This field is required</span>}
            </div>
            <button type="submit">Editar dragão</button>
        </form>
    )
}

export default EditForm