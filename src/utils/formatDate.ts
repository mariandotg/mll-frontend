export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("es", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}