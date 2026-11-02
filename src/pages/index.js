import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import scripts from '../../scripts';

export default function Home() {
  return (
    <Layout title="Documentation" description="Documentation for B&N scripts">
      <main className="container margin-vert--xl">
        <h1>Documentation</h1>
        <p>Installation and configuration guides for B&amp;N scripts.</p>
        <div className="bn-scripts">
          {scripts.map((s) => (
            <Link key={s.id} className="bn-script" to={`/${s.id}/`}>
              <h2>{s.name}</h2>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
