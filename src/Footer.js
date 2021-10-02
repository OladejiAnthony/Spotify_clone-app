import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo'
                    src='data:image/jpeg;base64,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' 
                    alt='' 
                />
                <div className='footer__songInfo'>
                    <h4>The King is coming!</h4>
                    <p>Nathaniel Bassey</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
