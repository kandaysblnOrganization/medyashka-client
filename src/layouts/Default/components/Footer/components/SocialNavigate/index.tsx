import React from 'react';
import {Grid} from "@mui/material";
import {ReactSVG} from 'react-svg';
import {
    VkIcon,
    InstagramIcon,
    FacebookIcon
} from '../../../../../../assets/svg';

const SocialNavigate = () => {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item><ReactSVG src={InstagramIcon} wrapper="svg"/></Grid>
            <Grid item><ReactSVG src={VkIcon} wrapper="svg"/></Grid>
            <Grid item><ReactSVG src={FacebookIcon} wrapper="svg"/></Grid>
        </Grid>
    );
};

export default SocialNavigate;