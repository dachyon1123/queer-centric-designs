import { useState, useEffect } from "react";

export default function UploadFile() {
  const [file, setFile] = useState();
  const [pattern, setPattern] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', file)
    formData.append("pattern", pattern);
    formData.append("model", model);
    formData.append("price", price);

    fetch("http://localhost:5000/image", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Image uploaded successfully");
        } else {
          console.error("Failed to upload image");
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }

  return (
    <>
      <form
        encType="multipart/form-data"
        className="flex flex-col items-center justify-center gap-2 mt-32"
        action="/image"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="file">Upload File</label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor="pattern" className="mt-4">
          Pattern Name
        </label>
        <input
          type="text"
          name="pattern"
          id="pattern"
          onChange={(e) => setPattern(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          value={pattern}
        />

        <label htmlFor="model" className="mt-4">
          Model Name
        </label>
        <input
          type="text"
          name="model"
          id="model"
          onChange={(e) => setModel(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          value={model}
        />

        <label htmlFor="price" className="mt-4">
          Set Price
        </label>
        <input
          type="number"
          name="price"
          id="uploaded_price"
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          value={price}
        />

        <button type="submit" className="btn btn-md">
          Submit
        </button>
      </form>

      <img src="/image/d93347d7b57f2308d8e8ce9fcacc5a04" alt="" />
    </>
  );
}
