'use client';
import { useForm } from "react-hook-form"
import React from 'react'
import api from "@/utils/axios";
import { Dragon } from "@/utils/types/dragon";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { validTypes } from "@/utils/dragonTypes";

type FormData = Dragon;

const CreateForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {


        // Essa parte do codigo trata o campo de historias, que pode ser um array ou uma string
        let historiesArray = Array.isArray(data.histories) ? data.histories : [data.histories];
        if(historiesArray.length == 1 && historiesArray[0]){
            const tempArray = historiesArray[0].split(",");
            historiesArray = tempArray;
        }
        data.histories = historiesArray.filter((history): history is string => history !== undefined);
        
        const response = await api.post("/", data);
       
        if(response.status == 201 || response.status == 200){
            toast.success('Dragão criado com sucess\n\nRedirecionando para a página do dragão em alguns segundos...');	
            setTimeout(() => {
                redirect('/dragon/'+response.data.id);
            }, 2000);
        }

        toast.error('Erro ao criar dragão');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome</label>
                <input placeholder="Nome do dragão" id="name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="type">Tipo</label>
                <select id="type" {...register("type", { required: true })}>
                    { validTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    )) }
                </select>
                {errors.type && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="histories">Lendas</label>
                <textarea placeholder="Separe as lendas de avistamento com virgulas" id="histories" {...register("histories", { required: true })} />
                {errors.histories && <span>This field is required</span>}
            </div>
            <button type="submit">Criar novo dragão</button>
        </form>
    )
}

export default CreateForm