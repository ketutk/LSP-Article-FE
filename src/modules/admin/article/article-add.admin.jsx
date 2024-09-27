import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { addArticle, getAllArticle } from "../../../libs/api/article.api";
import "react-quill/dist/quill.snow.css"; // Import styles
import ReactQuill from "react-quill"; // Import Quill

export const AddArticleAdmin = ({ user, token, imageUrl }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState(""); // This will store the rich text
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text); // Append rich text content
    formData.append("image", image);

    try {
      const response = await addArticle(formData, token);

      cleanState();
    } catch (error) {
      console.error("Error: ", error);
    }
    setIsLoading(false);
  };

  const cleanState = () => {
    setText("");
    setTitle("");
    setImage(null);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="basis-full md:basis-3/4 bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Article</h2>
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

          {/* Image Upload */}
          <div className="border-none">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input type="file" id="image" name="image" className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none" onChange={(e) => setImage(e.target.files[0])} required />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? "Adding Article..." : "Submit"}
            </button>
          </div>
          <a href={`/admin/article/`} className="mt-5 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-start inline-block">
            Kembali
          </a>
        </form>
      </div>
    </div>
  );
};
