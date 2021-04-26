export default function authParams() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return { secret_token: token };
    } else {
        return {};
    }
}
