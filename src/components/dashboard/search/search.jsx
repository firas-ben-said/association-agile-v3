"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";


const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const  handleSearch = useDebouncedCallback((event) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", 1);
        
        if (event) {
            event.length > 2 && params.set("q", event);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params.toString()}`);
    },300);


    return (
        <div className={styles.container}>
            <MdSearch />
            <input 
                type="text" 
                placeholder={placeholder} 
                className={styles.input} 
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    );
}


export default Search;