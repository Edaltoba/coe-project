import Styles from "../../styles/formInput.module.scss";

//Interface goes here

const FormInput = ({ label = "label", ...otherProps }) => {
  return (
    <div className={Styles.group}>
      <input className={Styles.formInput} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} 
                "formInputLabel"`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
