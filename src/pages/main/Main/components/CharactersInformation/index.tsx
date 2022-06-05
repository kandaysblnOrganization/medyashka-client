import React, {FC} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {charactersCards} from "../../../../../constants/charactersCards";
import CharacterCard from "./CharacterCard";
import {createUseStyles} from "react-jss";
import {Link} from "react-router-dom";

interface CharactersInformationProps {
}

const CharactersInformation: FC<CharactersInformationProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    return (
        <Box>
            <Grid container flexDirection='column' alignItems='center' rowSpacing={2} mb={6}>
                <Grid item>
                    <Typography className={classes.title} variant='h2'>ПРИКЛЮЧЕНИЕ С МЕДЯШКОЙ</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle} variant="h4">Найди своих фаворитов среди
                        героев!</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems='center' justifyContent='space-between'>
                {charactersCards.map(characterCard => (
                    <Grid item key={characterCard.id}>
                        <CharacterCard characterCard={characterCard}/>
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.buttonWrapper}>
                <Link to='/books'>
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.button}
                    >
                        Начать чтение
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

const useStyles = createUseStyles({
    title: {
        "&.MuiTypography-root": {
            color: "#FB8349",
            letterSpacing: "0.045em",
        }
    },
    subtitle: {
        "&.MuiTypography-root": {
            color: "#FFFAF2",
            letterSpacing: "0.045em",
        }
    },

    buttonWrapper: {
        width: "25%",
        margin: "60px auto 0 auto",
        borderRadius: 25,
        position: "relative",
        border: "4px solid transparent",
        boxShadow: "-2px -2px 7px rgba(255, 232, 150, 0.58), 2px 2px 6px rgba(125, 90, 0, 0.83)",
        "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: -5,
            borderRadius: 25,
            background: `linear-gradient(to bottom right, #FFD15A, #C5801C)`,
            backgroundColor: "none",
        }
    },
    button: {
        "&.MuiButton-root": {
            padding: "12px 36px",
            borderRadius: 25,
            fontWeight: 700,
            fontSize: 28,
            lineHeight: "34px",
            transition: "all .2s linear",
            "&:hover": {
                background: "#eaaa00",
            }
        }
    },
})

export default CharactersInformation;