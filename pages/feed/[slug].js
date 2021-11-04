import styles from "../../styles/feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";

const Feed = ({ pageNumber = 1, articles }) => {
    const router = useRouter();

    return (
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h3 className={styles.heading}>Top Stories</h3>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h2
                            onClick={() =>
                                (window.location.href = article.url)
                            }>
                            {article.title}
                        </h2>
                        <p>{article.description}</p>
                        {article.urlToImage ? (
                            <img
                                src={article.urlToImage}
                                alt="image not loading"
                            />
                        ) : (
                            <p>*No Image Available*</p>
                        )}
                        <p className={styles.post__source}>
                            Source: {article.source.name}
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`);
                        }
                    }}
                    className={
                        pageNumber === 1 ? styles.disabled : styles.active
                    }>
                    Prev
                </div>
                <div>{pageNumber}</div>
                <div
                    onClick={() => {
                        if (pageNumber < 5) {
                            router.push(`/feed/${pageNumber + 1}`);
                        }
                    }}
                    className={
                        pageNumber === 5 ? styles.disabled : styles.active
                    }>
                    Next
                </div>
            </div>
            <footer className={styles.footer}>
                &copy; 2021 Developed by: Jhon Patiu
            </footer>
        </div>
    );
};

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }

    const newsApiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ph&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
            },
        }
    );
    const newsJson = await newsApiResponse.json();

    const { articles } = newsJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};

export default Feed;
