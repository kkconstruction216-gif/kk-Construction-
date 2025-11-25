import React, { useState } from "react";
import axios from "axios";
import { Loader, Plus, UploadCloud } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    location: "",
    area: "",
    duration: "",
    year: "",
    type: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      const res = await axios.post(
        `https://kk-construction.onrender.com/api/projects`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("✅ Project added!");
        navigate("/manage-projects"); // Redirect back to ManageProjects page
      }
    } catch {
      toast.error("❌ Failed to add project.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8 relative p-6">
      {uploading && (
        <div className="fixed inset-0 bg-black/40 flex flex-col items-center justify-center z-50">
          <Loader size={40} className="animate-spin text-orange-500 mb-3" />
          <p className="text-white text-sm">Uploading, please wait...</p>
        </div>
      )}

      <h2 className="text-2xl font-bold text-white/80">Add New Project</h2>

      <form
        onSubmit={handleAdd}
        className="bg-[#0C226B]/10 p-6 rounded-xl grid md:grid-cols-2 gap-4"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          rows="3"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 md:col-span-2"
        />

        {/* Area */}
        <input
          type="number"
          placeholder="Area (sq.ft)"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        />

        {/* Duration */}
        <select
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Duration</option>
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>1 Year</option>
          <option>2 Years</option>
          <option>3 Years</option>
          <option>4 Years</option>
          <option>5 Years</option>
        </select>

        {/* Year */}
        <select
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Year</option>
          {Array.from({ length: 20 }, (_, i) => {
            const y = new Date().getFullYear() - i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>

        {/* Type */}
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border text-white border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Infrastructure</option>
          <option>Renovation</option>
        </select>

        {/* Image Upload */}
        <div className="col-span-full flex flex-col items-center border-2 border-inset border-orange-400 rounded-lg p-4 cursor-pointer hover:bg-orange-50/40 transition">
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <UploadCloud size={28} className="text-orange-500" />
            <span className="text-sm text-white">Upload Image</span>
            <input type="file" hidden onChange={handleImageChange} />
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 col-span-full"
        >
          <Plus size={18} /> Add Project
        </button>
      </form>
    </div>
  );
}
