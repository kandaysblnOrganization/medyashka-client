export interface IResponseUser {
    token: string;
}

export interface IResponseUserProgress {
    id: number;
    percent_progress: number;
    first_book_last_page: number;
    second_book_last_page: number;
    third_book_last_page: number;
    fourth_book_last_page: number;
}

export interface IResponseUserImage {
    id: number;
    avatar: string;
}