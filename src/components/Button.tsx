import styled from 'styled-components';

type TextBtn = {
    text: string;
    fontSize: string;
    fontColor?: string;
    fontWeight?: 400 | 500 | 600 | 700;
    isIcon: false;
};

type IconBtn = {
    icon: never;
    iconFill?: string;
    isIcon: true;
};

type ButtonProps = {
    backgroundColor: string;
    padding?: string;
    boxShadow?: string;
    borderRadius?: string;
    border?: string;
    disabled?: boolean;
    onClick: () => void;
} & (TextBtn | IconBtn);

type _Btn = {
    $backgroundColor: string;
    $disabled?: boolean;
    $padding?: string;
    $boxShadow?: string;
    $border?: string;
    $borderRadius?: string;
    $iconFill?: string;
};

const Btn = styled.button<_Btn>`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${props =>
        props.$disabled ? props.theme.colors.disabled : props.$backgroundColor};
    padding: ${props => props.$padding ?? '1.34375em 1.875em'};
    box-shadow: ${props => props.$boxShadow};
    border: ${props => props.$border};
    border-radius: ${props => props.$borderRadius};
    cursor: pointer;

    ${props => props.$iconFill && `
        svg {
            fill: ${props.$iconFill};
        }
    `}    
`;

type _BtnText = {
    $fontColor?: string;
    $fontSize?: string;
    $fontWeight?: 400 | 500 | 600 | 700;
    $disabled?: boolean;
};

const BtnText = styled.span<_BtnText>`
    color: ${props => (props.$disabled ? props.theme.colors.white : props.$fontColor)};
    font-size: ${props => props.$fontSize};
    line-height: calc(${props => props.$fontSize} * 1.5);
    font-weight: ${props => (props.$fontWeight)};
`;

const Button = (props: ButtonProps) => {
    return (
        <Btn
            onClick={props.onClick}
            $backgroundColor={props.backgroundColor}
            $padding={props.padding}
            $boxShadow={props.boxShadow}
            $borderRadius={props.borderRadius}
            $border={props.border}
            $iconFill={props.isIcon ? props.iconFill : undefined}
            $disabled={props.disabled}
        >
            {props.isIcon ?
                props.icon :
                <BtnText
                    $fontColor={props.fontColor}
                    $fontSize={props.fontSize}
                    $fontWeight={props.fontWeight}
                    $disabled={props.disabled}
                >
                    {props.text}
                </BtnText>
            }
        </Btn>
    );
};

export default Button;
