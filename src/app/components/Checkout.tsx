"use client";

import React, { useState } from "react";
import { Upload } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const Checkout = ({ item }: { item: Upload }) => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generatePaymentLink = async () => {
    setIsLoading(true);
    const secret = process.env.NEXT_PUBLIC_SECRET
    if (!secret) {
      setIsLoading(false);
      throw new Error("NEXT_PUBLIC_SECRET is not defined");
    }

    const encodedSecret = Buffer.from(secret).toString("base64");
    const basicAuth = `Basic ${encodedSecret}`;

    // Membatasi panjang order_id agar sesuai dengan aturan Midtrans
    const uniqueOrderId = `${item.id}-${uuidv4().split("-")[0]}`;

    const data = {
      transaction_details: {
        order_id: uniqueOrderId, // ID unik transaksi
        gross_amount: parseFloat(item.price), // Jumlah total
      },
      item_details: [
        {
          id: item.id,
          name: item.title,
          price: parseFloat(item.price),
          quantity: 1,
        },
      ],
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/payment-links`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: basicAuth,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Midtrans Error:", errorResponse);
        throw new Error("Failed to generate payment link");
      }

      const result = await response.json();
      setPaymentUrl(result.payment_url);
    } catch (error) {
      console.error("Error generating payment link:", error);
      alert("Terjadi kesalahan saat membuat link pembayaran. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirect = () => {
    if (paymentUrl) {
      window.location.href = paymentUrl;
    } else {
      alert("Payment URL belum tersedia. Klik tombol 'Beli' untuk membuatnya.");
    }
  };

  return (
    <div>
      <button
        onClick={generatePaymentLink}
        disabled={isLoading}
        className={`p-2 text-white rounded px-4 ${
          isLoading ? "bg-gray-500" : "bg-green-700 hover:bg-green-800"
        }`}
      >
        {isLoading ? "Memproses..." : "Beli"}
      </button>
      {paymentUrl && (
        <button
          onClick={handleRedirect}
          className="bg-blue-700 hover:bg-blue-800 p-2 text-white rounded px-4 ml-2"
        >
          Klik di sini untuk bayar
        </button>
      )}
    </div>
  );
};

export default Checkout;
