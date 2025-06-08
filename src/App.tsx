import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { PromptDetail } from './pages/PromptDetail';
import { Rankings } from './pages/Rankings';
import { Categories } from './pages/Categories';

function App() {
  // /docsまたは/v1/docsページではナビゲーションバーを表示しない
  const pathname = window.location.pathname;
  const showNavbar = !pathname.includes('/docs');

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        {showNavbar && <Navbar />}
        <main className={showNavbar ? "container mx-auto px-4 py-8" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/prompts/:id" element={<PromptDetail />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/categories" element={<Categories />} />
            {/* APIドキュメントへのリダイレクト */}
            <Route path="/v1/docs" element={<Navigate to="/docs" replace />} />
            <Route path="/docs" element={
              <div className="h-screen w-full">
                <iframe 
                  src="/docs"
                  className="w-full h-full border-0"
                  title="API Documentation"
                />
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;