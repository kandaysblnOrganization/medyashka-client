import React, {FC} from 'react';
import {
    IBookContent
} from "../../../../../types/ResponseTypes";
import {
    Box,
    Typography
} from "@mui/material";
import {
    MessageBackground
} from '../../../../../assets/images';
import {
    createUseStyles
} from "react-jss";
import HTMLReactParser from "html-react-parser";

interface MainContentProps {
    bookContent: IBookContent;
}

const MainContent: FC<MainContentProps> = (props) => {
    const {
        bookContent
    } = props;
    const classes = useStyles();
    return (
        <>
            {bookContent.page_foreword !== null && (
                <Typography className={classes.foreword} variant="h4">
                    {HTMLReactParser(bookContent.page_foreword)}
                </Typography>
            )}
            {bookContent.foreword_author !== null && (
                <Typography className={classes.forewordAuthor} variant="h4">
                    {HTMLReactParser(bookContent.foreword_author)}
                </Typography>
            )}
            {bookContent.page_chapter !== null && (
                <Typography className={classes.pageChapter} variant="h3">
                    {HTMLReactParser(bookContent.page_chapter)}
                </Typography>
            )}
            {bookContent.page_title !== null && (
                <Typography className={classes.pageTitle} variant="h3">
                    {HTMLReactParser(bookContent.page_title)}
                </Typography>
            )}
            <Box className={classes.textWrapper}>
                {bookContent.page_message !== null && (
                    <Box className={classes.messageWrapper}>
                        <Typography className={classes.messageText}>
                            {HTMLReactParser(bookContent.page_message)}
                        </Typography>
                    </Box>
                )}
                {bookContent.page_text !== null && (
                    <Typography className={classes.text} variant="h3">
                        {HTMLReactParser(bookContent.page_text)}
                    </Typography>
                )}
            </Box>
        </>
    );
};

const useStyles = createUseStyles({
    foreword: {
        "&.MuiTypography-root": {
            width: 550,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#425154",
            alignSelf: "flex-end",
            textAlign: "justify",
            marginBottom: 10,
        },
    },
    forewordAuthor: {
        "&.MuiTypography-root": {
            width: 550,
            fontWeight: 500,
            fontSize: 22,
            color: "#425154",
            alignSelf: "flex-end",
            textAlign: "right",
            marginBottom: 100,
        },
    },
    pageChapter: {
        "&.MuiTypography-root": {
            textTransform: "uppercase",
            borderBottom: "5px solid #6eb895",
            paddingBottom: 15,
            marginBottom: 40,

            fontWeight: 400,
            fontSize: 48,
            lineHeight: "34px",
            textAlign: "center",

            color: "#6eb895",
        },
    },
    pageTitle: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            fontSize: 42,
            color: "#f07022",
            textAlign: "center",
            marginBottom: 20,
        },
    },
    textWrapper: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
    },
    text: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            color: "#425154",
            textAlign: "justify",
            textIndent: "1.5em",
        }
    },
    messageWrapper: {
        width: 500,
        height: 600,
        background: `url(${MessageBackground}) center no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 16,
    },
    messageText: {
        "&.MuiTypography-root": {
            width: 400,
            height: 418,
            overflowY: "scroll",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "28px",
            color: "#000000",
            textAlign: "justify",
            textIndent: "1.5em",
            margin: "0 auto",
            padding: "0 10px 0 0",

            "&::-webkit-scrollbar": {
                width: 5,
            },
            "&::-webkit-scrollbar-track": {
                margin: "10px 0",
                background: "rgba(0, 0, 0, .05)",
                boxShadow: "0 0 10px 4px #e1ba66",
            },
            "&::-webkit-scrollbar-thumb": {
                background: "#d4af5b",
                borderRadius: 999,
                boxShadow: "0 0 10px 4px #e1ba66",
            },
        }
    },
});

export default MainContent;