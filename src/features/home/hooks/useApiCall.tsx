import { useEffect, useState } from 'react';

export const useApiCall = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = true;
    setLoading(true);

    //API call

    return () => {
      cancelled = false;
    };
  }, []);

  return [result, loading] as const;
};
