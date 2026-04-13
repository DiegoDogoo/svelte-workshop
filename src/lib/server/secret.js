// This code is only accessible on the server
export const SECRET_API_KEY = '12345-super-secret-key';

export function getSensitiveData() {
    // Logic to fetch from a database or secure API
    return { data: 'Top Secret' };
}