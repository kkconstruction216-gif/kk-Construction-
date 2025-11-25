import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { UploadCloud } from "lucide-react";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  // Fetch project by ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://kk-construction.onrender.com/api/projects/${id}`);
        setProject(res.data.project);
        if (res.data.project?.image) setPreview(res.data.project.image);
      } catch {
        toast.error("Failed to fetch project.");
      }
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProject((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    setUploading(true);
    try {
      const formData = new FormData();
      Object.keys(project).forEach((key) => formData.append(key, project[key]));

      const res = await axios.put(
        `https://kk-construction.onrender.com/api/projects/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Project updated!");
        navigate("/admin/dashboard/projects");
      }
    } catch {
      toast.error("Failed to update project.");
    } finally {
      setUploading(false);
    }
  };

  if (!project) return <p className="text-white">Loading project...</p>;

  return (
    <div className="p-6 bg-[#0C226B]/10 rounded-xl space-y-4">
      {uploading && <p className="text-white">Saving changes...</p>}

      <h2 className="text-2xl font-bold text-white">Edit Project</h2>

      <input
        type="text"
        name="title"
        value={project.title || ""}
        onChange={handleChange}
        placeholder="Project Title"
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        name="location"
        value={project.location || ""}
        onChange={handleChange}
        placeholder="Location"
        className="border rounded p-2 w-full"
      />
      <textarea
        name="desc"
        value={project.desc || ""}
        onChange={handleChange}
        placeholder="Description"
        className="border rounded p-2 w-full"
      />
      <input
        type="number"
        name="area"
        value={project.area || ""}
        onChange={handleChange}
        placeholder="Area (sq.ft)"
        className="border rounded p-2 w-full"
      />

      <div className="flex flex-col">
        <label className="text-white mb-1">Upload Image</label>
        <input type="file" onChange={handleImageChange} />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
        )}
      </div>

      <button
        onClick={handleSave}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
