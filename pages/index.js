import * as React from 'react';

const Index = () => {
  return (
    <main>
      <a href={`/en-us/${encodeURIComponent('x/y')}/2`}>Error</a>
      <a href={`/en-us/${encodeURIComponent(encodeURIComponent('x/y'))}/2`}>Works</a>
      <a href={`/en-us/x_y/2`}>Works as well</a>
    </main>
  )
}

export default Index;
