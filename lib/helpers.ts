export function parseQueryParams(url) {
    const queryString = url.split("?")[1];
    if (!queryString) return {};

    return queryString.split("&").reduce((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        return acc;
    }, {});
}

export async function setUserContext() {
    try {
        const res = await fetch("/api/user", { credentials: "include" });

        if (!res.ok) {
            localStorage.removeItem("cachedUser");
            return;
        }

        const data = await res.json();

        if (data?.user) {
            localStorage.setItem("cachedUser", JSON.stringify(data.user));
        } else {
            localStorage.removeItem("cachedUser");
        }
    } catch {
        localStorage.removeItem("cachedUser");
    }
}
