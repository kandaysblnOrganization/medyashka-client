import {avatarClasses, Backdrop, CircularProgress, Container, Grid} from '@mui/material';
import React, {FC, useEffect, useRef, useState} from 'react';
import {agent} from "../../../api/agent";
import {IResponseUserImage, IResponseUserProgress} from "../../../types/ResponseTypes";
import {IError} from "../../../types/ErrorTypes";
import {DialogImageForm as DialogImageForm, MainInformation as MainInformationComponent} from './components';
import {DialogConfirmationComponent} from "../../../components";
import {Notification, NotificationTypes} from "../../../common/Notification";

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
    const [isOpenImageForm, setIsOpenImageForm] = useState(false);
    const [isShowBackdrop, setIsShowBackdrop] = useState(false);

    const refDialogConfirmation = useRef<any>(null);

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

    const changeImage = async (image: any, isConfirm?: boolean) => {
        if (!isConfirm) {
            if (refDialogConfirmation && refDialogConfirmation.current) {
                refDialogConfirmation.current.onOpen({
                    message: "Вы действительно хотите изменить изображение?",
                    acceptButtonTitle: "Да, изменить",
                    cancelButtonTitle: "Нет",
                    acceptButtonAction: changeImage.bind(this, image, true),
                })
            }
            return;
        }
        await setIsShowBackdrop(true);

        const formData = new FormData();
        formData.append("avatar", image, "avatar.jpg");

        const response = await agent.put(`medya-api/user-image`, formData)
            .then(res => res.data)
            .catch(err => {
                return {error: err.response.data.message}
            });
        if (response.error) {
            Notification({
                message: response.error,
                type: NotificationTypes.error,
            });
            await setIsShowBackdrop(false);
        } else {
            await getUserImage();
            await setIsShowBackdrop(false);
        }
    };

    const handleSetIsOpenImage = (isOpen: boolean) => {
        setIsOpenImageForm(isOpen);
    };
    const handleCLoseIsOpenImage = () => {
        handleSetIsOpenImage(false);
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

                                        onOpen={handleSetIsOpenImage}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Container>

            <DialogImageForm
                isOpen={isOpenImageForm}

                onClose={handleCLoseIsOpenImage}
                onChangeImage={changeImage}
            />

            <DialogConfirmationComponent
                ref={refDialogConfirmation}
            />

            <Backdrop open={isShowBackdrop}>
                <CircularProgress color="secondary" size={64}/>
            </Backdrop>
        </>
    );
};

export default Profile;