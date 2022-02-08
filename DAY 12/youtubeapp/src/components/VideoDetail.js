import React from 'react'

import {Paper,Typography} from '@material-ui/core'

const VideoDetails = (props) =>{
    const {video} = props
    console.log(video)
    if(!video) return <div>Loading!!!</div>
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <>
        <Paper elevation={6} style={{height:"70%"}}>
                <iframe src={videoSrc} height="100%" width="100%" title="VideoTitle"/>
        </Paper>
        <Paper elevation={6} style={{padding:"15px"}}>       
        <Typography variant='subtitle1'>{video.snippet.title} -{video.snippet.channelTitle}</Typography>
        <Typography variant='subtitle1'>{video.snippet.description}</Typography>
        </Paper>
        </>
    )

}

export default VideoDetails