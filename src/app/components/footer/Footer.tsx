import Image from "next/image";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <Image
        src={"/images/footer.svg"}
        alt="brown mountain"
        width={1200}
        height={270}
      />
      <div className={styles.footerBody}>
        <div className={styles.footerYellowBar}>
          <ul className={styles.footerNav}>
            <li>
              <Image
                src={"/images/footer-signup.svg"}
                alt="footer sign up"
                width={170}
                height={25}
              />
            </li>
            <li>Package</li>
            <li>Fundraising</li>
            <li>About Us</li>
            <li>Locations</li>
            <li>Manage Your Subscription</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <p className={styles.footerP}>
          Copyright © 2024 Let&apos;Er Buck Car Wash. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
