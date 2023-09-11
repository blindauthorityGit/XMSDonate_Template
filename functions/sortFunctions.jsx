function sortByCreatedAtAscending(arr) {
    return arr.sort((a, b) => a.createdAt - b.createdAt);
}

function sortByCreatedAtDescending(arr) {
    return arr.sort((a, b) => b.createdAt - a.createdAt);
}

function sortBySumAscending(arr) {
    return arr.sort((a, b) => a.sum - b.sum);
}

function sortBySumDescending(arr) {
    return arr.sort((a, b) => b.sum - a.sum);
}

function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByNameDescending(arr) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
}

export {
    sortByCreatedAtAscending,
    sortByCreatedAtDescending,
    sortBySumAscending,
    sortBySumDescending,
    sortByNameAscending,
    sortByNameDescending,
};
