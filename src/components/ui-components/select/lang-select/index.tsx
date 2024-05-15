import { useTranslation } from 'next-i18next';

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: { target: { value: any; }; }) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  );
};
