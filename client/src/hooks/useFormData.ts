import { useState, useEffect } from 'react';

interface FormData {
  [key: string]: string;
}

export const useFormData = (formName: string) => {
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    const storedData = localStorage.getItem(formName);
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [formName]);

  const updateFormData = (newData: FormData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    localStorage.setItem(formName, JSON.stringify(updatedData));
  };

  return { formData, updateFormData };
};
