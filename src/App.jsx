import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './index.css';

import { Navbar, VideoDetail, ChannelDetail, Feed, SearchFeed } from './components/';

const App = () => (

  <BrowserRouter>
    <Box sx = {{ backgroundColor: '#000' }}>
      <Navbar />
        <Routes>
          <Route path = "/" element = { <Feed /> } />
          <Route path = "/video/:id" element = { <VideoDetail /> } />
          <Route path = "/channel/:id" element = { <ChannelDetail /> } />
          <Route path = "/search/:searchTerms" element = { <SearchFeed /> } />
        </Routes>
    </Box>
  </BrowserRouter>
  
);

export default App
