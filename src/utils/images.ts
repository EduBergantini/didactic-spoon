import DollarSvgImage from "../assets/dollar.svg";
import ArrowUpSvgImage from "../assets/arrow-up.svg"
import ArrowDownSvgImage from "../assets/arrow-down.svg"
import HappyEmojiSvgImage from "../assets/happy.svg";
import SadEmojiSvgImage from "../assets/sad.svg";

export enum IconEnums {
    DOLLAR,
    ARROW_UP,
    ARROW_DOWN,
    HAPPY_EMOJI,
    SAD_EMOJI
}

const getImage = (icon: IconEnums): string => {
    switch (icon) {
        case IconEnums.ARROW_UP:
            return ArrowUpSvgImage;
        case IconEnums.ARROW_DOWN:
            return ArrowDownSvgImage;
        case IconEnums.HAPPY_EMOJI:
            return HappyEmojiSvgImage;
        case IconEnums.SAD_EMOJI:
            return SadEmojiSvgImage;
        case IconEnums.DOLLAR:
        default:
            return DollarSvgImage;
    }
};

export default getImage;