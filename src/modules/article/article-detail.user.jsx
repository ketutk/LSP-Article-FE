import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios
import { getPublishedArticleDetail } from "../../libs/api/article.api";

const ArticleDetailUser = ({ user, token, imageUrl }) => {
  const { article_id } = useParams(); // Get article_id from the URL
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch article details based on article_id
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getPublishedArticleDetail(article_id);
        setArticle(response.data.data); // Set the article data
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setTimeout(() => {
          window.location.href = "/admin/article";
        }, 2000);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="basis-full md:basis-3/4 min-h-screen bg-white shadow rounded p-6 mt-28 mx-4 md:mx-0 mb-10">
        {article && (
          <>
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-600 mb-2">By {article.author.name}</p>
            <p className="text-gray-400 text-sm">Created at: {new Date(article.created_at).toLocaleDateString()}</p>

            <div className="mt-4">
              <img src={`${imageUrl}${article.image}`} alt={article.title} className="w-auto max-h-[400px] object-cover object-top mb-4 mx-auto" />

              <div
                className="article-content text-justify"
                dangerouslySetInnerHTML={{ __html: article.text }} // Sanitize rich text
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailUser;
