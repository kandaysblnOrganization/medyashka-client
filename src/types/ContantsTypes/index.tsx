export interface IBookCard {
    id: string;
    bookNumber: string;
    title: string;
    description: string;
    year: string;
    bookCover: string;
    bookCharacter: string;
    to: string;
    bookColor: string;
    bookLinearBackground: {
        color1: string;
        color2: string;
    };
    bookLinearButtonBackground: {
        color1: string;
        color2: string;
    };
    bookLinearButtonBorder: {
        color1: string;
        color2: string;
    }
}

export interface IGameCard {
    id: number;
    label: string;
    title: string;
    bookNumber: string;
    image: string;
    to: string;
    type: string;
    color: string;
    colorOpacity: string;
    questions: IGameQuestions[];
}

export interface IGameQuestions {
    question: string;
    img?: string;
    answers: IGameAnswers[];
}

interface IGameAnswers {
    id: string;
    value: string;
    correct: boolean;
}

export interface ICharacterCard {
    id: number;
    name: string;
    description: string;
    image: string;
    color: string;
}