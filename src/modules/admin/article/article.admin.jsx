import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { getAllArticle } from "../../../libs/api/article.api";

export const ArticleAdmin = ({ user, token, imageUrl }) => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllArticle(token);

        setArticles(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="basis-full md:basis-3/4 min-h-screen bg-white shadow rounded">
        <div className="w-full flex justify-end">
          <a href="/admin/article/add" className="bg-amber-400 hover:bg-amber-500 px-4 py-2 me-4 my-4 rounded">
            Tambah Artikel
          </a>
        </div>
        <h1 className="ml-4 text-2xl font-bold mb-4">List Artikel</h1>
        {articles && articles.length !== 0 ? articles.map((item) => <ArticleComponent key={item.id} item={item} imageUrl={imageUrl} />) : <div className="text-center text-2xl font-bold">Belum ada artikel</div>}
      </div>
    </div>
  );
};

const ArticleComponent = ({ item, imageUrl }) => {
  return (
    <div id="article" className="hover:bg-gray-100 flex px-3 flex-col md:flex-row border-b border-t gap-x-3 py-5">
      <div className="basis-full md:basis-1/3 mx-auto">
        <img src={`${imageUrl}${item.image}`} alt="" className="object-cover max-h-44 md:max-h-60 mx-auto" />
      </div>
      <div className="basis-full md:basis-2/3 flex flex-col items-start justify-center gap-y-5">
        <a href={`/admin/article/${item.article_id}`} className="hover:underline">
          <h1 className="line-clamp-1 text-2xl font-bold">{item.title}</h1>
        </a>
        <p className="line-clamp-4 text-justify" dangerouslySetInnerHTML={{ __html: item.text }}></p>
      </div>
    </div>
  );
};
