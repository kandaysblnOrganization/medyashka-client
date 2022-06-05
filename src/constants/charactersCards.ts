import {ICharacterCard} from "../types/ContantsTypes";
import {
    Medyashka,
    Zolotinka,
    Jenka,
    Victoria
} from '../assets/images';

export const charactersCards: ICharacterCard[] = [
    {
        id: 1,
        name: "Медяшка",
        description: "Являюсь ангелом-хрантелем Медного царства. Выделяюсь своим необыкновенно рыжым цветом волос. Ношу очень теплые шарф и синий костюм.",
        image: Medyashka,
        color: '#F29641',
    },
    {
        id: 2,
        name: "Золотинка",
        description: "  Я - ангел-хранитель золотых запасов. Обладаю красочной расцветкой крыльев и роскошными золотистыми волосами!",
        image: Zolotinka,
        color: "#FFB800",
    },
    {
        id: 3,
        name: "Виктория",
        description: "Являюсь будущей школьницей. Зовут меня Виктория. Обожаю принимать участие в экскурсиях и испытаниях!",
        image: Victoria,
        color: "#ADD6FF",
    },
    {
        id: 4,
        name: "Женька",
        description: "Я - ангел-хранитель золотых запасов. Обладаю красочной расцветкой крыльев и роскошными золотистыми волосами!",
        image: Jenka,
        color: "#ECA2D9",
    },
];