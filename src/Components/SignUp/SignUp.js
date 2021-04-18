import React from 'react';
import sytles from '../../css/signUp.module.css';

function SignUp() {
    return (
            <form className={sytles.wrapper}>
                <table className={sytles.signUp}>
                    <tbody>
                        <tr>
                            <td align="center" colSpan="3"><h2>Create An Account</h2></td>
                        </tr>
                        <tr>
                            <td colSpan="3">Already have an account? <span>Log In</span></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type='text' name="name" /></td>
                        </tr>

                        <tr>
                            <td>E-Mail:</td>
                            <td><input type='email' name="email" /></td>
                        </tr>

                        <tr>
                            <td>Re-Email:</td>
                            <td><input type='email' name="re-email" /></td>
                        </tr>

                        <tr>
                            <td>Password:</td>
                            <td><input type='password' name="password" /></td>
                        </tr>

                        <tr>
                            <td>Gender:</td>
                            <td><input type="radio" name="gender" value="male" /> Male</td>
                            <td><input type="radio" name="gender" value="female" /> Female</td>
                        </tr>

                        <tr>
                            <td><input type="button" value="SignUp" className={sytles.submit} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
    );
}

export default SignUp;