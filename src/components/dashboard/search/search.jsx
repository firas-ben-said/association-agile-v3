"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(event) {
        const params = new URLSearchParams(searchParams);
        if (event) {
            params.set("query", event);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }


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