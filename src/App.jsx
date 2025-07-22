import { useEffect, useState } from 'react'


const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, []);

  return (
    <div className="card" onClick={() => {
      setCount(prevCount => prevCount + 1);
    }}>
      <h2>{title} - {count || null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Avengers" />
      <Card title="Focus" />
      <Card title="Ready Player 1" />
    </div>
  );
}

export default App
