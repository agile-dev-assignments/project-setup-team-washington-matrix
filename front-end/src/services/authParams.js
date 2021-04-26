export default function authParams() {
    const user = JSON.parse(localStorage.getItem('token'));

    if (user && user.accessToken) {
        return { secret_token: user.accessToken };
    } else {
        return {};
    }
}
