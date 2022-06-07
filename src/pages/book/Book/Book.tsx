import React, {FC, useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {useLocation} from "react-router-dom";
import {IBookContent, IResponseBookContent, IResponseUserProgress} from "../../../types/ResponseTypes";
import {IError} from "../../../types/ErrorTypes";
import {agent} from "../../../api/agent";
import queryString from "query-string";

interface BookProps {
}

const Book: FC<BookProps> = (props) => {
    const {} = props;
    const location = useLocation();
    const classes = useStyles();
    const [activeBook, setActiveBook] = useState(location.pathname.split('/')[2]);
    const [filter, setFilter] = useState({page: 1});
    const [userProgress, setUserProgress] = useState<IResponseUserProgress>({
        percent_progress: 0,
        third_book_last_page: 1,
        id: 0,
        fourth_book_last_page: 1,
        second_book_last_page: 1,
        first_book_last_page: 1,
    });
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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await initFilter();
            await getUserProgress();
            await getBookContent();
        })();
    }, []);

    const initFilter = async () => {
        const search = location.search || "";
        const parseSearch = queryString.parse(search, {
            arrayFormat: "bracket",
        });
        const initFilter = {
            page: Number(parseSearch.page) || 1,
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
        setTotalPage(response.count);
        setBookContent(response.rows[0]);
        setIsLoading(false);
    };

    const getUserProgress = async () => {
        setIsLoading(true);
        const response: IResponseUserProgress | IError = await agent.get(`medya-api/progress`)
            .then(res => res.data)
            .catch(err => {
                return {error: err.response.data.message}
            });
        setUserProgress(response as IResponseUserProgress);
    }

    return (
        <div>
            КНИГА
        </div>
    );
};

const useStyles = createUseStyles({});

export default Book;