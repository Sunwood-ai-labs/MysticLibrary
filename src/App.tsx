import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { PromptPreview } from './pages/PromptPreview';
import { Wiki } from './pages/Wiki';

function App() {
  return (
    <Router basename="/MysticLibrary" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            {/* ローカルmdプレビュー用 */}
            <Route path="/prompts/preview/*" element={<PromptPreview />} />
            <Route path="/wiki/*" element={<Wiki />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
