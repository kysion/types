export interface BaseOptionType {
    disabled?: boolean;
    className?: string;
    title?: string;
    [name: string]: any;
}
export interface SelectOptionType<T> extends BaseOptionType {
    label?: React.ReactNode;
    value?: string | number | null;
    children?: Omit<SelectOptionType<T>, 'children'>[];
    data: T;
}