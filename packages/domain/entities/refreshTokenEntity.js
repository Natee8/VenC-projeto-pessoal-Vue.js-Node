export class RefreshTokenEntity {
    token;
    userId;
    createdAt;
    expiresAt;
    constructor(data) {
        this.token = data.token;
        this.userId = data.userId;
        this.createdAt = data.createdAt;
        this.expiresAt = data.expiresAt;
    }
    getUserId() {
        return this.userId.getValue();
    }
    isExpired() {
        return new Date() > this.expiresAt;
    }
    getToken() {
        return this.token;
    }
}
