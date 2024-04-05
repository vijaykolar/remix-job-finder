import { FeaturedCompaniesCard } from './featured-companies-card';

const data = [
  {
    id: Math.random() * 100,
    logo: './logo/bg.svg',
    name: 'Apple Inc',
    location: 'New york, USA',
    ratings: 4.8,
    openJobs: 4,
  },
  {
    id: Math.random() * 100,
    name: 'Google Inc',
    location: 'Bengaluru, India',
    ratings: 3.9,
    openJobs: 14,
    logo: './logo/logo-mailchimp.svg',
  },
  {
    id: Math.random() * 100,
    name: 'Meta Inc',
    location: 'Mysore, India',
    ratings: 5,
    openJobs: 9,
    logo: './logo/bg.svg',
  },
  {
    id: Math.random() * 100,
    name: 'Harman',
    location: 'Pune, India',
    ratings: 5,
    openJobs: 6,
    logo: './logo/logo-mailchimp.svg',
  },
];

function FeaturedCompaniesList() {
  return (
    <>
      {data.map((el) => (
        <div key={Math.random() + el.id}>
          <FeaturedCompaniesCard c={el} />
        </div>
      ))}
    </>
  );
}

export { FeaturedCompaniesList };
