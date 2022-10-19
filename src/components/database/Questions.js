import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, btnText, projectData }){
    const [categories, setCategories]= useState([])
    const [project, setProject]= useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/questions', {
            method:'GET',
            headers: {
                'Content-Type':'application/json',
            },
        })

        .then((resp) => resp.json())
        .then ((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    
    }

    function handleCategory(e) {
      setProject({
        ...project,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }


    return (
        <form onSubmit={submit}>
            <Input
             type="text"
             text="question"
             name="question"
             placeholder="question"
             handleOnChange={handleChange}
             value={project.question ? project.question : ''}
            />

            <Input
             type="text"
             text="Nome do Projeto"
             name="name"
             placeholder="Insira o Nome do Projeto"
             handleOnChange={handleChange}
             value={project.name ? project.name : ''}
            />
            


            
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm