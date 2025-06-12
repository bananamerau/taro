import axios from 'axios';
import { DrawnCard } from '../components/TarotSpread';

export interface TarotReadingRequest {
  question: string;
  spreadId: string;
  cards: { name: string; enName: string; reversed: boolean }[];
  lang?: string;
}

export interface TarotReadingResponse {
  result: string;
}

export async function postTarotReading(data: TarotReadingRequest): Promise<TarotReadingResponse> {
  const res = await axios.post('/api/tarot/reading', data);
  return res.data;
} 