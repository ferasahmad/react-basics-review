export function formatDate(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - inputDate.getTime();
  const diffInHours = diff / (1000 * 60 * 60);

  if (diffInHours < 24) {
    const hoursAgo = Math.floor(diffInHours);
    return `${hoursAgo} hrs ago`;
  } else {
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");
    const year = inputDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
}
