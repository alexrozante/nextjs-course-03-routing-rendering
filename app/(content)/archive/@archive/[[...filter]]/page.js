import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/helpers/news";
import NewsList from "@/components/news-list";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({year, month}) {
  let links;
  if (!month && year) {
    links = await getAvailableNewsMonths(year);
  }
  else if (!year) {
    links = await getAvailableNewsYears();
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links &&
            links.map((link) => (
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
  );
}

async function FilteredNews({year, month}) {
  let news;
  if (year) {
    if (month) {
      news = await getNewsForYearAndMonth(year, month);
    } else {
      news = await getNewsForYear(year);
    }
  }
  let newsContent = <p>Please, select an year to search.</p>;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilterNewsPage({ params }) {
  
  const filters = (await params)?.filter;

  const year = filters?.[0];
  const month = filters?.[1];
  
  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader year={year} month={month} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </>
  );
}
