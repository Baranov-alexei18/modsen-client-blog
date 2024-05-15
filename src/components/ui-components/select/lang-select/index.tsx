export const SelectLanguage = () => {
  const changeLanguage = (event: { target: { value: any; }; }) => {
    const selectedLanguage = event.target.value;
  };

  return (
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  );
};
