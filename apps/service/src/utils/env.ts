/**
 * Function to load environment variable
 * @param {string} key - name of environment variable
 * @returns {string | null} value of environment variable
 */
const env = (key: string): string | null => {
  return process.env[key] || null
}

export default env