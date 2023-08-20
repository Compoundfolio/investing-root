import debounce from "lodash/debounce"
import { IUseSearch } from "./useSearch";
import { Option } from "src/core/types";
import { Dispatch, SetStateAction } from "react";

export const debouncedFetchData = debounce(async (
  serverSearchRequest: IUseSearch['serverSearchRequest'],
  query: string,
  cb: (options: Option[] | []) => void,
  setIsSearching: Dispatch<SetStateAction<boolean>>,
) => {
  setIsSearching(true)
  const res = await serverSearchRequest(query);
  setIsSearching(false)
  cb(res);
 }, 1000);