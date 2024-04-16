// utils/localStorage.ts
export interface PaymentDetails {
    requirements: string;
    guests: string;
    days: string;
  }
  
  export const savePaymentDetailsToLocalStorage = (name: string, paymentDetails: PaymentDetails): void => {
    const existingData = getPaymentDetailsFromLocalStorage(name);
    const newData = { ...existingData, [name]: paymentDetails };
    localStorage.setItem('paymentDetails', JSON.stringify(newData));
  };
  
  export const getPaymentDetailsFromLocalStorage = (name: string): PaymentDetails | null => {
    const paymentDetailsString = localStorage.getItem('paymentDetails');
    if (paymentDetailsString) {
      const paymentDetails = JSON.parse(paymentDetailsString);
      return paymentDetails[name] || null;
    }
    return null;
  };