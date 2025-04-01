import { UserInfoType } from ".";

export interface BaseOptionType {
    disabled?: boolean;
    className?: string;
    title?: string;
    [name: string]: any;
}
export interface UserOptionType extends BaseOptionType {
    label?: React.ReactNode;
    value?: string | number | null;
    children?: Omit<UserOptionType, 'children'>[];
    userInfo: UserInfoType;
}