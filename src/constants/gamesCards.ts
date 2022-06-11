import {
    RebusGameIcon,
    QuizGameIcon,
    ProverbGameIcon,
    ArrowRebusGameIcon,
    FindWordGameIcon
} from '../assets/svg';
import {
    FindWordGameImage1,
    ArrowRebusGameImage1,
    ArrowRebusGameImage2,
    ArrowRebusGameImage3,
    ArrowRebusGameImage4,
    RebusGameImage1,
    RebusGameImage2,
    RebusGameImage3,
} from '../assets/images';
import {IGameCard} from "../types/ContantsTypes";

export const gamesCards: IGameCard[] = [
    {
        id: 1,
        title: "Квиз-игра №1",
        label: "quiz-1-1",
        bookNumber: "Книга 1",
        image: QuizGameIcon,
        to: `first_book/games/quiz-1-1`,
        type: "quiz",
        questions: [
            {
                question: "Как зовут хранителя медного царства?", answers: [{
                    id: '1', value: "Медяшка", correct: true,
                }, {
                    id: '2', value: "Золотинка", correct: false,
                }, {
                    id: '3', value: "Земляшка", correct: false,
                },]
            }, {
                question: "Что подарили родители Жорику?", answers: [{
                    id: '4', value: "Кроссовки", correct: false,
                }, {
                    id: '5', value: "Книжку", correct: false,
                }, {
                    id: '6', value: "Телефон", correct: true,
                },]
            }, {
                question: "Сколько лет исполнилось Жорику?", answers: [{
                    id: '7', value: "12", correct: false,
                }, {
                    id: '8', value: "8", correct: true,
                }, {
                    id: '9', value: "10", correct: false,
                },]
            }
        ]
    },
    {
        id: 2,
        title: "Квиз-игра №2",
        label: "quiz-2-1",
        bookNumber: "Книга 1",
        image: QuizGameIcon,
        to: `first_book/games/quiz-2-1`,
        type: "quiz",
        questions: [
            {
                question: "Что нашёл Жорка на дне рюкзака?", answers: [{
                    id: '1', value: "Свитер", correct: false,
                }, {
                    id: '2', value: "Маленького Медяшку", correct: true,
                }, {
                    id: '3', value: "Напиток", correct: false,
                },]
            }, {
                question: "'Полушка' это сколько копеек?", answers: [{
                    id: '4', value: "1/2 копейки", correct: false,
                }, {
                    id: '5', value: "1/4 копейки", correct: false,
                }, {
                    id: '6', value: "1/8 копейки", correct: true,
                },]
            }, {
                question: "В честь кого назвали Жорика?", answers: [{
                    id: '7', value: "Дедушки", correct: false,
                }, {
                    id: '8', value: "Прадеда", correct: true,
                }, {
                    id: '9', value: "Папы", correct: false,
                },]
            }
        ]
    },
    {
        id: 3,
        title: "Квиз-игра №1",
        label: "quiz-1-2",
        bookNumber: "Книга 2",
        image: QuizGameIcon,
        to: `second_book/games/quiz-1-2`,
        type: "quiz",
        questions: [
            {
                question: "Какой класс окончили Санька и Данька?", answers: [{
                    id: '1', value: "Четвертый", correct: false,
                }, {
                    id: '2', value: "Они еще были в детском садике", correct: false,
                }, {
                    id: '3', value: "Первый", correct: true,
                },]
            }, {
                question: "Где работает папа Саньки?", answers: [{
                    id: '4', value: "На заводе", correct: true,
                }, {
                    id: '5', value: "В магазине", correct: false,
                }, {
                    id: '6', value: "В офисе", correct: false,
                },]
            }, {
                question: "Кто мальчиков сделал маленькими?", answers: [{
                    id: '7', value: "Медяшка", correct: false,
                }, {
                    id: '8', value: "Царица муравьев", correct: true,
                }, {
                    id: '9', value: "Колдун", correct: false,
                },]
            }
        ]
    },
    {
        id: 4,
        title: "Квиз-игра №1",
        label: "quiz-1-3",
        bookNumber: "Книга 3",
        image: QuizGameIcon,
        // @ts-ignore
        to: `third_book/games/quiz-1-3`,
        type: "quiz",
        questions: [
            {
                question: "О ком давно мечтала Женя?", answers: [{
                    id: '1', value: "Хомяк", correct: false,
                }, {
                    id: '2', value: "Собака", correct: true,
                }, {
                    id: '3', value: "Кошка", correct: false,
                },]
            }, {
                question: "Как звали собачку Жени?", answers: [{
                    id: '4', value: "Жучка", correct: false,
                }, {
                    id: '5', value: "Жулька", correct: true,
                }, {
                    id: '6', value: "Тучка", correct: false,
                },]
            }, {
                question: "Какой породы была Жулька?", answers: [{
                    id: '7', value: "Мальтийская болонка", correct: true,
                }, {
                    id: '8', value: "Мальтийская борзая", correct: false,
                }, {
                    id: '9', value: "Мальтийская овчарка", correct: false,
                },]
            }, {
                question: "Живая природа - это..?", answers: [{
                    id: '7', value: "Объединения людей", correct: false,
                }, {
                    id: '8', value: "Объекты, которым нет надобности в питании и питье", correct: false,
                }, {
                    id: '9', value: "Живые организмы и их сообщества", correct: true,
                },]
            }
        ]
    },
    {
        id: 5,
        title: "Составьте пословицу",
        label: 'proverb-1-4',
        bookNumber: "Книга 4",
        image: ProverbGameIcon,
        // @ts-ignore
        to: `fourth_book/games/proverb-1-4`,
        type: "quiz",
        questions: [
            {
                question: "Родина - мать,", answers: [{
                    id: '1', value: "Умей за нее постоять", correct: true,
                }, {
                    id: '2', value: "Умей ее защищать", correct: false,
                }, {
                    id: '3', value: "Умей за нее полежать", correct: false,
                },]
            },
            {
                question: "Человек без Родины,", answers: [{
                    id: '4', value: "Что птица без крыльев", correct: false,
                }, {
                    id: '5', value: "Что соловей без песни", correct: true,
                }, {
                    id: '6', value: "Что ворона без сыра", correct: false,
                },]
            },
            {
                question: "Где кто родится,", answers: [{
                    id: '7', value: "Там и не годится", correct: false,
                }, {
                    id: '8', value: "Там и живет", correct: false,
                }, {
                    id: '9', value: "Там и пригодится", correct: true,
                },]
            },
            {
                question: "В родном краю сокол,", answers: [{
                    id: '7', value: "В ином - воробей", correct: false,
                }, {
                    id: '8', value: "В другом - человек", correct: false,
                }, {
                    id: '9', value: "В чужом - ворона", correct: true,
                },]
            },
            {
                question: "За морем светло,", answers: [{
                    id: '7', value: "А у нас светлее", correct: true,
                }, {
                    id: '8', value: "А у моря тепло", correct: false,
                }, {
                    id: '9', value: "А в море темно", correct: false,
                },]
            },
            {
                question: "Много стран прошел,", answers: [{
                    id: '7', value: "А так и не дошел", correct: false,
                }, {
                    id: '8', value: "А добро лишь на Родине нашел", correct: true,
                }, {
                    id: '9', value: "А добра и не нашел", correct: false,
                },]
            },
            {
                question: "Глупа та птица,", answers: [{
                    id: '7', value: "Которой гнездо свое не мило", correct: true,
                }, {
                    id: '8', value: "Которой птенцы свои не милы", correct: false,
                }, {
                    id: '9', value: "Которая гнездо свое рушит", correct: false,
                },]
            },
            {
                question: "В своем болоте и лягушка поет,", answers: [{
                    id: '7', value: "И играет, и живет", correct: false,
                }, {
                    id: '8', value: "А на чужбине он молчит", correct: false,
                }, {
                    id: '9', value: "А на чужбине и соловей молчит", correct: true,
                },]
            },
            {
                question: "Одна у человека родная мать,", answers: [{
                    id: '7', value: "Один у него и Отец", correct: false,
                }, {
                    id: '8', value: "Одна у него и Родина", correct: true,
                }, {
                    id: '9', value: "Умей за нее постоять", correct: false,
                },]
            },
        ]
    },
    {
        id: 6,
        title: "Головоломка «Спряталось слово»",
        label: "find-word-1-4",
        bookNumber: "Книга 4",
        image: FindWordGameIcon,
        // @ts-ignore
        to: `fourth_book/games/find-word-1-4`,
        type: "text",
        questions: [
            {
                question: "Найди спрятанное слово",
                img: FindWordGameImage1,
                answers: [
                    {
                        id: '1', value: "грифон", correct: true
                    }
                ]
            }
        ],
    },
    {
        id: 7,
        title: "Стрелочный ребус",
        label: "arrow-rebus-1-4",
        bookNumber: "Книга 4",
        image: ArrowRebusGameIcon,
        // @ts-ignore
        to: `fourth_book/games/arrow-rebus-1-4`,
        type: "text",
        questions: [
            {
                question: "Прочитай слова по стрелочкам",
                img: ArrowRebusGameImage1,
                answers: [
                    {
                        id: '1', value: "город", correct: true,
                    },]
            }, {
                question: "Прочитай слова по стрелочкам",
                img: ArrowRebusGameImage2,
                answers: [
                    {
                        id: '2', value: "завод", correct: true,
                    },]
            }, {
                question: "Прочитай слова по стрелочкам",
                img: ArrowRebusGameImage3,
                answers: [
                    {
                        id: '3', value: "семья", correct: true,
                    },]
            }, {
                question: "Прочитай слова по стрелочкам",
                img: ArrowRebusGameImage4,
                answers: [
                    {
                        id: '3', value: "школа", correct: true,
                    },]
            }
        ]
    },
    {
        id: 8,
        title: "Ребус",
        label: "rebus-1-4",
        bookNumber: "Книга 4",
        image: RebusGameIcon,
        // @ts-ignore
        to: `fourth_book/games/rebus-1-4`,
        type: "text",
        questions: [
            {
                question: "Разгадайте ребус",
                img: RebusGameImage1,
                answers: [
                    {
                        id: '1', value: "герб", correct: true,
                    },]
            }, {
                question: "Разгадайте ребус",
                img: RebusGameImage2,
                answers: [
                    {
                        id: '2', value: "флаг", correct: true,
                    },]
            }, {
                question: "Разгадайте ребус",
                img: RebusGameImage3,
                answers: [
                    {
                        id: '3', value: "символ", correct: true,
                    },]
            }
        ]
    },
];