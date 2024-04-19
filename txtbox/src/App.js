import React, { useState } from 'react';

const ImageWithTextBox = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('12');
  const [top, setTop] = useState('50px');
  const [left, setLeft] = useState('50px');
  const [bgColor, setBgColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#ffffff');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label>
        Upload Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <label>
        Font Size:
        <input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
      </label>
      <br />
      <label>
        Top Position:
        <input type="text" value={top} onChange={(e) => setTop(e.target.value)} />
      </label>
      <br />
      <label>
        Left Position:
        <input type="text" value={left} onChange={(e) => setLeft(e.target.value)} />
      </label>
      <br />
      <label>
        Background Color:
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </label>
      <br />
      <label>
        Text Color:
        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
      </label>
      <br />
      {image && (
        <div style={{
          position: 'relative',
          display: 'inline-block',
          maxWidth: '100%'
        }}>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <div style={{
            position: 'absolute',
            top: top,
            left: left,
            fontSize: `${fontSize}px`,
            color: textColor,
            backgroundColor: bgColor,
            padding: '5px',
            opacity: '0.5',
          }}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithTextBox;
