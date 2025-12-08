export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-cyan-200 to-emerald-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">페이지를 찾을 수 없습니다.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}
