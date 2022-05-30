import {Container} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import {agent} from "../../../api/agent";
import {IResponseUserImage, IResponseUserProgress} from "../../../types/ResponseTypes";
import {IError} from "../../../types/ErrorTypes";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {Notification, NotificationTypes} from "../../../common/Notification";

interface ProfileProps {
}

const Profile: FC<ProfileProps> = (props) => {
    const {user} = useTypedSelector(state => state.user);
    const [userProgress, setUserProgress] = useState<IResponseUserProgress | {}>({});
    const [userImage, setUserImage] = useState<IResponseUserImage | {}>({});
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

        await setUserProgress(response);
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

        await setUserImage(response);
    }
    return (
        <>
            <Container maxWidth="xl">

            </Container>
        </>
    );
};

export default Profile;