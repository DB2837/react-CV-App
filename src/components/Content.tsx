import React, { useState } from 'react';
import '../style/Content.css';
import { emptyCV, CV } from '../cvInterface';
import { CVPreview } from './CVPreview/CVPreview';
import { CVForm } from './CVForm/CVForm';

export const Content = () => {
  const [cv, setCv] = useState<CV>(() => emptyCV);

  return (
    <main className='main-content'>
      <CVForm setCv={setCv} cv={cv} />
      <CVPreview setCv={setCv} cv={cv} />
    </main>
  );
};
