import Styles from "../../styles/socialButtons.module.scss";

const Social = () => {
  return (
    <div className={Styles.dashed}>
      <p className={Styles.text}>Or login with:</p>
      <div className={Styles.column}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
};

export default Social;
