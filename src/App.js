import React, { useState } from 'react';

const App = () => {
  const api_base_url = 'http://localhost:8000/predict';

  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch(api_base_url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Image Classification</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default App;
