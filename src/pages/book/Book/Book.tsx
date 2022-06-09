import React, {FC, useEffect, useState} from 'react';
import {Box, Container, Pagination, Typography} from "@mui/material";
import {
    HeadContent as HeadContentComponent,
    MainContent as MainContentComponent
} from './components';
import {createUseStyles} from "react-jss";
import {useLocation, useNavigate} from "react-router-dom";
import {IBookContent, IResponseBookContent} from "../../../types/ResponseTypes";
import {agent} from "../../../api/agent";
import queryString from "query-string";
import {Notification, NotificationTypes} from "../../../common/Notification";

interface BookProps {
}

const Book: FC<BookProps> = (props) => {
    const {} = props;
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
    const [activeBook, setActiveBook] = useState(location.pathname.split('/')[2]);
    const [filter, setFilter] = useState({page: 1});
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
        })();
    }, []);

    useEffect(() => {
        (async () => {
            await getBookContent();
        })();
    }, [filter]);

    const initFilter = async () => {
        const search = location.search || "";
        const parseSearch = queryString.parse(search, {
            arrayFormat: "bracket",
        });
        const initFilter = {
            page: Number(parseSearch.page) || filter.page,
        };

        setFilter(initFilter);
    };

    const getBookContent = async () => {
        await setIsLoading(true);
        const response: IResponseBookContent = await agent.get<IResponseBookContent>(`medya-api/${activeBook}?page=${filter.page}`)
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

    const handleChangePage = async (page: number) => {
        let newFilter = {...filter};
        newFilter.page = page;

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
                                    size="large"
                                    page={filter.page}
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
});

export default Book;