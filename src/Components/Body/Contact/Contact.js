import React from 'react';
import styles from '../../../css/contact.module.css';

function Contact() {
    return(
        <div className={styles.wrapper}>
            <h2>Find us Here</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100.916211762392!2d85.31491463524047!3d27.67694125770854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198181ca4ec3%3A0x27722cdc2dfc1e2d!2sCogent%20Health%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1618656894357!5m2!1sen!2snp" title="map" allowFullScreen="" loading="lazy"></iframe>
            <h2>Contact Us</h2>
            <form className={styles.contact}>
                <table>
                    <tr>
                        <td><span>E-mail:</span></td>
                        <td><input type="email" name="email" /></td>
                    </tr>

                    <tr>
                        <td><span>Message:</span></td>
                        <td><textarea name="message"></textarea></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type="submit" value="Send" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Contact;