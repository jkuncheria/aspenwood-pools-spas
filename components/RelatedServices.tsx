import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  path: string;
  description: string;
}

interface RelatedServicesProps {
  currentService: string;
}

const allServices: Service[] = [
  { name: 'Pool Installation', path: '/pool-installation', description: 'Custom swimming pool construction' },
  { name: 'Spa & Hot Tubs', path: '/spa-hot-tubs', description: 'Sales, installation & service' },
  { name: 'Pool Repair', path: '/pool-repair', description: 'Equipment & structural repairs' },
  { name: 'Pool Renovation', path: '/pool-renovation', description: 'Resurfacing & upgrades' },
  { name: 'Pool Opening & Closing', path: '/pool-opening-closing', description: 'Seasonal pool services' },
  { name: 'Auto Cover Installation', path: '/auto-cover-installation', description: 'Safety & convenience covers' },
];

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentService }) => {
  const relatedServices = allServices.filter(s => s.name !== currentService).slice(0, 3);

  return (
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">Related Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="group bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#0D5C6D]/20"
          >
            <h4 className="font-bold text-[#0F172A] group-hover:text-[#0D5C6D] mb-2 flex items-center justify-between">
              {service.name}
              <ArrowRight className="w-4 h-4 text-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
