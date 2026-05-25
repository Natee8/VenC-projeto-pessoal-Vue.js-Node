import { BirthDate } from '../../valuesObjects/birthDate.js';
import { UserId } from '../../valuesObjects/userId.js';
export declare class UserProfile {
    readonly userId: UserId;
    private name;
    private birthDate?;
    private imgUrl?;
    readonly createdAt?: Date | undefined;
    private updatedAt?;
    constructor(userId: UserId, name: string, birthDate?: BirthDate | undefined, imgUrl?: string | undefined, createdAt?: Date | undefined, updatedAt?: Date | undefined);
    getName(): string;
    getBirthDate(): Date | undefined;
    getImgUrl(): string | undefined;
    updateAvatar(url: string): void;
    private touch;
}
