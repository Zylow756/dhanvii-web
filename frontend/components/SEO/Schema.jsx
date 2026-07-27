const Schema = () => {
  const data = {
    "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Dhanvii Accounting System",
  "url": "https://dhanvii.in",
  "logo": "https://dhanvii.in/logo.png",
  "description": "Professional Accounting Training Institute offering Tally Prime, GST, Income Tax, Payroll and Advanced Excel.",
  "telephone": "+91 9414729662",
  "email": "contact.dhanvi@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "267, Ganesh Nagar, Near Khade Ganesh Ji Temple",
    "addressLocality": "Kota",
    "addressRegion": "Rajasthan",
    "postalCode": "324010",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100063563501750",
    "https://www.instagram.com/accounting_institute_of_kota/",
    "https://www.linkedin.com/in/dhanvii-accounting-system-29092915b",
    "https://www.youtube.com/@dhanvikota1502"
  ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};

export default Schema;