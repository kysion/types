export class KyResponse<T extends any> {
    data: T | null = null;
    code: number = 0;
    message: string = "";
    time: string = "";
}
