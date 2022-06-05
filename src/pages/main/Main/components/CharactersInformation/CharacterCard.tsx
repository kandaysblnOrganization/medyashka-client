import React, {FC} from 'react';
import {ICharacterCard} from "../../../../../types/ContantsTypes";
import {Box, Grid, Tooltip, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import {ICardsJss} from "../../../../../types/JssProps";
import {Classes} from "jss";

interface CharacterCardProps {
    characterCard: ICharacterCard;
}

interface CharacterTooltipProps {
    characterCard: ICharacterCard;
    classes: Classes<any>;
}

const CharacterCard: FC<CharacterCardProps> = (props) => {
    const {
        characterCard
    } = props;
    const StylesProps: ICardsJss = {
        backgroundColor1: characterCard.color,
    }
    const classes = useStyles(StylesProps);
    return (
        <Box>
            <Grid container flexDirection="column" alignItems="center">
                <Grid item>
                    <Box className={classes.nameWrapper}>
                        <Typography className={classes.name} variant="body1">{characterCard.name}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Tooltip
                        classes={{
                            tooltip: classes.tooltipWrapper,
                            arrow: classes.tooltipArrow,
                        }}
                        title={<CharacterTooltip characterCard={characterCard} classes={classes}/>}
                        arrow
                        placement="left"
                    >
                        <Box className={classes.imageWrapper}>
                            <img className={classes.image} src={characterCard.image} alt=""/>
                        </Box>
                    </Tooltip>
                </Grid>
            </Grid>
        </Box>
    );
};

const CharacterTooltip: FC<CharacterTooltipProps> = (props) => {
    const {
        characterCard,
        classes
    } = props;
    return (
        <Box>
            <Typography className={classes.tooltipName} variant='h6'>{characterCard.name}</Typography>
            <Typography className={classes.tooltipDescription} variant='h6'>{characterCard.description}</Typography>
        </Box>
    );
};


const useStyles = createUseStyles({
    nameWrapper: (props: ICardsJss) => ({
        padding: "10px 20px",
        backgroundColor: props.backgroundColor1,
        borderRadius: 14,
        marginBottom: 16,
    }),
    name: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            letterSpacing: "0.045em",
            color: "#443F54",
            textTransform: "uppercase",
        }
    },
    imageWrapper: {
        transition: "all .2s linear",
        "&:hover": {
            transform: "scale(1.02)",
        }
    },
    image: {
        width: "100%",
        height: "100%",
    },

    tooltipPopper: {},
    tooltipWrapper: {
        "&.MuiTooltip-tooltip": {
            background: "#9282E0",
            borderRadius: 14,
            padding: 12,
        }
    },
    tooltipArrow: {
        "&.MuiTooltip-arrow": {
            color: "#9282E0",
        }
    },
    tooltipName: (props: ICardsJss) => ({
        "&.MuiTypography-root": {
            fontWeight: 700,
            letterSpacing: "0.045em",
            color: props.backgroundColor1,
            marginBottom: 8,
        }
    }),
    tooltipDescription: {
        "&.MuiTypography-root": {
            fontWeight: 300,
            color: "#FFFAF2",
            letterSpacing: "0.045em",
        }
    },
});

export default CharacterCard;