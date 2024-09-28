import { useEffect, useState } from "react";
import ReactQuill from "react-quill"; // Import Quill
import "react-quill/dist/quill.snow.css"; // Import styles
import { editArticle, getArticleDetail } from "../../../libs/api/article.api"; // Assuming you have these API functions
import { useParams } from "react-router-dom";

export const EditArticleAdmin = ({ user, token, imageUrl }) => {
  const { article_id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState(""); // This will store the rich text
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the article data on component mount
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleDetail(article_id, token); // Assuming this function gets the article data by articleId
        const articleData = response.data.data;
        setTitle(articleData.title);
        setText(articleData.text);
        setCurrentImage(articleData.image); // Store the existing image URL
      } catch (error) {
        console.error("Error fetching article:", error);
        setTimeout(() => {
          window.location.href = "/admin/article/";
        }, 2000);
      }
    };

    fetchArticle();
  }, []);

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);

    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setImagePreview(previewUrl);

    // Clean up the preview URL when the component is unmounted or the image is changed
    return () => URL.revokeObjectURL(previewUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text); // Append rich text content
    if (image) {
      formData.append("image", image); // Only append new image if it has been changed
    }
    try {
      const response = await editArticle(article_id, formData, token); // Assuming this function updates the article

      setTimeout(() => {
        window.location.href = `/admin/article/${article_id}`;
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating article:", error);
      setIsLoading(false);
    }
  };

  const cleanState = () => {
    setText("");
    setTitle("");
    setImage(null);
    setCurrentImage("");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="basis-full md:basis-3/4 bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-6">Edit Article</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Rich Text Editor for Text */}
          <div className="">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Text
            </label>
            <ReactQuill theme="snow" value={text} onChange={setText} className="mt-1 block w-full h-40 text-sm rounded-md my-20" />
          </div>

          {/* Current Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Current Image</label>
            <img src={imagePreview ? imagePreview : `${imageUrl}${currentImage}`} alt="Current Article" className="w-full h-auto mb-4 rounded" />
          </div>

          {/* Image Upload */}
          <div className="border-none">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload New Image (Optional)
            </label>
            <input type="file" id="image" name="image" accept="image/*" className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none" onChange={onChangeImage} />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? "Updating Article..." : "Update Article"}
            </button>
          </div>
        </form>
        <a href={`/admin/article/${article_id}`} className="mt-5 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-start inline-block">
          Kembali
        </a>
      </div>
    </div>
  );
};
