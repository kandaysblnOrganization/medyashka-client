import React, {FC, PropsWithChildren} from 'react';
import {Box, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameCard} from "../../../../../types/ContantsTypes";
import {ReactSVG} from 'react-svg';
import {PlayArrowRounded as PlayIcon} from "@mui/icons-material";

interface GameCardProps {
    gameCard: IGameCard;
    otherProps?: PropsWithChildren<any>;
}

const GameCard: FC<GameCardProps> = (props) => {
    const {
        gameCard,
        otherProps,
    } = props;
    const classes = useStyles();
    return (
        <Box key={gameCard.id} className={classes.root} {...otherProps}>
            <Grid container alignItems='center' flexWrap='nowrap'>
                <Grid item>
                    <ReactSVG src={gameCard.image}/>
                </Grid>
                <Grid item>
                    <Grid container flexDirection='column'>
                        <Grid item>
                            <Typography classes={{root: classes.title}} variant="body2">
                                {gameCard.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography classes={{root: classes.bookNumber}} variant="body2">
                                {gameCard.bookNumber}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.playButtonWrapper} item>
                    <Tooltip
                        classes={{
                            popper: classes.buttonTooltip,
                        }}
                        title="Играть"
                        arrow
                        followCursor
                    >
                        <IconButton className={classes.playButton}>
                            <PlayIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        padding: 12,
        background: "#DAD2FB",
        borderRadius: 14,
        width: "100%",
    },
    title: {
        color: "#6252B0",
        fontWeight: 700,
    },
    bookNumber: {
        color: "#6252B0",
        fontWeight: 400,
    },

    playButtonWrapper: {
        "&.MuiGrid-root": {
            borderRadius: "100%",
            position: "relative",
            border: "2px solid transparent",
            marginLeft: "auto",
            "&:before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: -5,
                borderRadius: "100%",
                background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.43), rgba(99, 56, 175, 0.25))`,
                backgroundColor: "none",
            }
        }
    },
    playButton:{
        "&.MuiButtonBase-root": {
            background: "#D8C2FF",
            boxShadow: `4px 4px 6px rgba(0, 0, 0, 0.4)`,
            "&:hover": {
                background: "#bea9e3",
            }
        }
    },
    buttonTooltip:{
        '&.MuiTooltip-popper': {
            paddingTop: 10,
            '& .MuiTooltip-tooltip': {
                background: "#DAD2FB",
                fontWeight: 700,
                fontSize: 9,
                lineHeight: "11px",
                color: "#6252B0",
                padding: 12,
                borderRadius: 14,
            },
            "& .MuiTooltip-arrow": {
                color: "#DAD2FB",
            }
        }
    }
});

export default GameCard;