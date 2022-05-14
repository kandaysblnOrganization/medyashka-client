import React from 'react';
import {
    Grid,
    IconButton
} from "@mui/material";
import {
    Facebook as FacebookIcon,
    Instagram as InstIcon,
    YouTube as YouTubeIcon
} from '@mui/icons-material';
import {createUseStyles} from "react-jss";

const SocialNavigate = () => {
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

export default SocialNavigate;