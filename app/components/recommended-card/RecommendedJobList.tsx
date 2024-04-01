import { RecommendedCard } from './recommended-card';

function RecommendedJobList() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((card) => (
        <RecommendedCard key={card} />
      ))}
    </>
  );
}

export { RecommendedJobList };
