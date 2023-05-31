import './App.css';
import { useState } from 'react';
function App() {

  const quote = ["The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Believe you can and you're halfway there.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
  ];

  const author = ["Steve Jobs", "Winston Churchill", "Nelson Mandela", "Theodore Roosevelt", "Abraham Lincoln", "Sam Levenson", "Eleanor Roosevelt", "Peter Drucker", "Wayne Gretzky", "Dalai Lama", "Albert Schweitzer"];
  const coloring = [
    '#61DAFB', // Light Blue
    '#FF6D00', // Orange
    '#FF4081', // Pink
    '#00C853', // Green
    '#AA00FF', // Purple
    '#FFAB00', // Amber
    '#2962FF', // Blue
    '#D50000', // Red
    '#00BFA5', // Teal
    '#FF3D00', // Deep Orange
    '#1A237E' // Indigo
  ];

  const handleTweet = () => {
    const tweetText = quote[random] + "#Quotes";
    const tweetUrl = '';

    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(tweetUrl)}`, '_blank');
  };
  const [random, setRandom] = useState(Math.round((Math.random() * 10)));

  const handleClick = () => {

    setRandom(Math.round((Math.random() * 10)));

  }
  return (
    <div className='app' style={{ backgroundColor: coloring[random] }}>


      <div className='quote-box' style={{ color: coloring[random] }}>
        <p1><p2>" </p2>{quote[random]}</p1>

        <p>- {author[random]}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='but'>
          <button className='tweet' onClick={handleTweet} style={{ backgroundColor: coloring[random], color: 'white' }}>
            Tweet
            {/* <img src='https://icon-library.com/images/twitter-icon-png-white/twitter-icon-png-white-13.jpg' width={60} style={{objectFit:'cover'}}/> */}
          </button>
          <button className='newquote' onClick={handleClick} style={{ backgroundColor: coloring[random], color: 'white' }}>
            New Quote
          </button>
        </div>
      </div>
      <p>Made by <strong>ayyushh</strong></p>

    </div>

  );
}

export default App;
