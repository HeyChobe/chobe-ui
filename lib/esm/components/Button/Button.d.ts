/// <reference types="react" />
export interface Props {
    label: string;
    onClick: () => void;
    bg?: string;
}
export default function Button({ label, onClick, bg }: Props): JSX.Element;
