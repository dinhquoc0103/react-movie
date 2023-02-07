const dateFormat = (value) => {
    const date = new Date(value);

    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    mm = mm < 10 ? `0${mm}` : mm;
    dd = dd < 10 ? `0${dd}` : dd;

    return `${mm}/${dd}/${yyyy}`;
}

export default dateFormat;