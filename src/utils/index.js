export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const day = date.getDate();
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return formattedDate.replace(/\d+/, (day) => `${day}${daySuffix}`);
}
