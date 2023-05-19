import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../context";

import styles from "./Header.module.scss";

function Header() {
  const { userAccount, setUserAccount } = useContext(AppContext);
  const onConnect = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => setUserAccount(account[0]));
    } else {
      alert("Please install MetaMask");
    }
  };
  return (
    <header className="d-flex align-center">
      <div className={styles.logo}>
        <Link to="/">
          <img width={180} src="/img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.buttons}>
        <div className={styles.navButtons}>
          <NavLink to="/trade">
            {({ isActive, isPending }) => (
              <button
                className={
                  isActive ? styles.menuButtonActive : styles.menuButton
                }
              >
                Trade
              </button>
            )}
          </NavLink>
          <NavLink to="/finance">
            {({ isActive, isPending }) => (
              <button
                className={
                  isActive ? styles.menuButtonActive : styles.menuButton
                }
              >
                Finance
              </button>
            )}
          </NavLink>
          <NavLink to="/nft">
            {({ isActive, isPending }) => (
              <button
                className={
                  isActive ? styles.menuButtonActive : styles.menuButton
                }
              >
                NFT
              </button>
            )}
          </NavLink>
          <NavLink to="/support">
            {({ isActive, isPending }) => (
              <button
                className={
                  isActive ? styles.menuButtonActive : styles.menuButton
                }
              >
                Support
              </button>
            )}
          </NavLink>
        </div>
        <button onClick={onConnect} className={styles.metaButton}>
          {userAccount ? (
            <span>{userAccount}</span>
          ) : (
            <>
              <p>Connect with</p>
              <img height={64} width={64} src="/img/fox.svg" alt="fox" />
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
