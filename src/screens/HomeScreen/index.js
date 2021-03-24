import React from 'react'

import NavBar from '../../screens/HomeScreen/components/NavBar/index'
import Banner from '../../screens/HomeScreen/components/Banner/index'
import Row from '../../screens/HomeScreen/components/Rows/index'
import requests from '../../api/request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <NavBar />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomaceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
