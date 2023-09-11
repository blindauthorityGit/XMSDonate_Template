function sortByCreatedAtAscending(arr) {
    return arr.sort((a, b) => a.createdAt - b.createdAt);
}

// function sortByCreatedAtDescending(arr) {
//     return arr.sort((a, b) => b.createdAt - a.createdAt);
// }

function sortByCreatedAtDescending(arr) {
    return arr.sort((a, b) => {
        const timestampA = a.createdAt && a.createdAt.toDate ? a.createdAt.toDate().getTime() : 0;
        const timestampB = b.createdAt && b.createdAt.toDate ? b.createdAt.toDate().getTime() : 0;
        return timestampB - timestampA;
    });
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
