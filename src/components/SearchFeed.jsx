import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

import { Videos } from './'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerms } = useParams(); 
 
  useEffect( () => {
    fetchFromAPI(`search?part=snippet&q=${searchTerms}`)
    .then( (data) => setVideos(data.items) )
    .catch( (error) => console.log(error) )
  }, [searchTerms])

  return (
    <Box p={2} sx = {{ overflow: 'auto', height: '90vh', flex: 2 }} >
      <Typography variant = "h4"
        fontWeight="bold" mb ={2}
        sx={{ color: 'white' }}>
          Search Results for: <span style={{ color: '#F31503' }}>
            {searchTerms}
          </span> videos
      </Typography>

      <Videos videos = {videos} />
    </Box>
  )
}

export default SearchFeed 