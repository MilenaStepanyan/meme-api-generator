import React, { useState } from 'react';
import { memeTypes } from './data-memes/meme-types';

function MemeGenerator() {
  const [selectedMemeType, setSelectedMemeType] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImageUrl, setMemeImageUrl] = useState('');

  const handleMemeTypeChange = (e) => {
    setSelectedMemeType(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleGenerateMeme = () => {

    const apiUrl = `https://apimeme.com/meme?meme=${selectedMemeType}&top=${topText}&bottom=${bottomText}`;
    
    setMemeImageUrl(apiUrl);
  };

  return (
    <div className='main'>
      <div className='div-for-direction-of-image-and-inputs'>
      <h2>Meme Generator</h2>
      <select value={selectedMemeType} onChange={handleMemeTypeChange}>
        <option value="">Select a meme type</option>
        {memeTypes.map((memeType) => (
          <option key={memeType.value} value={memeType.value}>
            {memeType.label}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Top Text" value={topText} onChange={handleTopTextChange} />
      <input type="text" placeholder="Bottom Text" value={bottomText} onChange={handleBottomTextChange} />
      <button onClick={handleGenerateMeme}>Generate Meme</button>
        <input type="url" placeholder='url' value={memeImageUrl}/>
      {memeImageUrl && <img src={memeImageUrl} alt="Generated Meme" />}
    </div>
    </div>
    
  );
}

export default MemeGenerator;
