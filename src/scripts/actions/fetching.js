export default function fetching(fetching) {
  console.log('fetching', fetching);
  return {
    type: 'FETCHING',
    fetching
  };
}

