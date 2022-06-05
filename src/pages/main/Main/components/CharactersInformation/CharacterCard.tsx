import React, {FC} from 'react';
import {ICharacterCard} from "../../../../../types/ContantsTypes";
import {Box, Grid, Tooltip, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import {ICardsJss} from "../../../../../types/JssProps";

interface CharacterCardProps {
    characterCard: ICharacterCard;
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
                    <Tooltip title={characterCard.description} arrow followCursor>
                        <Box className={classes.imageWrapper}>
                            <img className={classes.image} src={characterCard.image} alt=""/>
                        </Box>
                    </Tooltip>
                </Grid>
            </Grid>
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
        width: 350,
        height: 400,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    }
});

export default CharacterCard;