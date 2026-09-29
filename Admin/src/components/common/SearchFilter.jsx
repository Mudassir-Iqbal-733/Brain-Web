import { FiSearch, FiX } from "react-icons/fi";

const SearchFilter = ({
  search,
  setSearch,
  searchPlaceholder = "Search...",
  filters = [],
  onReset,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className={filters.length > 0 ? "lg:col-span-6" : "lg:col-span-10"}>
          <label className="mb-2 block text-xs font-semibold text-slate-700">
            Search
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
          />
        </div>

        {filters.map((filter) => (
          <div key={filter.name} className="lg:col-span-2">
            <label className="mb-2 block text-xs font-semibold text-slate-700">
              {filter.label}
            </label>

            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none transition focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/10"
            >
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="flex items-end gap-2 lg:col-span-2">
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#0d9488] text-sm font-semibold text-white transition hover:bg-[#0b7d72]"
          >
            <FiSearch size={16} />
            Filter
          </button>

          <button
            type="button"
            onClick={onReset}
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-slate-200 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            <FiX size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;