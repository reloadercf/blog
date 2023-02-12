/* eslint-disable import/prefer-default-export */
// for render menu data
export const kindsMenu = (selectedKind) => {
  const kind = ['All', 'Travel', 'Lifestyle', 'Business'];
  return kind[selectedKind];
};
