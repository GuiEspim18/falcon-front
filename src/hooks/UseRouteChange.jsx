import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useRouterChange(callback) {
    const location = useLocation();
    useEffect(function () {
        callback(location);
    }, [location, callback]);
}