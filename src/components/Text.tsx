import styled, { CSSProperties } from 'styled-components';

type TextProps = {
    text: string;
    fontColor: string;
    fontSize: string;
    fontWeight?: 400 | 500 | 600 | 700;
    additionalStyles?: CSSProperties;
};

type _Text = {
    $fontColor: string;
    $fontSize: string;
    $fontWeight?: 400 | 500 | 600 | 700;
    $additionalStyles?: CSSProperties;
};

const Txt = styled.h1<_Text>`
    color: ${props => props.$fontColor};
    font-size: ${props => props.$fontSize};
    line-height: calc(${props => props.$fontSize} * 1.5);
    font-weight: ${props => props.$fontWeight ?? 400};
    ${props => props.$additionalStyles && { ...props.$additionalStyles }}
`;

const Text = (props: TextProps) => {
    return (
        <Txt
            $fontColor={props.fontColor}
            $fontSize={props.fontSize}
            $fontWeight={props.fontWeight}
            $additionalStyles={props.additionalStyles}
        >
            {props.text}
        </Txt>
    );
};

export default Text;
