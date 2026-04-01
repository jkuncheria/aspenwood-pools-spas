import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Generate breadcrumb schema based on current path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hmconstruction.com/"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://hmconstruction.com${currentPath}`
      });
    });

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // Remove existing breadcrumb schema if any
    const existingSchema = document.querySelector('script[data-breadcrumb-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const schemaToRemove = document.querySelector('script[data-breadcrumb-schema]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [location.pathname]);

  return null;
};

export default Breadcrumbs;

