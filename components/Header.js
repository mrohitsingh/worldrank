import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./MyCountries.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1>
            <Link href="https://rohitsingh.vercel.app" passHref>
              <Button variant="outline-secondary" className="me-2">
                Portfolio
              </Button>
            </Link>
          </h1>
          <h3 className={styles.header}>World Rank</h3>
          <div>
            <Link href="https://github.com/mrohitsingh" passHref>
              <Button variant="outline-secondary" className="me-2">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/mrohitsingh/" passHref>
              <Button variant="outline-secondary">LinkedIn</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
