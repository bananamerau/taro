import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="language-select-label">{t('language')}</InputLabel>
      <Select
        labelId="language-select-label"
        value={i18n.language}
        label={t('language')}
        onChange={handleChange}
      >
        <MenuItem value="en">{t('english')}</MenuItem>
        <MenuItem value="zh">{t('chinese')}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher; 