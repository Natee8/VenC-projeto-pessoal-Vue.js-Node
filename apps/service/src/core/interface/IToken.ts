export interface IToken {
    user_id: string;
    email: string;
    company_id: string;
    company_code: string;
    type: 'ACCESS' | 'REFRESH';
    iat: number;
    exp: number;
}