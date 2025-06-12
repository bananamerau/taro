import React, { useState } from 'react';
import { CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export interface TarotCardProps {
  name: string;
  enName: string;
  imageUrl: string;
  reversed?: boolean;
}

const cardWidth = 120;
const cardHeight = 200;

const TarotCard: React.FC<TarotCardProps> = ({ name, enName, imageUrl, reversed = false }) => {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        perspective: 1000,
        width: cardWidth,
        height: cardHeight + 40,
        m: 1,
      }}
    >
      <motion.div
        style={{ width: cardWidth, height: cardHeight, position: 'relative' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(f => !f)}
        whileHover={{ scale: 1.06, boxShadow: '0 0 24px 4px #FFD70055' }}
      >
        {/* 背面 */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            bgcolor: 'secondary.main',
            color: '#FFD700',
            borderRadius: 3,
            border: '2px solid #FFD700',
            boxShadow: '0 4px 24px 0 #000a',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 'bold',
            userSelect: 'none',
            cursor: 'pointer',
            letterSpacing: 2,
          }}
        >
          TAROT
        </Box>
        {/* 正面 */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 3,
            border: '2px solid #FFD700',
            boxShadow: '0 4px 24px 0 #000a',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            overflow: 'hidden',
            bgcolor: '#fff',
            cursor: 'pointer',
          }}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt={enName}
            loading="lazy"
            sx={{ width: '100%', height: '80%' }}
            style={{ transform: reversed ? 'rotate(180deg)' : 'none', transition: 'transform 0.5s' }}
          />
          <Typography
            variant="subtitle2"
            align="center"
            sx={{ mt: 1, color: reversed ? 'warning.main' : 'primary.main', fontWeight: 700 }}
          >
            {name} {reversed ? `(${t('reversed')})` : `(${t('upright')})`}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TarotCard; 