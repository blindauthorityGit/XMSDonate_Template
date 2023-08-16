export default function storeObjectInLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}
