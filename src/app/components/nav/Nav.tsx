import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import HamburgerMenu from "../HambugerMenu/HamburgerMenu";
import classNames from "classnames";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={classNames("justify-self-end", "-mb-20", "mt-16")}>
        <div className={classNames("z-10", styles.manageSubscription)}>
          <Link href="/manage-subscription">Manage Your Subscription</Link>
        </div>
      </div>
      <div className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/packages">Packages</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/packages">Packages</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/whyUnlimited">Why Unlimited?</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/fundraising">Fundraising</Link>
          </li>
          <li className={styles.navLogo}>
            <Link href="/">
              <Image
                src="/LEB-Logo.svg"
                alt="Cowboy riding a car"
                width={208}
                height={230}
                className={styles.navLogo}
              ></Image>
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/about">About Us</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/d43ae63f-9557-4817-8bc4-4a941ab5fd79/?q=&o=postedDateDesc&w=&wc=&we=&wpst="
                  target="_blank"
                >
                  Careers
                </Link>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </li>

          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/locations/sheridan">Locations</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/locations/sheridan">Sheridan</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/locations/casper">Casper</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/locations/gillette">Gillette</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.hambugerMenu}>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
