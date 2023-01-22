import ContentLoader from 'react-content-loader';

export const SkeletonCard = (props: any) => {
  return (
    <ContentLoader
      speed={3}
      width={'370'}
      height={'100%'}
      viewBox="0 0 400 460"
      backgroundColor="#acacac"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="22" y="420" rx="2" ry="2" width="282" height="18" />
      <rect x="22" y="0" rx="2" ry="2" width="282" height="400" />
    </ContentLoader>
  );
};
