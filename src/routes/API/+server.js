import { json } from '@sveltejs/kit';

/**
 * API Utilities - Backend functionality showcase
 */

// Calculate factorial
function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci sequence
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}

// Prime number checker
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Get primes up to n
function getPrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

// Reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check palindrome
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

/**
 * GET /API - Get all available endpoints
 */
export async function GET() {
    return json({
        message: 'Megatron API - Backend Services Showcase',
        endpoints: [
            {
                path: '/API/factorial',
                method: 'POST',
                description: 'Calculate factorial of a number',
                example: { body: { n: 5 }, result: 120 }
            },
            {
                path: '/API/fibonacci',
                method: 'POST',
                description: 'Generate Fibonacci sequence',
                example: { body: { n: 7 }, result: [0, 1, 1, 2, 3, 5, 8] }
            },
            {
                path: '/API/primes',
                method: 'POST',
                description: 'Get all prime numbers up to n',
                example: { body: { n: 20 }, result: [2, 3, 5, 7, 11, 13, 17, 19] }
            },
            {
                path: '/API/palindrome',
                method: 'POST',
                description: 'Check if a string is a palindrome',
                example: { body: { text: 'racecar' }, result: true }
            },
            {
                path: '/API/reverse',
                method: 'POST',
                description: 'Reverse a string',
                example: { body: { text: 'hello' }, result: 'olleh' }
            }
        ]
    });
}

/**
 * POST /API/factorial - Calculate factorial
 */
export async function POST({ request, url }) {
    const pathname = url.pathname;

    // Route to appropriate handler
    if (pathname.endsWith('/factorial')) {
        const { n } = await request.json();
        if (typeof n !== 'number' || n < 0) {
            return json({ error: 'Invalid input. n must be a non-negative number' }, { status: 400 });
        }
        const result = factorial(n);
        return json({ input: n, result, operation: 'factorial' });
    }

    if (pathname.endsWith('/fibonacci')) {
        const { n } = await request.json();
        if (typeof n !== 'number' || n <= 0) {
            return json({ error: 'Invalid input. n must be a positive number' }, { status: 400 });
        }
        const result = fibonacci(n);
        return json({ input: n, result, operation: 'fibonacci' });
    }

    if (pathname.endsWith('/primes')) {
        const { n } = await request.json();
        if (typeof n !== 'number' || n <= 1) {
            return json({ error: 'Invalid input. n must be greater than 1' }, { status: 400 });
        }
        const result = getPrimesUpTo(n);
        return json({ input: n, result, count: result.length, operation: 'primes' });
    }

    if (pathname.endsWith('/palindrome')) {
        const { text } = await request.json();
        if (typeof text !== 'string') {
            return json({ error: 'Invalid input. text must be a string' }, { status: 400 });
        }
        const result = isPalindrome(text);
        return json({ input: text, result, operation: 'palindrome' });
    }

    if (pathname.endsWith('/reverse')) {
        const { text } = await request.json();
        if (typeof text !== 'string') {
            return json({ error: 'Invalid input. text must be a string' }, { status: 400 });
        }
        const result = reverseString(text);
        return json({ input: text, result, operation: 'reverse' });
    }

    return json({ error: 'Endpoint not found' }, { status: 404 });
}
