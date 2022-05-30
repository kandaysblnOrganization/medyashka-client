import React, {Dispatch, FC, RefObject, SetStateAction} from 'react';
import {createUseStyles} from "react-jss";
import {Cropper} from "react-cropper";
import "cropperjs/dist/cropper.css";

interface CropProps {
    newImage: string;

    setCropper: Dispatch<SetStateAction<any>>
}

const Crop: FC<CropProps> = (props) => {
    const {
        newImage,
        setCropper
    } = props;
    const classes = useStyles();
    return (
        <>
            <Cropper
                style={{height: 400, width: "100%", overflow: 'hidden'}}
                initialAspectRatio={1}
                preview=".img-preview"
                src={newImage}
                viewMode={1}
                guides={false}
                className={classes.root}
                dragMode="move"
                cropBoxMovable={false}
                cropBoxResizable={false}
                autoCrop={true}

                onInitialized={(cropper) => setCropper(cropper)}

            />
        </>
    );
};

const useStyles = createUseStyles({
    root: {
        "& .cropper-crop-box, .cropper-view-box ": {
            borderRadius: "50%",
        },
        "& .cropper-view-box": {
            boxShadow: "0 0 0 1px #39f",
            outline: 0,
        }
    }
})

export default Crop;