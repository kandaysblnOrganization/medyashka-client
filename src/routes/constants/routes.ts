import {
    Main as MainPage,
    Book as BookPage,
    Books as BooksPage,
    Profile as ProfilePage,
    AboutUs as AboutsUsPage
} from '../../pages';
import {
    PROFILE_ROUTE,
    BOOKS_ROUTE,
    FIRST_BOOK_ROUTE,
    FOURTH_BOOK_ROUTE,
    SECOND_BOOK_ROUTE,
    THIRD_BOOK_ROUTE,
    ABOUT_US_ROUTE,
} from "./routesConst";

export const authRoutes = [
    {
        id: 1,
        path: PROFILE_ROUTE,
        element: ProfilePage,
        footer: false,
    }
];

export const publicRoutes = [
    {
        id: 1,
        index: true,
        element: MainPage,
        footer: true,
    },
    {
        id: 2,
        path: BOOKS_ROUTE,
        element: BooksPage,
        footer: false,
    },
    {
        id: 3,
        path: ABOUT_US_ROUTE,
        element: AboutsUsPage,
        footer: true,
    },
    {
        id: 4,
        path: FIRST_BOOK_ROUTE,
        element: BookPage,
        footer: true,
    },
    {
        id: 5,
        path: SECOND_BOOK_ROUTE,
        element: BookPage,
        footer: true,
    },
    {
        id: 6,
        path: THIRD_BOOK_ROUTE,
        element: BookPage,
        footer: true,
    },
    {
        id: 7,
        path: FOURTH_BOOK_ROUTE,
        element: BookPage,
        footer: true,
    },
];