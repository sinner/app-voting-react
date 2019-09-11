export default () => {
  const availableLocales = ['en', 'fr', 'es'];
  let locales = window.navigator.languages.filter((lang) => (availableLocales.includes(lang))) || ['en'];
  const localStorageLocale = localStorage.getItem('locale');
  locales = (localStorageLocale) ? locales.unshift(localStorageLocale) : locales;
  const currentLocale = (locales.length > 0) ? locales[0] : 'en';
  return {
    availableLocales,
    locale: currentLocale,
  };
};
