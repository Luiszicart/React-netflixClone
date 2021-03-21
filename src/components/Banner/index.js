import React from 'react'

import './styles.css'

function Banner() {

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
      backgroundPosition: 'center center',
    }}>
      <div className='banner_content'>
        <h1 className='banner_title'>Movie Name</h1>
        <div className="banner_buttons">
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncateText(`Testdescriptiondddddddddddddddd
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadssssssssssssssssssssssssss
          asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddd
          adsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          adsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`, 150)}
        </h1>
      </div>

      <div className='banner_fadeButton' />
    </header>
  )
}

export default Banner
