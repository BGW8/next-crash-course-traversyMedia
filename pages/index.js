import { server } from "../config";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
	console.log(articles);
	return (
		<div>
			<Head>
				<title>WebDev Newz</title>
				<meta name='keywords' content='web development, programming' />
			</Head>
			<ArticleList articles={articles} />
		</div>
	);
}

//! NEXT.js Data Fetching
export const getStaticProps = async () => {
	// const res = await fetch(
	// 	`https://jsonplaceholder.typicode.com/posts?_limit=6`
	// );
	//! Lets try to use our API-routes to fetch the article data:
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
