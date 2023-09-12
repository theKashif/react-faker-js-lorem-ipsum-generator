import React, { useState } from 'react'
import { faker } from '@faker-js/faker'

const LoremIpsumGenerator = () => {
    const [text, setText] = useState('')
    const [numParagraphs, setNumParagraphs] = useState(1)

    const generateLoremIpsum = () => {
        const randomText = faker.lorem.paragraphs(Number(numParagraphs));
        setText(randomText);
    }

    const handleNumParagraphs = (e) => {
        setNumParagraphs(e.target.value);
    }

    // function to copy generated text to clipboard
    const copyToClipboard = () => {
        // create temp text area
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Text copied to clipboard!')
    };


    return (
        <div className='LoremIpsumGenerator'>
            <h1>React Lorem Ipsum Generator</h1>
            <label htmlFor='numParagraphs'>Number of Paragraphs</label>
            <input
                type='number'
                id='numParagraphs'
                value={numParagraphs}
                onChange={handleNumParagraphs}
            />
            <button onClick={generateLoremIpsum}>Generate</button>

            <div className='generatedText'>

                {/* conditionally render the copy button */}
                {text && (
                <button className='copyButton' onClick={copyToClipboard}>copy</button>
                )}
            <p>{text}</p>
            </div>

        </div>
    )
}

export default LoremIpsumGenerator