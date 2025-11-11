// Returns a given string with the first letter capitalized
export default function capitalizeString(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}