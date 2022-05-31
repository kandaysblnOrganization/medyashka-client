import React, {FC} from 'react';
import {Box, Grid, IconButton, Typography} from "@mui/material";
import {PlayArrowRounded as PlayIcon} from '@mui/icons-material';
import {createUseStyles} from "react-jss";
import {IBookCard} from "../../../../../types/ContantsTypes";
import {IResponseUserProgress} from "../../../../../types/ResponseTypes";
import {IBookCardJss} from "../../../../../types/JssProps";

interface BookCardProps {
    bookCard: IBookCard;
    userProgress: IResponseUserProgress;
}

const BookCard: FC<BookCardProps> = (props) => {
    const {
        bookCard,
        userProgress
    } = props;
    const StylesProps: IBookCardJss = {
        backgroundColor1: bookCard.bookLinearBackground.color1,
        backgroundColor2: bookCard.bookLinearBackground.color2,
        buttonColor1: bookCard.bookLinearButtonBackground.color1,
        buttonColor2: bookCard.bookLinearButtonBackground.color2,
        borderColor1: bookCard.bookLinearButtonBorder.color1,
        borderColor2: bookCard.bookLinearButtonBorder.color2,
    }
    const classes = useStyles(StylesProps);

    const renderProgress = () => {
        switch (bookCard.id) {
            case "01":
                return userProgress.first_book_last_page;
            case "02":
                return userProgress.second_book_last_page;
            case "03":
                return userProgress.third_book_last_page;
            case "04":
                return userProgress.fourth_book_last_page;
            default:
                return "0";
        }
    }
    return (
        <Box className={classes.root}>
            <Grid container flexDirection='column' rowSpacing={2}>
                <Grid item>
                    <Typography className={classes.bookNumber}>{bookCard.id}</Typography>
                </Grid>
                <Grid item className={classes.titleWrapper}>
                    <Typography className={classes.title}>{bookCard.title}</Typography>
                </Grid>
                <Grid item mb={2}>
                    <Typography className={classes.progress}>Прочитано до: {renderProgress()} стр</Typography>
                </Grid>
                <Grid item container alignItems='center' columnSpacing={1}>
                    <Grid item className={classes.playButtonWrapper}>
                        <IconButton className={classes.playButton}>
                            <PlayIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.buttonLabel}>Читать</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: (props: IBookCardJss) => ({
        height: "100%",
        maxWidth: 250,
        borderRadius: 37,
        padding: 20,
        background: ` linear-gradient(0deg, ${props.backgroundColor1} -0.11%, ${props.backgroundColor2} 100.05%)`,
        boxSizing: "border-box",
        "& *, *:after, *:before": {
            boxSizing: "border-box",
        }
    }),

    bookNumber: {
        "&.MuiTypography-root": {
            fontWeight: 500,
            fontSize: 64,
            lineHeight: "78px",
            color: "#425154",
        }
    },
    titleWrapper: {
        minHeight: 96,
    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "20px",
            color: "#425154",
        }
    },
    progress: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "#585467",
        }
    },

    playButtonWrapper: (props: IBookCardJss) => ({
        "&.MuiGrid-root": {
            borderRadius: "100%",
            marginLeft: 8,
            position: "relative",
            border: "4px solid transparent",
            "&.MuiGrid-item": {
                paddingLeft: 0,
            },
            "&:before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: -5,
                borderRadius: "100%",
                background: `linear-gradient(to bottom right, ${props.borderColor1}, ${props.borderColor2})`,
                backgroundColor: "none",
            }
        }
    }),
    playButton: (props: IBookCardJss) => ({
        "&.MuiButtonBase-root": {
            background: props.buttonColor1,
            boxShadow: `4px 4px 6px rgba(0, 0, 0, 0.4)`,
            "&:hover": {
                background: props.buttonColor2,
            }
        }
    }),
    buttonLabel: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "20px",
            color: "#FFFFFF",
        }
    },
});

export default BookCard;