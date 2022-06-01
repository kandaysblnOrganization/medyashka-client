import {
    RebusGameIcon,
    QuizGameIcon,
    ProverbGameIcon,
    ArrowRebusGameIcon,
    FindWordGameIcon
} from '../assets/svg';
import {IGameCard} from "../types/ContantsTypes";

export const gamesCards: IGameCard[] = [
    {
        id: 1,
        title: "Квиз-игра №1",
        bookNumber: "Книга 1",
        image: QuizGameIcon,
        to: "",
    },
    {
        id: 2,
        title: "Квиз-игра №2",
        bookNumber: "Книга 1",
        image: QuizGameIcon,
        to: "",
    },
    {
        id: 3,
        title: "Квиз-игра №1",
        bookNumber: "Книга 2",
        image: QuizGameIcon,
        to: "",
    },
    {
        id: 4,
        title: "Квиз-игра №1",
        bookNumber: "Книга 3",
        image: QuizGameIcon,
        to: "",
    },
    {
        id: 5,
        title: "Составьте пословицу",
        bookNumber: "Книга 4",
        image: ProverbGameIcon,
        to: "",
    },
    {
        id: 6,
        title: "Головоломка «Спряталось слово»",
        bookNumber: "Книга 4",
        image: FindWordGameIcon,
        to: "",
    },
    {
        id: 7,
        title: "Стрелочный ребус",
        bookNumber: "Книга 4",
        image: ArrowRebusGameIcon,
        to: "",
    },
    {
        id: 8,
        title: "Ребус",
        bookNumber: "Книга 4",
        image: RebusGameIcon,
        to: "",
    },
];