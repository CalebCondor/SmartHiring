'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Calendar, ChevronRight, Bot } from 'lucide-react'
import { articles } from '@/lib/articles'
import type { Article } from '@/lib/articles'

// ─── Blog card ────────────────────────────────────────────────────────────────

function BlogCard({
  article,
  index,
  featured,
}: {
  article: Article
  index: number
  featured?: boolean
}) {
  const { Icon } = article

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${article.slug}`}
        className={`group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 flex ${
          featured ? 'flex-col lg:flex-row' : 'flex-col'
        }`}
      >
        {/* Accent panel */}
        <div
          className={`relative flex items-center justify-center bg-linear-to-br ${article.accentGradient} border-b lg:border-b-0 ${featured ? 'lg:border-r lg:w-72 min-h-48' : 'h-40'} border-gray-100 shrink-0 overflow-hidden`}
        >
          <img
            src={article.heroImage}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 p-6 ${featured ? 'lg:p-8' : ''}`}>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border w-fit mb-3 ${article.tagColor}`}
          >
            <Icon className="w-3 h-3" />
            {article.tag}
          </span>

          <h3
            className={`font-extrabold text-gray-900 leading-tight mb-2 group-hover:text-green-700 transition-colors ${
              featured ? 'text-xl lg:text-2xl' : 'text-lg'
            }`}
          >
            {article.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{article.excerpt}</p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-green-600 group-hover:gap-2 transition-all">
              Read more <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── BlogSection ──────────────────────────────────────────────────────────────

export function BlogSection() {
  return (
    <section id="blog" className="pt-16 md:pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4 tracking-widest uppercase border border-green-200">
            <Bot className="w-3.5 h-3.5" />
            Technology & AI Blog
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-gray-900 mb-4">
            Technology, AI, and how{' '} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              healthy businesses run.
            </span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            We write about what we build and what we learn operating platforms in Puerto Rico.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="mb-6">
          <BlogCard article={articles[0]} index={0} featured />
        </div>

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.slice(1).map((article, i) => (
            <BlogCard key={article.id} article={article} index={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <span className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="w-8 h-px bg-gray-300" />
            More articles coming soon
            <span className="w-8 h-px bg-gray-300" />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
