import React, {FC, useEffect, useState} from 'react';
import {
    Box,
    Container,
    Pagination,
} from "@mui/material";
import {
    HeadContent as HeadContentComponent,
    MainContent as MainContentComponent
} from './components';
import {
    createUseStyles
} from "react-jss";
import {
    useLocation,
    useNavigate
} from "react-router-dom";
import {
    IBookContent,
    IResponseBookContent
} from "../../../types/ResponseTypes";
import {
    agent
} from "../../../api/agent";
import queryString from "query-string";
import {
    Notification,
    NotificationTypes
} from "../../../common/Notification";
import {
    useTypedSelector
} from "../../../hooks/redux/useTypedSelector";
import {
    getLastPage
} from "../../../helper/getLastPage";
import {
    useActions
} from "../../../hooks/redux/useActions";
import {
    IUserProgress
} from "../../../store/types";

interface BookProps {
}

const Book: FC<BookProps> = (props) => {
    const {} = props;
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
    const {
        userProgress,
        isAuth
    } = useTypedSelector(state => state.user);
    const {
        getUserProgress
    } = useActions();
    const [activeBook, setActiveBook] = useState(location.pathname.split('/')[2]);
    const [filter, setFilter] = useState({...queryString.parse(location.search, {arrayFormat: "bracket"})});
    const [bookContent, setBookContent] = useState<IBookContent>({
        foreword_author: null,
        id: 0,
        page_chapter: null,
        page_foreword: null,
        page_message: null,
        page_text: null,
        page_title: null,
    });
    const [totalPage, setTotalPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await initFilter();
            await getUserProgress();
        })();
    }, []);

    useEffect(() => {
        (async () => {
            await getBookContent();
            await changeUserProgress();
        })();
    }, [filter]);

    const initFilter = async () => {
        const search = location.search || "";
        const parseSearch = queryString.parse(search, {
            arrayFormat: "bracket",
        });
        const initFilter = {
            page: parseSearch.page || filter.page,
        };

        setFilter(initFilter);
    };

    const getBookContent = async () => {
        await setIsLoading(true);
        const response: IResponseBookContent = await agent.get<IResponseBookContent>(`medya-api/${activeBook}?page=${filter.page || 1}`)
            .then(res => res.data)
            .catch(err => {
                const error: IResponseBookContent = {
                    count: 0,
                    rows: [
                        {
                            id: 0,
                            foreword_author: null,
                            page_chapter: null,
                            page_foreword: null,
                            page_message: null,
                            page_text: null,
                            page_title: null,
                        }
                    ]
                }
                return error;
            });
        if (response.count === 0) {
            Notification({
                message: "Ошибка загрузки книги, попробуйте позже",
                type: NotificationTypes.error,
            });
        }
        setTotalPage(response.count);
        setBookContent(response.rows[0]);
        setIsLoading(false);
    };

    const changeUserProgress = async () => {
        if (isAuth) {
            const page = filter.page || 1;
            const lastPage = getLastPage(renderNumberBook(), userProgress);
            if (+page > lastPage) {
                if (+page < lastPage + 2) {
                    const body = getBodyProgress(+page);
                    const response = await agent.put(`medya-api/progress`, body)
                        .then(res => res.data)
                        .catch(err => {
                            Notification({
                                message: "Ошибка обновления прогресса, попробуйте позже...",
                                type: NotificationTypes.error,
                            })
                        });
                    await getUserProgress();
                } else {
                    Notification({
                        message: `Вы не прочитали ${lastPage + 1} страницу`,
                        type: NotificationTypes.error,
                    });
                }
            } else {
                if (lastPage !== 1) {
                    if (lastPage > page) {
                        Notification({
                            message: `Вы уже прочитали эту страницу`,
                            type: NotificationTypes.success,
                        });
                    } else {
                        Notification({
                            message: `Вы остановились на этой странице`,
                            type: NotificationTypes.success,
                        });
                    }
                }
            }
        }
    };

    const getBodyProgress = (page: number) => {
        if (userProgress !== null) {
            let body: IUserProgress;
            switch (activeBook) {
                case "first_book":
                    body = {
                        ...userProgress,
                        first_book_last_page: page
                    };
                    return body;
                case "second_book":
                    body = {
                        ...userProgress,
                        second_book_last_page: page
                    };
                    return body;
                case "third_book":
                    body = {
                        ...userProgress,
                        third_book_last_page: page
                    };
                    return body;
                case "fourth_book":
                    body = {
                        ...userProgress,
                        fourth_book_last_page: page
                    };
                    return body;
                default:
                    body = {
                        ...userProgress,
                    };
                    return body;
            }
        } else {
            Notification({
                message: "Прогресс пользователя не найден",
                type: NotificationTypes.error,
            })
        }
    };

    const handleChangePage = async (page: number) => {
        let newFilter = {...filter};
        newFilter.page = String(page);

        navigate(`/books/${activeBook}?page=${page}`);

        setFilter(newFilter);

        await getBookContent();
    };

    const renderNumberBook = () => {
        switch (activeBook) {
            case "first_book":
                return "01";
            case "second_book":
                return "02";
            case "third_book":
                return "03";
            case "fourth_book":
                return "04";
            default:
                return "Не определен";
        }
    };

    return (
        <>
            <Container maxWidth="md">
                {!isLoading && (
                    <>
                        <Box className={classes.columnContent}>
                            <HeadContentComponent
                                page={filter.page}
                                totalPage={totalPage}
                                renderNumberBook={renderNumberBook}
                            />
                            <MainContentComponent bookContent={bookContent}/>
                            <Box className={classes.paginationContent}>
                                <Pagination
                                    className={classes.pagination}
                                    size="large"
                                    page={Number(filter.page)}
                                    count={totalPage}

                                    onChange={(e, page) => handleChangePage(page)}
                                />
                            </Box>
                        </Box>
                    </>
                )}
            </Container>
        </>
    );
};

const useStyles = createUseStyles({
    columnContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },

    paginationContent: {
        margin: "40px 0",
    },
    pagination: {
        "&.MuiPagination-root": {
            "& .MuiPagination-ul": {
                "& > li:not(:first-child), li:not(:last-child)": {
                    "& .MuiButtonBase-root": {
                        fontSize: 24,
                        "&.Mui-selected": {
                            fontWeight: 700,
                            fontSize: 24,
                            background: "#f07022",
                            color: "#FFFFFF",
                            borderRadius: 8,
                        }
                    },
                },
                "& .MuiPaginationItem-previousNext": {},
            },
        }
    },
});

export default Book;