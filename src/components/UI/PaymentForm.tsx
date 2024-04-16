// components/PaymentForm.tsx
import {
  PaymentDetails,
  getPaymentDetailsFromLocalStorage,
  savePaymentDetailsToLocalStorage,
} from "@/lib/localStorage";
import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const PaymentForm: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    requirements: "",
    guests: "",
    days: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    const existingPaymentDetails = getPaymentDetailsFromLocalStorage(
      e.target.value
    );
    if (existingPaymentDetails) {
      setPaymentDetails(existingPaymentDetails);
    } else {
      setPaymentDetails({
        requirements: "",
        guests: "",
        days: "",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPaymentDetails((prevPaymentDetails) => ({
      ...prevPaymentDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    savePaymentDetailsToLocalStorage(name, paymentDetails);
    router.replace(`${process.env.NEXT_PUBLIC_STRIPE}`);
  };

  return (
    <form
      className="gap-2 p-10 flex flex-col"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        className="px-2 py-0.5 bg-slate-600 rounded-sm"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Your Name"
      />
      <input
        type="text"
        className="px-2 py-0.5 bg-slate-600 rounded-sm"
        name="requirements"
        value={paymentDetails.requirements}
        onChange={handleInputChange}
        placeholder="Your Requirements"
      />
      <input
        className="px-2 py-0.5 bg-slate-600 rounded-sm"
        type="text"
        name="guests"
        value={paymentDetails.guests}
        onChange={handleInputChange}
        placeholder="No. of Guests"
      />
      <input
        className="px-2 py-0.5 bg-slate-600 rounded-sm"
        type="text"
        name="days"
        value={paymentDetails.days}
        onChange={handleInputChange}
        placeholder="No. of days"
      />
      <Button type="submit" variant={"secondary"} className="bg-blue-600 mt-4">
        Complete Payment
      </Button>
    </form>
  );
};

export default PaymentForm;
