export class User {
    constructor(
        public userId: string,
        public email: string,
        private _token: string,
        private tokenExpirationDate
    ) {
    }

    get token() {
        if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
            return null;
        }
        return this._token;
    }

    get tokenDuration() {
        if (!this.token) {
            return 0;
        } else {
            // return 2000;
            return this.tokenExpirationDate.getTime() - new Date().getTime();
        }
    }
}
