import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {Box, Typography} from "@mui/material";

interface HeadContentProps {
    page: string | (string | null)[] | null;
    totalPage: number;
    renderNumberBook: () => string
}

const HeadContent: FC<HeadContentProps> = (props) => {
    const {
        page,
        totalPage,

        renderNumberBook
    } = props;
    const classes = useStyles();
    return (
        <Box className={classes.rowContent}>
            <Typography className={classes.title} variant="h2">
                {renderNumberBook()} / 04
            </Typography>
            <Typography className={classes.title} variant="h2">
                {`${page} / ${totalPage}`}
            </Typography>
        </Box>
    );
};

const useStyles = createUseStyles({
    rowContent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 36,
    },

    title: {
        "&.MuiTypography-root": {
            color: "#E1B41F",
        }
    },
})

export default HeadContent;