/**
 * Function to load environment variable
 * @param {string} key - name of environment variable
 * @returns {string | null} value of environment variable
 */
const env = (key) => {
    return process.env[key] || null;
};
export default env;
