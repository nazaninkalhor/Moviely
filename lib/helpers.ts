export function parseQueryParams(url) {
    const queryString = url.split("?")[1];
    if (!queryString) return {};

    return queryString.split("&").reduce((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        return acc;
    }, {});
}

export async function setUserContext(setUser) {
    try {
        const res = await fetch("/api/user", { credentials: "include" });
        if (!res.ok) {
            localStorage.removeItem("cachedUser");
            setUser(null);
            return;
        }
        const data = await res.json();
        if (data?.user) {
            localStorage.setItem("cachedUser", JSON.stringify(data.user));
            setUser(data.user);
        } else {
            localStorage.removeItem("cachedUser");
            setUser(null);
        }
    } catch {
        localStorage.removeItem("cachedUser");
        setUser(null);
    }
}
