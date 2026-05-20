"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    id;
    serviceId;
    reviewerUserId;
    targetUserId;
    rating;
    comment;
    target;
    createdAt;
    constructor(id, serviceId, reviewerUserId, targetUserId, rating, comment, target, createdAt) {
        this.id = id;
        this.serviceId = serviceId;
        this.reviewerUserId = reviewerUserId;
        this.targetUserId = targetUserId;
        this.rating = rating;
        this.comment = comment;
        this.target = target;
        this.createdAt = createdAt;
        this.validate();
    }
    validate() {
        if (this.rating < 1 || this.rating > 5) {
            throw new Error('A avaliação deve estar entre 1 e 5');
        }
    }
    getRating() {
        return this.rating;
    }
    getComment() {
        return this.comment;
    }
    getTarget() {
        return this.target;
    }
}
exports.Review = Review;
