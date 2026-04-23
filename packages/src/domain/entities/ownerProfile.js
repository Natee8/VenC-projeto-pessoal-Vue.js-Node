export class OwnerProfile {
    userId;
    address;
    phone;
    createdAt;
    updatedAt;
    searchRadiusKm;
    constructor(userId, address, phone, createdAt, updatedAt, searchRadiusKm) {
        this.userId = userId;
        this.address = address;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.searchRadiusKm = searchRadiusKm;
    }
    getAddress() {
        return this.address;
    }
    getUserId() {
        return this.userId;
    }
    getPhone() {
        return this.phone;
    }
    getSearchRadius() {
        return this.searchRadiusKm;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    updateAddress(address) {
        this.address = address;
        this.updatedAt = new Date();
    }
    updatePhone(phone) {
        this.phone = phone;
        this.updatedAt = new Date();
    }
    updateSearchRadius(radius) {
        this.searchRadiusKm = radius;
        this.updatedAt = new Date();
    }
}
