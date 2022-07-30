import styles from "../../styles/components/footer/footer.module.scss";

const Footer = () => {
  return (
    <footer className="">
      <div className="container-fluid">
        <div className="row">
          <div className={`col ${styles["footerWrapper"]}`}>
            <div className={`${styles["logoWrapper--footer"]}`}>
              <a href="/">
                <strong>4x4 ROADSHOW</strong>
              </a>
            </div>
            <div className={`${styles["contactWrapper--footer"]}`}>
              {" "}
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
