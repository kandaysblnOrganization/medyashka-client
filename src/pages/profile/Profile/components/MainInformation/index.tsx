import React, {FC} from 'react';
import {IResponseUserImage, IResponseUserProgress} from "../../../../../types/ResponseTypes";
import {useTypedSelector} from "../../../../../hooks/redux/useTypedSelector";
import {Grid} from "@mui/material";

interface MainInformationProps {
    userProgress: IResponseUserProgress;
    userImage: IResponseUserImage;
}

const MainInformation: FC<MainInformationProps> = (props) => {
    const {
        userImage,
        userProgress
    } = props;
    const {
        user
    } = useTypedSelector(state => state.user);
    return (
        <Grid container alignItems="center" justifyContent='space-between'>
            <Grid item>
                <Grid container flexDirection='column'>
                    <Grid item></Grid>
                    <Grid item></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainInformation;