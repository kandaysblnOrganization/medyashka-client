export interface IResponseUser {
    token: string;
}

export interface IResponseUserProgress {
    id: number;
    percent_progress: number | string;
    first_book_last_page: number | string;
    second_book_last_page: number | string;
    third_book_last_page: number | string;
    fourth_book_last_page: number | string;
}

export interface IResponseUserImage {
    id: number;
    avatar: string;
}