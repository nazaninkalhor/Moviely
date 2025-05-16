export function parseQueryParams(url) {
    const queryString = url.split("?")[1];
    if (!queryString) return {};

    return queryString.split("&").reduce((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        return acc;
    }, {});
}

export async function setUserContext(setLoading) {
    setLoading(true);
    try {
        localStorage.removeItem("cachedUser");
        const res = await fetch("/api/user", { credentials: "include" });
        const data = await res.json();
        localStorage.setItem("cachedUser", JSON.stringify(data.user));
        if (!res.ok) throw new Error("unauthenticated");
    } catch {
        throw new Error("Authorization Server Error!");
    } finally {
        setLoading(false);
    }
};