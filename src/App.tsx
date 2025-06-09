import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { Categories } from './pages/Categories';
import { PromptPreview } from './pages/PromptPreview';

function App() {
  return (
    <Router basename="/MysticLibrary" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/categories" element={<Categories />} />
            {/* ローカルmdプレビュー用 */}
            <Route path="/prompts/preview/*" element={<PromptPreview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
