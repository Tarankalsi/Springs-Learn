// components/Meta.tsx


interface MetaProps {
  title: any;
  description: any;
  keywords?: any; // Optional prop
  link?: any;
}

export default function Meta({ title, description, keywords, link }: MetaProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {link && <link rel="canonical" href={link} />}
    </head>
  );
}