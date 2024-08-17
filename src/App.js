import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');
  const [complexity, setComplexity] = useState('');
  const [statType, setStatType] = useState('');
  const [stat, setStat] = useState('');
  const [prompt, setPrompt] = useState(''); // Store the prompt
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false); // Toggle for showing the prompt
  const [promptVisible, setPromptVisible] = useState(false); // Control when to show the toggle

  useEffect(() => {
    document.title = "WTS 😲"; // Change the tab title to WTS 😲
  }, []);

  const options = {
    mood: ['humorous', 'serious', 'quirky'],
    category: ['technology', 'history', 'science', 'sports'],
    complexity: ['simple', 'detailed', 'expert-level'],
    statType: ['Did you know?', 'Surprising numbers', 'Top 10 list']
  };

  const generateRandomSelection = (array) => array[Math.floor(Math.random() * array.length)];

  const extractRelevantOutput = (text, prompt) => {
    return text.replace(prompt, '').trim();
  };

  const generateStat = async () => {
    const selectedMood = mood || generateRandomSelection(options.mood);
    const selectedCategory = category || generateRandomSelection(options.category);
    const selectedComplexity = complexity || generateRandomSelection(options.complexity);
    const selectedStatType = statType || generateRandomSelection(options.statType);

    const generatedPrompt = `Generate a ${selectedMood} statistic about ${selectedCategory} that is ${selectedComplexity} in detail and fits the style of a ${selectedStatType}. Limit the response to 100 words.`;
    setPrompt(generatedPrompt); // Store the generated prompt

    try {
      setLoading(true);
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1',
        { inputs: generatedPrompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Check if the response has data and the expected field
      if (response.data && response.data.generated_text) {
        const generatedStat = response.data.generated_text.trim();
        const relevantStat = extractRelevantOutput(generatedStat, generatedPrompt); // Clean the response
        setStat(relevantStat);
        setError('');
        setPromptVisible(true); // Show the toggle after generating the stat
      } else if (response.data && Array.isArray(response.data) && response.data.length > 0 && response.data[0].generated_text) {
        // Handling if the data is in an array format
        const generatedStat = response.data[0].generated_text.trim();
        const relevantStat = extractRelevantOutput(generatedStat, generatedPrompt); // Clean the response
        setStat(relevantStat);
        setError('');
        setPromptVisible(true);
      } else {
        setStat('No valid response received. Please try again.');
        setError('');
      }
    } catch (err) {
      console.error('Error generating stat:', err.response?.data || err.message);
      setError('An error occurred. Please try again.');
      setStat('Could not generate stat. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const surpriseMe = () => {
    setMood(generateRandomSelection(options.mood));
    setCategory(generateRandomSelection(options.category));
    setComplexity(generateRandomSelection(options.complexity));
    setStatType(generateRandomSelection(options.statType));
    generateStat();
  };

  return (
    <div className="App">
      <h1 className="title">What The Stats!? 😲</h1>

      <div className="result-container">
        {loading && <p>Loading model, please wait...</p>}
        {!loading && stat && <p className="stat-result">{stat}</p>}
        {!loading && error && <p className="error-message">{error}</p>}
        {promptVisible && !loading && (
          <button className="toggle-prompt-button" onClick={() => setShowPrompt(!showPrompt)}>
            {showPrompt ? 'Hide Prompt' : 'Show Prompt'}
          </button>
        )}
        {showPrompt && !loading && <p className="prompt-text">{prompt}</p>}
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <label>Mood:</label>
          <div className="buttons-container">
            {options.mood.map(option => (
              <button
                key={option}
                className={mood === option ? 'selected' : ''}
                onClick={() => setMood(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Category:</label>
          <div className="buttons-container">
            {options.category.map(option => (
              <button
                key={option}
                className={category === option ? 'selected' : ''}
                onClick={() => setCategory(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Complexity:</label>
          <div className="buttons-container">
            {options.complexity.map(option => (
              <button
                key={option}
                className={complexity === option ? 'selected' : ''}
                onClick={() => setComplexity(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Stat Type:</label>
          <div className="buttons-container">
            {options.statType.map(option => (
              <button
                key={option}
                className={statType === option ? 'selected' : ''}
                onClick={() => setStatType(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button className="generate-button" onClick={generateStat} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Stat'}
        </button>
        <button className="surprise-button" onClick={surpriseMe} disabled={loading}>
          Surprise Me!
        </button>
      </div>

      <footer className="footer">
        <p><a href="https://twitter.com/m1quelag" target="_blank" rel="noopener noreferrer">@m1quelag</a></p>
      </footer>
    </div>
  );
}

export default App;
