export interface GeneralResponse<T> {
    payload: any;
    errors: string[] | string;
    message: string;
    success:boolean;
}