import React from 'react';

function SectionItem({ title, data }) {
  return (
    <section>
      <span className="title capitalize">{`${title}: `}</span>
      <span>{data}</span>
    </section>
  );
}

export default SectionItem;
