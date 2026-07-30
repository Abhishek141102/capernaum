import { HeartPulse, ShoppingCart, Landmark, Phone, Plane, Cpu, ShieldCheck, Truck } from 'lucide-react';
import './Industries.css';

const INDUSTRIES = [
  { icon: HeartPulse, title: 'Healthcare' },
  { icon: ShoppingCart, title: 'E-commerce & Retail' },
  { icon: Landmark, title: 'Banking & Finance' },
  { icon: Phone, title: 'Telecom' },
  { icon: Plane, title: 'Travel & Hospitality' },
  { icon: Cpu, title: 'Technology & SaaS' },
  { icon: ShieldCheck, title: 'Insurance' },
  { icon: Truck, title: 'Logistics' },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <span className="section-label">Industries We Serve</span>
        <h2 className="industries__heading">
          Tailored BPO & IT solutions across <span className="gold-italic">every sector.</span>
        </h2>

        <div className="industries__grid">
          {INDUSTRIES.map(({ icon: Icon, title }) => (
            <div className="industry-card" key={title}>
              <div className="industry-card__icon">
                <Icon size={22} />
              </div>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;