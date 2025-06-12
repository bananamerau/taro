import React from 'react';
import { Box, Typography } from '@mui/material';
import TarotCard from './TarotCard';
import { TarotCard as TarotCardType } from '../data/tarotCards';
import { Spread } from '../data/spreads';
import { useTranslation } from 'react-i18next';

interface DrawnCard {
  card: TarotCardType;
  reversed: boolean;
}

interface TarotSpreadProps {
  spread: Spread;
  drawnCards: DrawnCard[];
}

const TarotSpread: React.FC<TarotSpreadProps> = ({ spread, drawnCards }) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={2}>
      {spread.positions.map((pos, idx) => {
        const drawn = drawnCards[idx];
        return (
          <Box key={pos.id} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="caption" mb={1}>{pos.name} / {pos.enName}</Typography>
            {drawn ? (
              <TarotCard
                name={drawn.card.name}
                enName={drawn.card.enName}
                imageUrl={drawn.card.imageUrl}
                reversed={drawn.reversed}
              />
            ) : (
              <Box sx={{ width: 120, height: 200, bgcolor: '#eee', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary">{t('not_drawn')}</Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export type { DrawnCard };
export default TarotSpread; 