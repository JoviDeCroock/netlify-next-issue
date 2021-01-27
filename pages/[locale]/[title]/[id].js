import * as React from 'react';

const SpecificPage = ({ text }) => {
  return <main><pre>{text}</pre></main>
}

SpecificPage.getInitialProps = (ctx) => {
  return {
    text: JSON.stringify(ctx.query),
  }
}

export default SpecificPage;
