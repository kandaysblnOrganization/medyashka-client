import {
    PROFILE_ROUTE,
    BOOKS_ROUTE,
    FIRST_BOOK_ROUTE,
    FOURTH_BOOK_ROUTE,
    SECOND_BOOK_ROUTE,
    THIRD_BOOK_ROUTE,
    FIRST_BOOK_GAME_ROUTE,
    SECOND_BOOK_GAME_ROUTE,
    THIRD_BOOK_GAME_ROUTE,
    FOURTH_BOOK_GAME_ROUTE
} from "./routesConst";

import {
    Main as MainPage,
    Book as BookPage,
    Books as BooksPage,
    Profile as ProfilePage,
    Game as GamePage
} from '../../pages';
import {IRoutesList} from "./types";

export const authRoutes: IRoutesList[] = [
    {
        id: 1,
        path: PROFILE_ROUTE,
        element: ProfilePage,
    },
    {
        id: 8,
        path: FIRST_BOOK_GAME_ROUTE,
        element: GamePage,
    },
    {
        id: 9,
        path: SECOND_BOOK_GAME_ROUTE,
        element: GamePage,
    },
    {
        id: 10,
        path: THIRD_BOOK_GAME_ROUTE,
        element: GamePage,
    },
    {
        id: 11,
        path: FOURTH_BOOK_GAME_ROUTE,
        element: GamePage,
    }
];

export const publicRoutes: IRoutesList[] = [
    {
        id: 2,
        index: true,
        element: MainPage,
    },
    {
        id: 3,
        path: BOOKS_ROUTE,
        element: BooksPage,
    },
    {
        id: 4,
        path: FIRST_BOOK_ROUTE,
        element: BookPage,
    },
    {
        id: 5,
        path: SECOND_BOOK_ROUTE,
        element: BookPage,
    },
    {
        id: 6,
        path: THIRD_BOOK_ROUTE,
        element: BookPage,
    },
    {
        id: 7,
        path: FOURTH_BOOK_ROUTE,
        element: BookPage,
    },
];