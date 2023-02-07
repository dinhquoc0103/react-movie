import { useEffect } from "react";

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return undefined;
}

export default useTitle;