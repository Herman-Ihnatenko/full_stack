import Button from '../Button/Button';
import { useState } from 'react';
import './styles.css';

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((likes) => {
      return likes + 1;
    });
  };

  const handleDislike = () => {
    setDislikes((dislikes) => {
      return dislikes + 1;
    });
  };

  const handleReset = () => {
    setLikes((likes) => {
      return likes = 0;
    });
    
    setDislikes((dislikes) => {
      return dislikes = 0;
    })
  };

  return (
    <div className="feedback">
      <Button onClick={handleLike}>Like</Button>
      <span className="count">{likes}</span>
      <Button onClick={handleDislike}>Dislike</Button>
      <span className="count">{dislikes}</span>
      <Button onClick={handleReset}>Reset Results</Button>
    </div>
  );
};

export default Feedback;