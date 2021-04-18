import React from 'react';
import styles from '../../css/signIn.module.css';

function SignIn() {
    return(
      <React.Fragment>
        <div className={styles.signIn}>
          <form>
            <p>E-Mail:</p>
            <input type='email' placeholder='Enter your email' />
            <input type='passwor' placeholder='Enter your Password' />
          </form>
        </div>
      </React.Fragment>
    )
}

export default SignIn;