export class RefreshTokenEntity {
    props;
    constructor(props) {
        this.props = props;
    }
    getToken() {
        return this.props.token;
    }
    getUserId() {
        return this.props.userId.getValue();
    }
    get userId() {
        return this.props.userId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get expiresAt() {
        return this.props.expiresAt;
    }
    isExpired() {
        return new Date() > this.props.expiresAt;
    }
}
