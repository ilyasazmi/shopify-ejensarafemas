import { useLocation, useMatches } from '@remix-run/react';
import { useMemo } from 'react';

// import { DEFAULT_LOCALE } from '~/lib/utils';

export function useVariantUrl(handle, selectedOptions) {
  const { pathname } = useLocation();

  return useMemo(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions,
    });
  }, [handle, selectedOptions, pathname]);

}

//shopify analytics
export function usePageAnalytics({ hasUserConsent = true }) {

  // const hasUserConsent = true;

  const matches = useMatches();

  const analyticsFromMatches = useMemo(() => {
    const data = {};

    matches.forEach((event) => {
      const eventData = event?.data;
      if (eventData) {
        eventData['analytics'] && Object.assign(data, eventData['analytics']);

      }
    });

    return {
      ...data,
      hasUserConsent,

    };
  }, [matches]);

  return analyticsFromMatches;
}

export function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions,
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;

  const path = isLocalePathname
    ? `${match[0]}products/${handle}`
    : `/products/${handle}`;

  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });

  const searchString = searchParams.toString();

  return path + (searchString ? '?' + searchParams.toString() : '');
}
