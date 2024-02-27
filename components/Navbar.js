import Link from "next/link";
import Image from "next/image";
import starwars_sm from "../static/starwars_sm.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src={starwars_sm} width="130" height="auto" />
      <div>
        <Link className={styles.a} href="/">
          Home
        </Link>
        <Link className={styles.a} href="/details/films">
          Episódios
        </Link>
      </div>

      <style jsx>{`
    
         
                  nav {
                    margin: 15px 20px;
                    display: flex; 
                    align-items: center;
                  } 
                }
            `}</style>
    </nav>
  );
};

export default Navbar;
