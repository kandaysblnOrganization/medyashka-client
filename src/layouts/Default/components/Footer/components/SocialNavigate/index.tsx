import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {ReactSVG} from 'react-svg';
import {
    Instagram as InstIcon,
    Facebook as FacebookIcon,
    YouTube as YouTubeIcon
} from '@mui/icons-material';
import {
    VkIcon,
} from '../../../../../../assets/svg';
import {createUseStyles} from "react-jss";

const SocialNavigate = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <IconButton
                    color="secondary"
                >
                    <InstIcon color="secondary"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    color="secondary"
                >
                    <YouTubeIcon color="secondary"/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    color="secondary"
                >
                    <FacebookIcon color="secondary"/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

const useStyles = createUseStyles({
    footerIcons: {
        "& path": {
            width: "20px",
            height: "20px",
        }
    }
})

export default SocialNavigate;