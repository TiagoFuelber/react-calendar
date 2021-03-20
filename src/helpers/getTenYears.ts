const getTenYears = (currentYear: number): number[] => {
    let years = [];
    for (let index = currentYear; index < currentYear + 10; index++) {
        years.push(index);
    }

    return years;
}

export default getTenYears;