import React from "react";
import styles from "../../../css/shop.module.css";

import fav from "../../../img/fav.svg";

function Shop() {
  return (
    <div className={styles.shopWrapper}>
      <div className={styles.center}>
        <div className={styles.categories}>
          <h2>Categories</h2>
          <div className={styles.cate}>
            <p>&rarr; Bikes</p>
            <pre>     Cars</pre>
          </div>
        </div>

        <div className={styles.container}>

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

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1508448968-9065faf3ccdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className={styles.bikeImg} alt="bike6" />
                        <div className={styles.description}>
                            <h2>Bike6</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.cover}></div>
                        <img src="https://images.unsplash.com/photo-1542683088-abb3da334598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1392&q=80" className={styles.bikeImg} alt="bike7" />
                        <div className={styles.description}>
                            <h2>Bike7</h2>
                            <div className={styles.price}>
                                <p>Price: Rs 5,00,000</p>
                                <img src={fav} alt="fav" />
                            </div>
                        </div>
                    </div>


                </div>
      </div>
    </div>
  );
}

export default Shop;
