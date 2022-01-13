import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../comps/Header'


export default function Contact() {
    return(
        <>
            <Header></Header>
            <div className={styles.container}>

                <form className={styles.main}>
                    <h1>Contact Form</h1>

                    <formGroup className={styles.inputGroup}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className={styles.inputField} />
                    </formGroup>

                    <formGroup className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' className={styles.inputField} />
                    </formGroup>

                    <formGroup className={styles.inputGroup}>
                        <label htmlFor='message'>Message</label>
                        <input type='text' name='message' className={styles.inputField1} />
                    </formGroup>

                    < input type='submit'/>
                </form>
            </div>
        </>
    )
}
