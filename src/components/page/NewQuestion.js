import React from 'react';
import styles from './NewQuestion.module.scss';
import Questions from '../database/Questions';
import { useHistory } from 'react-router-dom';

function NewQuestion (){
    const navigate = useHistory()
    
    function createPost(question){
       // question.cost=0
       // question.services=[]

        fetch('http://localhost:5000/questions', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(question),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate.push('/questions',{ state: {message: 'Questão criada com sucesso!'}})
            })
            .catch((err) => console.log(err))
        }
    
    return (
        <div className={styles.newproject_container}>
            
            <Questions handleSubmit={createPost} btnText="Criar Questão" />
        </div>
    )
}
export default NewQuestion