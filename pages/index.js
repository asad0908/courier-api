import MainArea from "../components/MainArea";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home({ isMobileView }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainArea isMobileView={isMobileView} />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};
