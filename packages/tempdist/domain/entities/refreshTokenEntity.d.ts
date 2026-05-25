import { UserId } from "../../valuesObjects/userId.js";
import { IRefreshToken } from "../dtos/IAuth.dto.js";
export declare class RefreshTokenEntity {
    private props;
    constructor(props: IRefreshToken);
    getToken(): string;
    getUserId(): number;
    get userId(): UserId;
    get createdAt(): Date;
    get expiresAt(): Date;
    isExpired(): boolean;
}
