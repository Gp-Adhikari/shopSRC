import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../css/signUp.module.css';

function SignUp() {
    return (
            <form className={styles.wrapper}>
                <table className={styles.signUp}>
                    <tbody>
                        <tr>
                            <td align="center" colSpan="3"><h2>Create An Account</h2></td>
                        </tr>
                        <tr>
                            <td colSpan="3">Already have an  account? <Link to="/log-in"><span>Log In</span></Link></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td colSpan="3"><input type='text' name="name" /></td>
                        </tr>

                        <tr>
                            <td>E-Mail:</td>
                            <td colSpan="3"><input type='email' name="email" /></td>
                        </tr>

                        <tr>
                            <td>Re-Email:</td>
                            <td colSpan="3"><input type='email' name="re-email" /></td>
                        </tr>

                        <tr>
                            <td>Password:</td>
                            <td colSpan="3"><input type='password' name="password" /></td>
                        </tr>

                        <tr>
                            <td>Gender:</td>
                            <td><input type="radio" name="gender" value="male" /> Male</td>
                            <td><input type="radio" name="gender" value="female" /> Female</td>
                        </tr>

                        <tr>
                            <td><input type="button" value="Sign Up" className={styles.submit} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
    );
}

export default SignUp;