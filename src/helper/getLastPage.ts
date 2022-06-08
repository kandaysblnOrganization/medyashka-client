import {IUserProgress} from "../store/types";

export const getLastPage = (numberBook: string, userProgress: IUserProgress | null) => {
    switch (numberBook) {
        case "first_book":
            return `?page=${userProgress?.first_book_last_page || 1}`;
        case "second_book":
            return `?page=${userProgress?.second_book_last_page || 1}`;
        case "third_book":
            return `?page=${userProgress?.third_book_last_page || 1}`;
        case "fourth_book":
            return `?page=${userProgress?.fourth_book_last_page || 1}`;
        default:
            return `?page=1`;
    }
};