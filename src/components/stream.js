import React from 'react';

function Stream({ tracks = []}) {
  return (
    <div>
    {
      tracks.map((track) => {
        return <div className="trac">{track.title}</div>;
    })
    }
    </div>
  )
}

export default Stream;