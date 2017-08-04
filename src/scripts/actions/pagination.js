export default function pagination(pagination) {
  console.log('pagination', pagination);
  return {
    type: 'PAGINATION',
    pagination
  };
}


