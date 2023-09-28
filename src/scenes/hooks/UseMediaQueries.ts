import {useState, useEffect} from "react";
const useMediaQueries = (query: string) => {
    const[matches, setMaches] = useState(false);

    useEffect(()=> {
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMaches(media.matches);
        }
        const listener = () => setMaches(media.matches);
        window.addEventListener("resize",listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
}
export default useMediaQueries;