/**
 * Simulates the execution time of a Promise.
 * @param delay Delay time in milliseconds.
 * @returns A Promise that is resolved after the specified delay.
 */
export const simulateDelay = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
