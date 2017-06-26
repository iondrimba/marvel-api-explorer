export default function filter(filter) {
  console.log('action filter', filter);
  return {
    type: 'FILTER',
    filter
  };
}


