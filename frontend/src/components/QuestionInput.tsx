import React from 'react';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface QuestionInputProps {
  value: string;
  onChange: (val: string) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <TextField
      fullWidth
      label={t('input_question')}
      variant="outlined"
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};

export default QuestionInput; 