"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
class UserProfile {
    userId;
    name;
    birthDate;
    imgUrl;
    createdAt;
    updatedAt;
    constructor(userId, name, birthDate, imgUrl, createdAt, updatedAt) {
        this.userId = userId;
        this.name = name;
        this.birthDate = birthDate;
        this.imgUrl = imgUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getName() {
        return this.name;
    }
    getBirthDate() {
        return this.birthDate?.getValue();
    }
    getImgUrl() {
        return this.imgUrl;
    }
    updateAvatar(url) {
        this.imgUrl = url;
        this.touch();
    }
    touch() {
        this.updatedAt = new Date();
    }
}
exports.UserProfile = UserProfile;
