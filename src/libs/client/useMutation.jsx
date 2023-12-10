import { useState } from "react";

export default function useMutation(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  function mutation(data) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
