import { ArrowUpRight, Calendar } from 'lucide-react';
import './LatestBlogs.css';

const BLOGS = [
  {
    category: 'Customer Support',
    date: 'July 12, 2026',
    title: '5 Ways to Improve Customer Support Response Times',
    excerpt: 'Practical strategies for building a support team that responds faster without sacrificing the human touch your customers expect.',
    photo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80',
  },
  {
    category: 'Lead Generation',
    date: 'June 28, 2026',
    title: 'The Future of B2B Lead Generation in 2026',
    excerpt: 'How data-driven outreach and smarter qualification are changing the way growing businesses build their sales pipeline.',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
  },
  {
    category: 'Quality Assurance',
    date: 'June 10, 2026',
    title: 'Why Quality Assurance Is the Backbone of Great BPO',
    excerpt: 'A closer look at how rigorous QA processes protect service standards and keep client relationships strong for the long run.',
    photo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
  },
];

function LatestBlogs() {
  return (
    <section className="latest-blogs" id="blogs">
      <div className="container">
        <span className="section-label">Latest Blogs</span>
        <h2 className="latest-blogs__heading">
          Insights from the <span className="gold-italic">world of BPO & IT.</span>
        </h2>

        <div className="latest-blogs__grid">
          {BLOGS.map(({ category, date, title, excerpt, photo }) => (
            <a href="#contact" className="blog-card" key={title}>
              <div className="blog-card__photo" style={{ backgroundImage: `url(${photo})` }} />
              <div className="blog-card__body">
                <span className="blog-card__category">{category}</span>
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">
                    <Calendar size={13} /> {date}
                  </span>
                  <span className="blog-card__link">
                    Read More <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;