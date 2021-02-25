const Redirect = () => null;

if (typeof window === 'undefined') {
  Redirect.getInitialProps = ({ req, res }) => {
    res.writeHead(302, {
      Location: `/`,
    });

    res.end();
    return {};
  }
}

export default Redirect;
