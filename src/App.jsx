import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const App = () => {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: '18px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #333',
            borderTop: '3px solid #fff',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px'
          }} />
          <span>جاري التحميل...</span>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;