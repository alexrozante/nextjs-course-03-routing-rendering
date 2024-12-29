import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/helpers/news";
import NewsList from "@/components/news-list";
import Link from "next/link";

export default async function FilterNewsPage({ params }) {
  const filters = (await params)?.filter;

  let year = filters?.[0];
  let month = filters?.[1];
  
  let links = await getAvailableNewsYears();
  
  let newsList;

  if (filters) {
    if (year) {
      links = await getAvailableNewsMonths(year);
      if (month)
        newsList = await getNewsForYearAndMonth(year, month)
      else
        newsList = await getNewsForYear(year);

      if (!newsList || newsList.length < 1)
        throw new Error('Invalid filter.');
    }
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          {year && month && (
            <Link href={`/archive/${year}`}>{year}-{month}</Link>
          )}
          {year && !month && (
            <Link href={`/archive`}>{year}</Link>
          )}
          {year && <p> </p>}
          <ul>
            {links.map((link) => (
              <li key={link}>
                {year && !month ? (
                  <Link href={`/archive/${year}/${link}`}>{link}</Link>
                ) : !year ? (
                  <Link href={`/archive/${link}`}>{link}</Link>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {!newsList && <p>Please, select an year to search.</p>}
      {newsList && <NewsList news={newsList} />}
    </>
  );
}
