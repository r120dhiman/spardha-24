import React from 'react';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  return (
    <div className={styles.outermostdiv}>
      <section className={styles.ftco_section}>
        <div className={styles.container}>
          <div className={styles.maindiv}>
            <div className={styles.poster}>
              <img
                src="/images/logo/spardha_logo-25.png"
                alt="Coming Soon"
                width="250"
                height="250"
                style={{ objectFit: 'contain', filter: 'invert(100%)' }}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.top}>
                <h1>Coming Soon</h1>
              </div>
              <div className={styles.middle}>
                <div className={styles.discription}>
                  Registrations will open soon.<br />
                  Stay tuned for something awesome!
                </div>
                <p>🚧 #Spardha2025</p>
              </div>
              <div className={styles.bottom}>
                <div className={styles.bottom_heading}>
                  <div className={styles.hr}></div>
                  <h3>Contact</h3>
                  <div className={styles.hr}></div>
                </div>
                <div className={styles.contacts}>
                  <div className={styles.contact_card}>
                    <h5>Devang Darpe</h5>
                    <p>+91 63501 07038</p>
                  </div>
                  {/* <div className={styles.contact_card}>
                    <h5>Aryan Agarwal</h5>
                    <p>+91 6375457623</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;