import {
    PROFILE_ROUTE,
    BOOKS_ROUTE,
    FIRST_BOOK_ROUTE,
    FOURTH_BOOK_ROUTE,
    SECOND_BOOK_ROUTE,
    THIRD_BOOK_ROUTE,
    ABOUT_US_ROUTE,
} from "./routesConst";
import Profile from "../../pages/profile/Profile/Profile";
import Main from "../../pages/main/Main/Main";
import Books from "../../pages/books/Books/Books";
import AboutUs from "../../pages/aboutUs/AboutUs/AboutUs";
import Book from "../../pages/book/Book/Book";

export const authRoutes = [
    {
        id: 1,
        path: PROFILE_ROUTE || '/',
        element: <Profile/>,
    }
];

export const publicRoutes = [
    {
        id: 2,
        index: true,
        element: <Main/>,
    },
    {
        id: 3,
        path: BOOKS_ROUTE,
        element: <Books/>,
    },
    {
        id: 4,
        path: ABOUT_US_ROUTE,
        element: <AboutUs/>,
    },
    {
        id: 5,
        path: FIRST_BOOK_ROUTE,
        element: <Book/>,
    },
    {
        id: 6,
        path: SECOND_BOOK_ROUTE,
        element: <Book/>,
    },
    {
        id: 7,
        path: THIRD_BOOK_ROUTE,
        element: <Book/>,
    },
    {
        id: 8,
        path: FOURTH_BOOK_ROUTE,
        element: <Book/>,
    },
];