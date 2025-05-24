import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Upload, Eye, RefreshCw, Images, CheckCircle, AlertCircle, Download, Copy, Github } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  caption: string;
  category: string[];
  author: string;
  date: string;
}

const ClientSideAutoUpdater: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAutoUpdateModal, setShowAutoUpdateModal] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [updateStatus, setUpdateStatus] = useState<{ type: 'success' | 'error' | 'info' | ''; message: string }>({ type: '', message: '' });
  const [copyStatus, setCopyStatus] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isBulkMode, setIsBulkMode] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    src: '',
    caption: '',
    category: [] as string[],
    author: '',
    date: new Date().toISOString().split('T')[0]
  });

  // Bulk form state
  const [bulkFormData, setBulkFormData] = useState({
    imageUrls: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: [] as string[],
    captionPrefix: ''
  });

  const categories = [
    'all', 'action', 'police', 'criminal', 'civilian', 
    'events', 'vehicles', 'scenery'
  ];

  // Load images from localStorage
  useEffect(() => {
    loadGalleryData();
  }, []);

  // Auto-save to localStorage whenever images change
  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem('cmsGalleryImages', JSON.stringify(images));
      setHasChanges(true);
    }
  }, [images]);

  const loadGalleryData = () => {
    const savedImages = localStorage.getItem('cmsGalleryImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // Load your current gallery images here for the first time
      loadInitialGalleryImages();
    }
  };

  const loadInitialGalleryImages = () => {
    // IMPORTANT: Copy your current galleryImages array from Gallery.tsx here
    const initialImages: GalleryImage[] = [
      
    ];
    setImages(initialImages);
  };

  const resetForm = () => {
    setFormData({
      src: '',
      caption: '',
      category: [],
      author: '',
      date: new Date().toISOString().split('T')[0]
    });
    setBulkFormData({
      imageUrls: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: [],
      captionPrefix: ''
    });
    setEditingImage(null);
    setIsFormOpen(false);
    setIsBulkMode(false);
  };

  const handleSubmit = () => {
    if (isBulkMode) {
      handleBulkSubmit();
    } else {
      handleSingleSubmit();
    }
  };

  const handleSingleSubmit = () => {
    // Only require src and author - caption is now optional
    if (!formData.src || !formData.author) {
      showStatus('error', 'Please fill in Image URL and Author (required fields)');
      return;
    }

    const newImage: GalleryImage = {
      id: editingImage ? editingImage.id : `img-${Date.now()}`,
      src: formData.src,
      thumbnail: formData.src,
      caption: formData.caption || 'Untitled', // Default caption if empty
      category: formData.category,
      author: formData.author,
      date: formData.date
    };

    let updatedImages;
    if (editingImage) {
      updatedImages = images.map(img => img.id === editingImage.id ? newImage : img);
      showStatus('success', '✅ Image updated successfully!');
    } else {
      updatedImages = [...images, newImage];
      showStatus('success', '✅ New image added successfully!');
    }

    setImages(updatedImages);
    resetForm();
    setHasChanges(true);
  };

  const handleBulkSubmit = () => {
    if (!bulkFormData.imageUrls.trim() || !bulkFormData.author) {
      showStatus('error', 'Please fill in Image URLs and Author (required fields)');
      return;
    }

    // Split URLs by newlines and filter out empty lines
    const urls = bulkFormData.imageUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    if (urls.length === 0) {
      showStatus('error', 'Please provide at least one image URL');
      return;
    }

    // Create multiple images
    const newImages: GalleryImage[] = urls.map((url, index) => ({
      id: `img-${Date.now()}-${index}`,
      src: url,
      thumbnail: url,
      caption: bulkFormData.captionPrefix 
        ? `${bulkFormData.captionPrefix} ${index + 1}`
        : 'Untitled',
      category: bulkFormData.category,
      author: bulkFormData.author,
      date: bulkFormData.date
    }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    resetForm();
    setHasChanges(true);
    
    showStatus('success', `✅ Successfully added ${newImages.length} images!`);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      src: image.src,
      caption: image.caption,
      category: image.category,
      author: image.author,
      date: image.date
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
      showStatus('success', '✅ Image deleted successfully!');
      setHasChanges(true);
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (isBulkMode) {
      if (checked) {
        setBulkFormData({
          ...bulkFormData,
          category: [...bulkFormData.category, category]
        });
      } else {
        setBulkFormData({
          ...bulkFormData,
          category: bulkFormData.category.filter(c => c !== category)
        });
      }
    } else {
      if (checked) {
        setFormData({
          ...formData,
          category: [...formData.category, category]
        });
      } else {
        setFormData({
          ...formData,
          category: formData.category.filter(c => c !== category)
        });
      }
    }
  };

  const showStatus = (type: 'success' | 'error' | 'info', message: string) => {
    setUpdateStatus({ type, message });
    setTimeout(() => setUpdateStatus({ type: '', message: '' }), 4000);
  };

  const generateGalleryCode = () => {
    const code = `// 🎯 REPLACE THIS ENTIRE ARRAY in your src/pages/Gallery.tsx file
// Copy everything from "const galleryImages" to the closing "];

const galleryImages: GalleryImage[] = [
${images.map(img => `  {
    id: '${img.id}',
    src: "${img.src}",
    thumbnail: "${img.thumbnail}",
    caption: '${img.caption.replace(/'/g, "\\'")}',
    category: [${img.category.map(c => `'${c}'`).join(', ')}],
    author: '${img.author.replace(/'/g, "\\'")}',
    date: '${img.date}'
  }`).join(',\n')}
];

// 🚀 STEPS TO UPDATE:
// 1. Copy this entire code block
// 2. Open src/pages/Gallery.tsx
// 3. Find the existing "const galleryImages: GalleryImage[] = [" line
// 4. Replace the ENTIRE array (including the closing "];") with this code
// 5. Save the file
// 6. Commit to GitHub: git add . && git commit -m "Update gallery images" && git push
// 7. Vercel will auto-deploy in 2-3 minutes! ✨`;

    return code;
  };

  const openAutoUpdateModal = () => {
    const code = generateGalleryCode();
    setGeneratedCode(code);
    setShowAutoUpdateModal(true);
    setHasChanges(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopyStatus(true);
      showStatus('success', '✅ Code copied to clipboard! Now paste it in Gallery.tsx');
      setTimeout(() => setCopyStatus(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyStatus(true);
      showStatus('success', '✅ Code copied to clipboard!');
      setTimeout(() => setCopyStatus(false), 2000);
    }
  };

  const downloadCodeFile = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gallery-update-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showStatus('success', '✅ Code file downloaded!');
  };

  const exportData = () => {
    const dataStr = JSON.stringify(images, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `gallery-backup-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    showStatus('success', '✅ Backup created successfully!');
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedImages = JSON.parse(e.target?.result as string);
          setImages(importedImages);
          showStatus('success', '✅ Images restored from backup!');
          setHasChanges(true);
        } catch (error: Error | unknown) {
          const message = error instanceof Error ? error.message : 'Please check the format.';
          showStatus('error', `❌ Error importing file: ${message}`);
        }
      };
      reader.readAsText(file);
    }
  };

  const filteredImages = images.filter(image => {
    const matchesSearch = image.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || image.category.includes(filterCategory);
    return matchesSearch && matchesCategory;
  });

  if (previewMode) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              🔥 Live Preview - How Gallery Will Look
            </h1>
            <button
              onClick={() => setPreviewMode(false)}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map(image => (
              <div key={image.id} className="overflow-hidden rounded-lg group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.thumbnail}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-medium truncate">{image.caption}</p>
                  <p className="text-gray-300 text-sm truncate">By {image.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              🚀 Auto Gallery Updater
            </h1>
            <p className="text-gray-400 mt-2">Manage your VENTY Roleplay gallery - add, edit, delete images instantly!</p>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setPreviewMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview Gallery
            </button>
            
            <button
              onClick={openAutoUpdateModal}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                hasChanges 
                  ? 'bg-green-600 hover:bg-green-700 animate-pulse' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              {hasChanges ? 'Update Gallery (Changes Ready!)' : 'Generate Update Code'}
            </button>
            
            <button
              onClick={exportData}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Backup
            </button>
            
            <label className="flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              Restore
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </label>
            
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              Add New Image
            </button>
            
            <button
              onClick={() => {
                setIsBulkMode(true);
                setIsFormOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Images className="w-4 h-4" />
              Bulk Add Images
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {updateStatus.message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            updateStatus.type === 'success' 
              ? 'bg-green-900/20 border-green-600/30 text-green-400' 
              : updateStatus.type === 'error'
                ? 'bg-red-900/20 border-red-600/30 text-red-400'
                : 'bg-blue-900/20 border-blue-600/30 text-blue-400'
          }`}>
            <div className="flex items-center gap-3">
              {updateStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {updateStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
              {updateStatus.type === 'info' && <RefreshCw className="w-5 h-5" />}
              <p className="font-medium">{updateStatus.message}</p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mb-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-400">🎯 Super Simple Workflow:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <p className="font-medium text-white">Add/Edit Images</p>
                <p className="text-gray-400">Use the CMS to manage images</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <p className="font-medium text-white">Generate Code</p>
                <p className="text-gray-400">Click "Update Gallery" button</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <p className="font-medium text-white">Copy & Paste</p>
                <p className="text-gray-400">Replace array in Gallery.tsx</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <p className="font-medium text-white">Deploy!</p>
                <p className="text-gray-400">Commit & push to GitHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">📊 Gallery Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{images.length}</div>
              <div className="text-gray-400 text-sm">Total Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{filteredImages.length}</div>
              <div className="text-gray-400 text-sm">Filtered Results</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {new Set(images.flatMap(img => img.category)).size}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {new Set(images.map(img => img.author)).size}
              </div>
              <div className="text-gray-400 text-sm">Authors</div>
            </div>
          </div>
        </div>

        {/* Changes Indicator */}
        {hasChanges && (
          <div className="mb-6 p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-yellow-400 font-medium">🔥 You have unsaved changes!</p>
                <p className="text-gray-300 text-sm">Click "Update Gallery" to generate the code for your website.</p>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Search images by caption or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            🖼️ Gallery Images ({filteredImages.length} showing)
          </h2>
          <div className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm">
            Live CMS
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-purple-500 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.thumbnail}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate mb-1">{image.caption}</h3>
                <p className="text-gray-400 text-sm mb-2">By {image.author}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {image.category.map(cat => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-purple-600 text-xs rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{image.date}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(image)}
                      className="p-2 text-blue-400 hover:bg-gray-700 rounded transition-colors"
                      title="Edit image"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="p-2 text-red-400 hover:bg-gray-700 rounded transition-colors"
                      title="Delete image"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Images className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No images found</p>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Auto-Update Modal */}
        {showAutoUpdateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">🚀 Auto-Generated Gallery Code</h2>
                <button
                  onClick={() => setShowAutoUpdateModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <h3 className="text-green-400 font-semibold mb-2">📋 Quick Steps:</h3>
                <ol className="text-sm text-gray-300 space-y-1">
                  <li>1. Copy the code below</li>
                  <li>2. Open <code className="bg-gray-700 px-1 rounded">src/pages/Gallery.tsx</code></li>
                  <li>3. Find the <code className="bg-gray-700 px-1 rounded">const galleryImages</code> array</li>
                  <li>4. Replace the ENTIRE array with this code</li>
                  <li>5. Save → Commit → Push to GitHub</li>
                  <li>6. Vercel deploys automatically! ✨</li>
                </ol>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Generated Code ({images.length} images)
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                        copyStatus 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
                      }`}
                    >
                      {copyStatus ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copyStatus ? 'Copied!' : 'Copy Code'}
                    </button>
                    <button
                      onClick={downloadCodeFile}
                      className="flex items-center gap-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
                <textarea
                  value={generatedCode}
                  readOnly
                  className="w-full h-96 px-3 py-2 bg-gray-900 text-green-400 rounded border border-gray-600 font-mono text-sm"
                  style={{ fontFamily: 'Monaco, Consolas, "Courier New", monospace' }}
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAutoUpdateModal(false)}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Open GitHub
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {editingImage ? '✏️ Edit Image' : isBulkMode ? '📸 Bulk Add Images' : '➕ Add New Image'}
                </h2>
                <div className="flex items-center gap-3">
                  {!editingImage && (
                    <div className="flex bg-gray-700 rounded-lg p-1">
                      <button
                        onClick={() => setIsBulkMode(false)}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          !isBulkMode 
                            ? 'bg-orange-500 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Single
                      </button>
                      <button
                        onClick={() => setIsBulkMode(true)}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          isBulkMode 
                            ? 'bg-blue-500 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Bulk
                      </button>
                    </div>
                  )}
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {isBulkMode ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <h3 className="text-blue-400 font-semibold mb-2">📦 Bulk Upload Tips:</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Paste multiple image URLs (one per line)</li>
                      <li>• All images will use the same author, date, and categories</li>
                      <li>• Captions will be auto-numbered if you provide a prefix</li>
                      <li>• Perfect for adding multiple screenshots from the same event!</li>
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      🖼️ Image URLs <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={bulkFormData.imageUrls}
                      onChange={(e) => setBulkFormData({...bulkFormData, imageUrls: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none h-32"
                      placeholder={`https://discord.com/attachments/.../image1.png
https://discord.com/attachments/.../image2.png
https://discord.com/attachments/.../image3.png

(One URL per line)`}
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      💡 Paste one image URL per line. Right-click images → Copy Link Address
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      👤 Author <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={bulkFormData.author}
                      onChange={(e) => setBulkFormData({...bulkFormData, author: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="Who took these screenshots?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">📅 Date</label>
                    <input
                      type="date"
                      value={bulkFormData.date}
                      onChange={(e) => setBulkFormData({...bulkFormData, date: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      📝 Caption Prefix <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={bulkFormData.captionPrefix}
                      onChange={(e) => setBulkFormData({...bulkFormData, captionPrefix: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="Event Scene"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      💡 Images will be named: "Event Scene 1", "Event Scene 2", etc.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">🏷️ Categories</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.filter(cat => cat !== 'all').map(category => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={bulkFormData.category.includes(category)}
                            onChange={(e) => handleCategoryChange(category, e.target.checked)}
                            className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                          />
                          <span className="text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      🖼️ Image URL <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="url"
                      value={formData.src}
                      onChange={(e) => setFormData({...formData, src: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="https://discord.com/attachments/... or any image URL"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      💡 Right-click on Discord images → Copy Link Address
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      📝 Caption <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.caption}
                      onChange={(e) => setFormData({...formData, caption: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="Describe what's happening in the image (optional)"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      💡 Leave empty for auto-generated "Untitled" caption
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      👤 Author <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="Who took this screenshot?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">📅 Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">🏷️ Categories</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.filter(cat => cat !== 'all').map(category => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={formData.category.includes(category)}
                            onChange={(e) => handleCategoryChange(category, e.target.checked)}
                            className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                          />
                          <span className="text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.src && (
                    <div>
                      <label className="block text-sm font-medium mb-2">👀 Preview</label>
                      <div className="relative">
                        <img
                          src={formData.src}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded border border-gray-600"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded hover:opacity-90 transition-opacity font-medium"
                >
                  {editingImage 
                    ? '✅ Update Image' 
                    : isBulkMode 
                      ? '🚀 Add All Images' 
                      : '🚀 Add Image'}
                </button>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientSideAutoUpdater;