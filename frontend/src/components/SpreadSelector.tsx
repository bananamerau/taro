import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Spread } from '../data/spreads';
import { useTranslation } from 'react-i18next';

interface SpreadSelectorProps {
  spreads: Spread[];
  value: string;
  onChange: (id: string) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({ spreads, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="spread-select-label">{t('select_spread')}</InputLabel>
      <Select
        labelId="spread-select-label"
        value={value}
        label={t('select_spread')}
        onChange={e => onChange(e.target.value as string)}
      >
        {spreads.map(spread => (
          <MenuItem key={spread.id} value={spread.id}>
            {spread.name} / {spread.enName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SpreadSelector; 