import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import { Link } from 'react-router-dom';

function QuestionForm({ handleSubmit, btnText, projectData }){
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

    return (
        <form onSubmit={submit}>
            <Input
             type="text"
             text="Question"
             name="question"
             placeholder="New Question"
             handleOnChange={handleChange}
             value={project.question ? project.question : ''}
            />
            <Input
             type="text"
             text="OptionA"
             name="optionA"
             placeholder="Option A"
             handleOnChange={handleChange}
             value={project.optionA ? project.optionA : ''}
            />
            <Input
             type="text"
             text="OptionB"
             name="optionB"
             placeholder="Option B"
             handleOnChange={handleChange}
             value={project.optionB ? project.optionB : ''}
            />
            <Input
             type="text"
             text="OptionC"
             name="optionC"
             placeholder="Option C"
             handleOnChange={handleChange}
             value={project.optionC ? project.optionC : ''}
            />
            <Input
             type="text"
             text="OptionD"
             name="optionD"
             placeholder="Option D"
             handleOnChange={handleChange}
             value={project.optionD ? project.optionD : ''}
            />

            <Input
             type="text"
             text="Answer"
             name="answer"
             placeholder="Answer"
             handleOnChange={handleChange}
             value={project.answer ? project.answer : ''}
            />
            
            <SubmitButton text={btnText}/>
            <li>
              <Link to ="/">Back to Home</Link>
            </li>
        </form>
    )
}
export default QuestionForm