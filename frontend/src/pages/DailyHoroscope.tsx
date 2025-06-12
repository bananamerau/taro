import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TarotSpread, { DrawnCard } from '../components/TarotSpread';
import { tarotCards } from '../data/tarotCards';
import { useNavigate } from 'react-router-dom';
import GoogleAdSense from '../components/GoogleAdSense';
import { Helmet } from 'react-helmet-async';

const DAILY_CARD_COUNT = 3;

const DailyHoroscope: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 自动抽三张牌
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, DAILY_CARD_COUNT).map(card => ({
      card,
      reversed: Math.random() < 0.5,
    }));
    setDrawnCards(selected);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Helmet>
        <title>{t('seo_daily_title')}</title>
        <meta name="description" content={t('seo_daily_desc')} />
        <meta name="keywords" content={t('seo_daily_keywords')} />
        <meta property="og:title" content={t('seo_daily_title')} />
        <meta property="og:description" content={t('seo_daily_desc')} />
      </Helmet>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button variant="outlined" onClick={() => navigate(-1)}>{t('back')}</Button>
        <Typography variant="h5">{t('daily_horoscope')}</Typography>
        <Box width={80} />
      </Box>
      <TarotSpread
        spread={{
          id: 'daily',
          name: t('daily_horoscope'),
          enName: 'Daily Horoscope',
          description: '',
          positions: [
            { id: 1, name: t('card1'), enName: 'Card 1', description: '' },
            { id: 2, name: t('card2'), enName: 'Card 2', description: '' },
            { id: 3, name: t('card3'), enName: 'Card 3', description: '' },
          ],
        }}
        drawnCards={drawnCards}
      />
      <Box mt={2}>
        {drawnCards.map((item, idx) => (
          <Box key={idx} mb={2}>
            <Typography variant="subtitle1">
              {t(`card${idx + 1}`)}: {item.card.name} {item.reversed ? `(${t('reversed')})` : `(${t('upright')})`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.reversed ? item.card.reversedMeaning : item.card.uprightMeaning}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* 广告位 */}
      <GoogleAdSense client="ca-pub-xxxxxxxxxxxxxxxx" slot="1234567890" />
      {/* 结果区域，后续可对接大模型API */}
    </Container>
  );
};

export default DailyHoroscope; 