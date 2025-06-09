import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faWandSparkles, faBook, faUsers, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-kaisei gradient-text flex items-center justify-center gap-4">
          <FontAwesomeIcon icon={faHatWizard} className="h-8 floating" />
          Unlock the magic of AI
          <FontAwesomeIcon icon={faWandSparkles} className="h-8 floating" />
        </h1>
        <p className="text-xl text-primary-dark max-w-2xl mx-auto font-zen">
          <span className="keyword">創造的</span>で<span className="keyword">効果的</span>な
          AIプロンプトを発見、作成、共有できるプラットフォーム
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-white p-6 rounded-xl shadow-sm border border-light">
          <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faWandSparkles} className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 font-kaisei text-primary-dark">厳選されたプロンプト</h3>
          <p className="text-primary-dark font-zen">様々なカテゴリーの高品質なプロンプトコレクションにアクセス</p>
        </div>

        <div className="card bg-white p-6 rounded-xl shadow-sm border border-light">
          <div className="h-12 w-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faBook} className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2 font-kaisei text-primary-dark">学習と上達</h3>
          <p className="text-primary-dark font-zen">プロンプトエンジニアリングの包括的なガイドで技術を習得</p>
        </div>

        <div className="card bg-white p-6 rounded-xl shadow-sm border border-light">
          <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 font-kaisei text-primary-dark">コミュニティ駆動</h3>
          <p className="text-primary-dark font-zen">活気あるAIエンスージアストとプロンプトエンジニアのコミュニティに参加</p>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faBolt} className="h-8 w-8 floating" />
        </div>
        <h2 className="text-2xl font-bold mb-4 font-kaisei">プロンプトを探す</h2>
        <p className="mb-6 font-zen">Mystic Libraryで、あなたのAIとの対話を変革しませんか？</p>
        <Link
          to="/browse"
          className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors font-kaisei inline-flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faHatWizard} />
          プロンプト一覧を見る
        </Link>
      </section>

      <div className="highlight-box">
        <p className="font-zen text-center text-lg">
          <span className="keyword">あなたのプロンプト</span>が、
          次の<span className="keyword">AIイノベーション</span>の鍵となるかもしれません
        </p>
      </div>
    </div>
  );
}
