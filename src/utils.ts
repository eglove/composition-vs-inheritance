export const dataStringToDate = (dataString: string): Date => {
    const dateParts = dataString
        .split('/')
        .map((value: string): number => parseInt(value, 10));

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
