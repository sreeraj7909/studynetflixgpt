import Groq from 'groq-sdk';
import { OPENAI_API_KEY } from './constants';

const groq = new Groq({ apiKey: OPENAI_API_KEY,dangerouslyAllowBrowser: true });

export default groq;