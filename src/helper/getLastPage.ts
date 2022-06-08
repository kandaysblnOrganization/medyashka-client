import {IUserProgress} from "../store/types";

export const getLastPage = (id: string, userProgress: IUserProgress | null) => {
    switch (id) {
        case "01":
            return userProgress?.first_book_last_page || 1;
        case "02":
            return userProgress?.second_book_last_page || 1;
        case "03":
            return userProgress?.third_book_last_page || 1;
        case "04":
            return userProgress?.fourth_book_last_page || 1;
        default:
            return `?page=1`;
    }
};