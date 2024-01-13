export function generateId() {
    const rnd = Math.random().toString(36).substring(2);
    const date = new Date().valueOf().toString(36);

    return rnd+date;
}