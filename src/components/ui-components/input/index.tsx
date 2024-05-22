import styles from './styles.module.scss';

type InputType = {
  type: string,
  name: string
  value: string,
  placeholder: string,
  isTouch: boolean,
  error: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputApp = ({
  value, placeholder, onChange, error, type, name, onBlur, isTouch,
}: Partial<InputType>) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      name={name}
      value={value}
      data-touch={isTouch}
      className={`${styles.input} ${error && styles.invalid}`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {isTouch && error && <p className={styles.error}>{error}</p>}
  </div>
);

//   <input
//     type="email"
//     name="email"
//     placeholder="Your Email"
//     onChange={handleChange}
//     onBlur={handleBlur}
//     value={email}
//   />;
// { touched.email && errors.email ? (
//   <span className={styles.error}>{`${errors.email}`}</span>
// ) : null; }

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const inputValue = e.target.value;
//   const email = isValidEmail(inputValue);

//   setIsValid(email);

//   if (!inputValue.length) {
//     setIsValid(true);
//   }

//   onChange!(e, email);
// };
