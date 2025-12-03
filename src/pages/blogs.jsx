// src/pages/AllBlogs.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Clock, ChevronLeft, ChevronRight, Search, TrendingUp, Loader2, Sparkles, BookOpen } from 'lucide-react';
import { BASE_URL } from '../constants/apiTags';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('newest');
  const blogsPerPage = 9;

  // Fetch blogs from API (with search)
  const fetchBlogs = async (query = '') => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/blog-search.php`, { params: { q: query } });
      if (Array.isArray(data)) {
        const formatted = data.map(blog => ({
          ...blog,
          excerpt: blog.snippet || (blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : 'Read this interesting blog post...'),
          date: blog.created_at
            ? new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            : 'Recent',
          readTime: Math.max(1, Math.ceil((blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200)) + ' min read'
        }));
        setBlogs(formatted);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
    fetchBlogs(query); // Fetch blogs from backend with search query
  };

  const sortedBlogs = blogs.sort((a, b) => sortBy === 'newest' ? new Date(b.created_at) - new Date(a.created_at) : new Date(a.created_at) - new Date(b.created_at));

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      <p className="mt-4 text-gray-700">Loading articles...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto lg:flex-row">
          <div className="flex flex-col gap-3 text-center lg:flex-row lg:items-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-medium text-gray-800">Latest Insights</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              Our <span className="text-emerald-500">Blog</span>
            </h1>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col items-center w-full gap-3 lg:flex-row lg:w-auto">
            <div className="relative w-full lg:w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full py-2 pl-10 pr-3 transition bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative w-full lg:w-48">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full py-2 pl-10 pr-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="container px-4 py-12 mx-auto">
        {currentBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map(blog => (
                <article key={blog.id} className="overflow-hidden transition bg-white shadow rounded-2xl hover:shadow-xl">
                  <img src={blog.image_url} alt={blog.title.replace(/<[^>]*>/g, '')} className="object-cover w-full h-48" />
                  <div className="p-6">
                    <div className="flex gap-3 mb-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                      <Link to={`/blog/${blog.slug}`} state={{ blog }} dangerouslySetInnerHTML={{ __html: blog.title }} />
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                    <Link
                      to={`/blog/${blog.slug}`}
                      state={{ blog }}
                      className="inline-flex items-center gap-1 px-3 py-2 mt-4 text-sm font-semibold text-white rounded-lg bg-emerald-600 hover:bg-emerald-700"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 transition bg-white border rounded disabled:opacity-50 hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-2 rounded ${currentPage === i + 1 ? 'bg-emerald-600 text-white' : 'bg-white border hover:bg-gray-100'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 transition bg-white border rounded disabled:opacity-50 hover:bg-gray-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="mb-4 text-gray-600">No articles found.</p>
            <button
              onClick={() => { setSearchQuery(''); fetchBlogs(''); setCurrentPage(1); }}
              className="px-4 py-2 text-white rounded bg-emerald-600 hover:bg-emerald-700"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
