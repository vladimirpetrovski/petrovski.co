import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main>
      <Header />
      <article
        style={{
          paddingTop: '120px',
          paddingBottom: '80px',
          minHeight: '100vh',
        }}
      >
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link
            href="/#portfolio"
            style={{
              display: 'inline-block',
              marginBottom: '32px',
              color: 'var(--color-text-secondary)',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            ← Back to portfolio
          </Link>
          
          <div style={{ marginBottom: '24px' }}>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              {article.category}
            </p>
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              {article.title}
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <div
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--color-text)',
            }}
            className="article-content"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 style={{ fontSize: '32px', fontWeight: 700, marginTop: '48px', marginBottom: '24px', lineHeight: 1.3 }} {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 style={{ fontSize: '28px', fontWeight: 600, marginTop: '40px', marginBottom: '20px', lineHeight: 1.3 }} {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '16px', lineHeight: 1.3 }} {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p style={{ marginBottom: '20px', lineHeight: 1.8 }} {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul style={{ marginBottom: '20px', paddingLeft: '24px', listStyle: 'disc' }} {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol style={{ marginBottom: '20px', paddingLeft: '24px', listStyle: 'decimal' }} {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li style={{ marginBottom: '8px', lineHeight: 1.7 }} {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    style={{
                      borderLeft: '4px solid var(--color-border)',
                      paddingLeft: '20px',
                      margin: '24px 0',
                      fontStyle: 'italic',
                      color: 'var(--color-text-secondary)',
                    }}
                    {...props}
                  />
                ),
                code: ({ node, inline, ...props }: any) => {
                  if (inline) {
                    return (
                      <code
                        style={{
                          backgroundColor: '#f5f5f5',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.9em',
                          fontFamily: 'monospace',
                        }}
                        {...props}
                      />
                    )
                  }
                  return (
                    <code
                      style={{
                        display: 'block',
                        backgroundColor: '#f5f5f5',
                        padding: '16px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                        overflowX: 'auto',
                        margin: '24px 0',
                        lineHeight: 1.6,
                      }}
                      {...props}
                    />
                  )
                },
                a: ({ node, ...props }: any) => (
                  <a
                    style={{
                      color: 'var(--color-accent)',
                      textDecoration: 'underline',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong style={{ fontWeight: 600 }} {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em style={{ fontStyle: 'italic' }} {...props} />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
