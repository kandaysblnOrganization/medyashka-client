import React, {FC, useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {useLocation} from "react-router-dom";
import {IBookContent, IResponseBookContent} from "../../../types/ResponseTypes";
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
            await getBookContent();
        })();
    }, []);

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
        setTotalPage(response.count);
        setBookContent(response.rows[0]);
        setIsLoading(false);
    };

    return (
        <div>
            КНИГА
        </div>
    );
};

const useStyles = createUseStyles({});

export default Book;