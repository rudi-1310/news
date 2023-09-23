export default function LatestNews({ articles }) {
    if (!articles || articles.length === 0) {
        return <div>No articles available</div>;
    }

    return (
        <div>
            <h2 className='text-xl font-semibold text-center p-4 mb-4'>Latest News</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.article_id} className='mb-2 px-4 mx-auto border-b-2'>
                        <a href={article.link} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
