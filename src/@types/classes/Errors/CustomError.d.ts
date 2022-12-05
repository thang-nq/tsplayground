export default class CustomError {
    name: string;
    status: number;
    messsage?: string;
    additionalInfo?: any;
    constructor(name: string, status: number | undefined, message: string, additionalInfo?: any);
}
