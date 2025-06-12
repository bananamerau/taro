import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface GoogleAdSenseProps {
  client: string;
  slot: string;
  style?: React.CSSProperties;
  format?: string;
}

const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({ client, slot, style, format = 'auto' }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (window) {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <Box my={2} display="flex" flexDirection="column" alignItems="center">
      <ins
        className="adsbygoogle"
        style={style || { display: 'block', width: '100%', minHeight: 90 }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
      />
      <Typography variant="caption" color="text.secondary" mt={1}>
        {t('ad_tip')}
      </Typography>
    </Box>
  );
};

export default GoogleAdSense; 