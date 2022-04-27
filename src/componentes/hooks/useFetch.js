import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);
                if (!res.ok) {
                    throw new Error({
                        err: true,
                        status: res.status,
                        statustext: !res.statusText ? "Error fetch" : res.statusText
                    });
                }
                let json = await res.json();
                setIsPending(false);
                setData(json);
                setError(new Error({ err: false }));
            } catch (error) {
                setIsPending(true);
                setError(error);
            }
        };
        getData(url);
    }, [url]);

    return { data, ispending, error };
};