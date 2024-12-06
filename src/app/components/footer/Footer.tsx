import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

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
            <li className={`${styles.listItem}, ${styles.unlimited}`}>
              <Image
                src={"/images/join.svg"}
                alt="Join The Club"
                width={75}
                height={75}
                className={styles.joinNow}
              />
            </li>
            <li className={styles.listItem}>Package</li>
            <li className={styles.listItem}>Fundraising</li>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Locations</li>
            <li className={styles.listItem}>Manage Your Subscription</li>
            <li>
              {" "}
              <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/virtualwashbooks.aspx">
                <Image
                  src={"/images/gift-cards.png"}
                  alt="gift card image"
                  width={168}
                  height={22}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.addressBox}>
          <div className={styles.addressLine}>
            <div className={styles.row}>
              <p className={styles.footerP}>
                <strong>(307)675-1935</strong> &bull;
              </p>
              <p className={styles.footerP}>624 East Brundage Lane &bull;</p>
              <p className={styles.footerP}>Sheridan, Wyoming 82801</p>
            </div>
            <div>
              <p className={styles.footerP}>Click Here for Hours</p>
            </div>
            <div className={styles.row}>
              <p className={styles.footerP}>
                <strong>(307) 337-2202</strong> &bull;
              </p>
              <p className={styles.footerP}>4320 East 2nd Street &bull;</p>
              <p className={styles.footerP}>Casper, Wyoming 82609</p>
            </div>
            <div>
              <p className={styles.footerP}>Click Here for Hours</p>
            </div>
            <div className={styles.row}>
              <p className={styles.footerP}>
                <strong>(307) 472-9274</strong> &bull;
              </p>
              <p className={styles.footerP}>3712 CY Ave &bull;</p>
              <p className={styles.footerP}>Casper, WY 82604</p>
            </div>
            <div>
              <p className={styles.footerP}>Click Here for Hours</p>
            </div>
            <div>
              <Image
                src="/images/facebook.svg"
                alt="facebook Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <div>
              <p className={styles.footerP}>
                <em>PROUDLY OFFERING THE WORLD’S MOST POWERFUL VACUUMS BY</em>
              </p>
              <div className={styles.vacutechImage}>
                <Image
                  src="/images/vacutech.png"
                  alt="Vault Tech Vacums"
                  width={115}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footerP}>
          Copyright © 2024 Let&apos;Er Buck Car Wash. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
