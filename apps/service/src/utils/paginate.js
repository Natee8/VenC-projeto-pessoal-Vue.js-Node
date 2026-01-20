export const paginateArray = ({ array, itemsPerPage }) => {
    const pages = [];
    for (let i = 0; i < array.length; i++) {
        const pageIndex = Math.floor(i / itemsPerPage);
        if (!pages[pageIndex]) {
            pages[pageIndex] = [];
        }
        pages[pageIndex].push(array[i]);
    }
    return pages;
};
export const pagingResponse = ({ total, take, skip, data }) => {
    const totalPages = Math.ceil(total / take);
    const currentPage = Math.floor(skip / take) + 1;
    const hasNextPage = currentPage < totalPages;
    return {
        data,
        meta: {
            total,
            lastPage: totalPages,
            currentPage,
            perPage: take,
            prev: currentPage > 1 ? currentPage - 1 : undefined,
            next: hasNextPage ? currentPage + 1 : undefined
        }
    };
};
