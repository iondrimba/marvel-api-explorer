export default function fetchingError(error) {
  return {
    type: 'FETCHING_ERROR',
    error
  };
}
