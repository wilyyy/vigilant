import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../comps/Header'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ReturnUpBack } from '@styled-icons/ionicons-outline/ReturnUpBack';

const Page = styled(motion.div)``;

const BackIcon = styled(ReturnUpBack)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 2;
  left: 1.5%;
  top: 1.5%;
  background-color: #FF6700;
  border-radius: 25px;
  padding: 5px;

  :hover{
    background-color: #FFA161;
  }
`;

export default function Contact() {
    const router = useRouter();

    return(
        <Page
            initial="pageInitial" 
            animate="pageAnimate" 
            variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
            }}
        >
            <BackIcon onClick={() => router.push("/Map")}/>
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
        </Page>
    )
}
