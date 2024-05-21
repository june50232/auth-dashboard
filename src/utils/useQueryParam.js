import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as JSURL from "jsurl";

/**
 * This custom hook is a wrapper around `useSearchParams()` that parses and
 * serializes the search param value using the JSURL library, which permits any
 * JavaScript value to be safely URL-encoded.
 *
 * It's a good example of how React hooks offer a great deal of flexibility when
 * you compose them together!
 *
 * TODO: rethink the generic type here, users can put whatever they want in the
 * URL, probably best to use runtime validation with a type predicate:
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
const useQueryParam = (key, defaultValue) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);

  let value = useMemo(() => JSURL.parse(paramValue) || defaultValue, [paramValue]);

  let setValue = useCallback(
    (newValue, options) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSURL.stringify({ ...value, ...newValue }));
      setSearchParams(newSearchParams, { replace: true, ...options });
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}

export default useQueryParam