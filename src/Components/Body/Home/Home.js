import React from 'react';
import styles from '../../../css/home.module.css';

import fav from '../../../img/fav.svg';
import ImageSlider from './imageSlider';
import {SliderData} from '../../../Contexts/TrendingContext';

function Home() {
    return (
        <React.Fragment>
            <div className={styles.slideShow}>
                <ImageSlider slides={SliderData} />
            </div>

            {/* bikes */}
            <h1 className = {styles.bikeSign}>Bikes</h1>
            <div className={styles.items}>
                <div className={styles.wrapper}>
                <div className={styles.cover}>
                    <h1>Bikes</h1>
                </div>
                    <img src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className={styles.bikeCover}  alt="bike" />
                </div>

                <div className={styles.itemHolder}>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1510228093693-69337646d4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80" className={styles.bikeImg} alt="bike1" />
                        <div className={styles.description}>
                            <h2>Bike1</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="bike2" />
                        <div className={styles.description}>
                            <h2>Bike2</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="bike3" />
                        <div className={styles.description}>
                            <h2>Bike3</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="bike4" />
                        <div className={styles.description}>
                            <h2>Bike4</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80" className={styles.bikeImg} alt="bike5" />
                        <div className={styles.description}>
                            <h2>Bike5</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* cars */}
            <h1 className = {styles.carSign}>Cars</h1>
            <div className={styles.items}>
                <div className={styles.wrapper}>
                <div className={styles.cover}>
                    <h1>Cars</h1>
                </div>
                    <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className={styles.bikeCover}  alt="bike" />
                </div>

                <div className={styles.itemHolder}>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="car1" />
                        <div className={styles.description}>
                            <h2>Car1</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 50,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="car2" />
                        <div className={styles.description}>
                            <h2>Car2</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 50,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" className={styles.bikeImg} alt="car3" />
                        <div className={styles.description}>
                            <h2>Car3</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 50,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" className={styles.bikeImg} alt="car4" />
                        <div className={styles.description}>
                            <h2>Car4</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 50,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="car5" />
                        <div className={styles.description}>
                            <h2>Car5</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 50,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Home;