import React, { useState } from 'react';
import { Typography, Box, Container, Button, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import QuestionInput from '../components/QuestionInput';
import SpreadSelector from '../components/SpreadSelector';
import TarotSpread, { DrawnCard } from '../components/TarotSpread';
import { spreads } from '../data/spreads';
import { tarotCards } from '../data/tarotCards';
import { postTarotReading } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import GoogleAdSense from '../components/GoogleAdSense';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [question, setQuestion] = useState('');
  const [spreadId, setSpreadId] = useState(spreads[0].id);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();

  const currentSpread = spreads.find(s => s.id === spreadId)!;

  const handleDraw = async () => {
    // 随机抽取不重复的卡牌，并随机正逆位
    const cardCount = currentSpread.positions.length;
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, cardCount).map(card => ({
      card,
      reversed: Math.random() < 0.5,
    }));
    setDrawnCards(selected);
    setResult(null);
    setError(null);
    setLoading(true);
    try {
      const res = await postTarotReading({
        question,
        spreadId,
        cards: selected.map(item => ({
          name: item.card.name,
          enName: item.card.enName,
          reversed: item.reversed,
        })),
        lang: i18n.language,
      });
      setResult(res.result);
    } catch (e: any) {
      setError(t('analysis_error'));
    } finally {
      setLoading(false);
    }
  };

  const handleSpreadChange = (id: string) => {
    setSpreadId(id);
    setDrawnCards([]); // 切换牌阵时清空已抽卡牌
    setResult(null);
    setError(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Helmet>
        <title>{t('seo_home_title')}</title>
        <meta name="description" content={t('seo_home_desc')} />
        <meta name="keywords" content={t('seo_home_keywords')} />
        <meta property="og:title" content={t('seo_home_title')} />
        <meta property="og:description" content={t('seo_home_desc')} />
      </Helmet>
      <Box display="flex" justifyContent="flex-end" mb={2} gap={2}>
        <Button variant="outlined" onClick={() => navigate('/daily')}>{t('daily_horoscope')}</Button>
        <LanguageSwitcher />
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        {t('welcome')}
      </Typography>
      <Box mt={4}>
        <QuestionInput value={question} onChange={setQuestion} />
        <SpreadSelector spreads={spreads} value={spreadId} onChange={handleSpreadChange} />
        <TarotSpread spread={currentSpread} drawnCards={drawnCards} />
        <Box display="flex" justifyContent="center" mb={2}>
          <Button variant="contained" color="primary" onClick={handleDraw} disabled={!question || loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : t('draw_cards')}
          </Button>
        </Box>
        {/* 结果区域，后续对接大模型API */}
        {loading && (
          <Box display="flex" justifyContent="center" mt={2}><CircularProgress /><Box ml={2}>{t('analysis_loading')}</Box></Box>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
        )}
        {result && (
          <Box mt={2}>
            <Typography variant="h6">{t('analysis_result')}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>{result}</Typography>
          </Box>
        )}
        {/* 广告位 */}
        <GoogleAdSense client="ca-pub-xxxxxxxxxxxxxxxx" slot="1234567890" />
      </Box>
    </Container>
  );
};

export default Home; 