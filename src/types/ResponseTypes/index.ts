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

export interface IResponseBookContent {
    count: number;
    rows: IBookContent[];
}

export interface IBookContent {
    id: number;
    page_foreword: string | null;
    foreword_author: string | null;
    page_chapter: string | null;
    page_title: string | null;
    page_text: string | null;
    page_message: string | null;
}