
import { RFQFormData } from '../types';

export const submitRFQ = async (data: RFQFormData): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('companyName', data.companyName);
    formData.append('contactEmail', data.contactEmail);
    formData.append('productType', data.productType);
    formData.append('notes', data.notes);
    formData.append('requestVisitOrPrototype', data.requestVisitOrPrototype);
    
    if (data.drawingFile) {
      formData.append('file', data.drawingFile);
    }

    const response = await fetch('/api/rfq', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Submission failed:', errorData.error);
      return false;
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Error submitting RFQ:', error);
    return false;
  }
};
