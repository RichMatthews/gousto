import React from 'react';

const component = ({cat}) => (
  <div>
    Hi I am a cat and my id is: {cat.match.params.id}
  </div>
)

export default component
