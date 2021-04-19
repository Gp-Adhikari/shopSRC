import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../css/signIn.module.css';

function SignIn() {
    return(
          <form>
          <table className={styles.signIn}>
                    <tbody>
                        <tr>
                            <td align="center" colSpan="3"><h2>Log In</h2></td>
                        </tr>
                        <tr>
                            <td colSpan="3">Create An Account. <Link to="/sign-up"><span>Sign Up</span></Link></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td colSpan="3"><input type='text' name="name" /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td colSpan="3"><input type='password' name="password" /></td>
                        </tr>

                        <tr>
                            <td><input type="button" value="Login" className={styles.submit} /></td>
                        </tr>
                    </tbody>
                </table>
          </form>
    );
}

export default SignIn;