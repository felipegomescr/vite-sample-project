export async function fetcher<Type>(
  input: RequestInfo,
  init?: RequestInit
): Promise<Type> {
  const res = await fetch(input, init);

  return await res.json();
}
