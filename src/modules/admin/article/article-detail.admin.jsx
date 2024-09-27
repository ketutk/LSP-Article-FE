import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios
import { deleteArticle, getArticleDetail, publishArticle } from "../../../libs/api/article.api";

const ArticleDetail = ({ user, token, imageUrl }) => {
  const { article_id } = useParams(); // Get article_id from the URL
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch article details based on article_id
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleDetail(article_id, token);
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

  const handlePublish = async () => {
    const confirm = window.confirm("Apakah anda yakin ingin mengubah status publish artikel ini ?");
    if (confirm) {
      await publishArticle(article_id, token);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Apakah anda yakin ingin menghapus artikel ?");
    if (confirm) {
      await deleteArticle(article_id, token);
      setTimeout(() => {
        window.location.href = "/admin/article";
      }, 2000);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="basis-full md:basis-3/4 min-h-screen bg-white shadow rounded p-6">
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

            <div className="mt-4 font-bold text-2xl">
              <p>Status: {article.is_published ? "Published" : "Draft"}</p>
            </div>

            <div className="mt-4 gap-x-4 flex flex-col md:flex-row w-full justify-end gap-y-4 md:gap-y-0">
              <a className="bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded font-bold text-center" href={`/admin/article/edit/${article_id}`}>
                Edit
              </a>
              <button className="bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded font-bold" onClick={handlePublish}>
                {article.is_published ? "Unpublish" : "Publish"}
              </button>
              <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded font-bold" onClick={handleDelete}>
                Delete
              </button>
              <a href={`/admin/article/`} className="text-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded inline-block ">
                Kembali
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
