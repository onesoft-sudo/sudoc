import { forwardRef, Ref } from "react";
import { MdSearch } from "react-icons/md";

type SearchInputProps = {
    setQuery: (query: string | null) => void;
};

const SearchInput = (
    { setQuery }: SearchInputProps,
    ref: Ref<HTMLInputElement>,
) => {
    return (
        <div className="flex items-center gap-2 bg-neutral-800 rounded-lg p-2">
            <MdSearch
                className="text-black/50 mt-0.5 dark:text-white/90 pointer-events-none flex-shrink-0"
                size={23}
            />

            <input
                ref={ref}
                type="text"
                onChange={event => setQuery(event.target.value)}
                placeholder="Type to search..."
                className="!outline-none !border-0 !focus:outline-none"
            />
        </div>
    );
};

export default forwardRef(SearchInput);
