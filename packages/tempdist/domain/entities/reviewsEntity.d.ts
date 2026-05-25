import { UserRole } from '../../types/userType.js';
export declare class Review {
    readonly id: string;
    readonly serviceId: string;
    readonly reviewerUserId: string;
    readonly targetUserId: string;
    private rating;
    private comment;
    private target;
    readonly createdAt: Date;
    constructor(id: string, serviceId: string, reviewerUserId: string, targetUserId: string, rating: number, comment: string | null, target: UserRole, createdAt: Date);
    private validate;
    getRating(): number;
    getComment(): string | null;
    getTarget(): UserRole;
}
