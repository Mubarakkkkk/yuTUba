import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

function Videos( {videos, direction} ) {

  if(!videos?.length) return 'Loading...';

  return (
    <Stack direction = {"row" || direction} flexWrap = "wrap"
    justifyContent = "start" gap = {2}>

      {videos.map( (item, idx) => (
        <Box key = {idx}>
          {item.id.videoId && <VideoCard video = {item} /> }
          {item.id.channelId && <ChannelCard channelDetail = {item} /> }
        </Box>
      ) )}


    </Stack>
  )
}

export default Videos
