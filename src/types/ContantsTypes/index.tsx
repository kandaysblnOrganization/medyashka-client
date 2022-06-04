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
    title: string;
    bookNumber: string;
    image: string;
    to: string;
}