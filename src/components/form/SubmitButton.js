import React from 'react'
import styles from './SubmitButton.module.scss'

function SubmitButton({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}
export default SubmitButton 