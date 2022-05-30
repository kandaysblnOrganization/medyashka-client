import {Container, Grid} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import {agent} from "../../../api/agent";
import {IResponseUserImage, IResponseUserProgress} from "../../../types/ResponseTypes";
import {IError} from "../../../types/ErrorTypes";
import {MainInformation as MainInformationComponent} from './components';

interface ProfileProps {
}

const Profile: FC<ProfileProps> = (props) => {
    const [userProgress, setUserProgress] = useState<IResponseUserProgress>({
        percent_progress: 0,
        third_book_last_page: 0,
        id: 0,
        fourth_book_last_page: 0,
        second_book_last_page: 0,
        first_book_last_page: 0,
    });
    const [userImage, setUserImage] = useState<IResponseUserImage>({
        avatar: "",
        id: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getUserImage();
            await getUserProgress();
        })()
    }, []);

    const getUserProgress = async () => {
        const response: IResponseUserProgress | IError = await agent.get(`medya-api/progress`)
            .then(res => res.data)
            .catch(err => {
                return {error: err.response.data.message}
            });
        setUserProgress(response as IResponseUserProgress);
        setIsLoading(false);

    }

    const getUserImage = async () => {
        const response: IResponseUserImage | IError = await agent.get<IResponseUserImage>(`medya-api/user-image`)
            .then(res => {
                return {
                    id: res.data.id,
                    avatar: res.data.avatar,
                }
            })
            .catch(err => {
                return {error: err.response.data.message}
            });

        setUserImage(response as IResponseUserImage);
    }
    return (
        <>
            <Container maxWidth="xl">
                {!isLoading && (
                    <Grid container alignItems='center'>
                        <Grid item xs>
                            <Grid container flexDirection='column'>
                                <Grid item>
                                    <MainInformationComponent
                                        userProgress={userProgress}
                                        userImage={userImage}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default Profile;