import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import Layout from './layouts/Layout';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <PageTitleProvider>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </PageTitleProvider>
  );
}