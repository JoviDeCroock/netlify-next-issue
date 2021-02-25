const Redirect = () => null;

if (typeof window !== 'undefined') {
  Redirect.getInitialProps = ({ req, res }) => {
    let language = 'en-us';
    // server side code remains the same
    if (req.headers['accept-language']) {
      const locale = req.headers['accept-language'];
      if (['en-us'].includes(locale.toLowerCase())) {
        language = locale;
      }
    }

    const [lang, country] = language.split('-');
    res.writeHead(302, {
      Location: `${
        process.env.BASE_URL
      }/${country.toLowerCase()}/${lang.toLowerCase()}`,
    });

    res.end();
    return {};
  }
}

export default Redirect;
