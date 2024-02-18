export default async function fetchSongs(language) {
  const trendingSongs = await fetch(
    `https://saavn.dev/modules?language=${language}`
  );

  if (!trendingSongs.ok) throw new Error("Unable to fetch songs Try Again");

  return trendingSongs.json();
}
