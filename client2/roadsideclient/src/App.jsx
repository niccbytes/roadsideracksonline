import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
<div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/client/public/assets/DOUBLE R LOGO.png" alt="Roadside Racks Logo" height="30"/>
    Roadside Racks
</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="shirts.jsx">Shirts</a>
            <a class="dropdown-item" href="jackets.jsx">Jackets</a>
            <a class="dropdown-item" href="bottoms.jsx">Bottomssssss</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Events</a>
        </li>
      </ul>
      <form id="searchForm" class="form-inline my-2 my-lg-0">
        <input id="searchInput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button id="searchButton" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    </div>
  </nav>
  <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="/client/public/assets/BTNF.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">The North Face Fleece</h5>
            <p class="card-text"><small>$20</small></p>
            <button class="btn btn-primary" onclick="window.location.href='checkout.html'">By</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/client/public/assets/taz.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">VTG Western Jacket</h5>
            <p class="card-text"><small>$100</small></p>
            <button class="btn btn-primary" onclick="window.location.href='checkout.html'">Buy</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/client/public/assets/bsvarsityjacket.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">VTG RedFoxx Varsity Jacket</h5>
            <p class="card-text"><small>$50</small></p>
            <button class="btn btn-primary" onclick="window.location.href='checkout.html'">Buy</button>
          </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="/client/public/assets/landolakesfront.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">VTG land o lakes western jacket</h5>
              <p class="card-text"><small>$80</small></p>
              <button class="btn btn-primary" onclick="window.location.href='checkout.html'">Buy</button>
            </div>
            
      </div>
  </div>
  </div>
    </ChakraProvider>
  )
}

export default App
