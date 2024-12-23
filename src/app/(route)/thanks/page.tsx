import { CheckCircle } from "lucide-react";
import "./succes.css";

const TerimaksigPage = () => {
  return (
    <div className="payment-container">
      <div className="header">
        <div className="logo">ATK STORE</div>
      </div>

      <div className="content">
        <div className="success-icon">
          <CheckCircle size={48} color="#000" />
        </div>

        <h1 className="success-title">PEMBAYARAN BERHASIL</h1>

        <div className="payment-details">
          <div className="details-row">
            <div className="details-label">Pembelian Anda</div>
            <div className="details-value">Hraga</div>
          </div>

          <div className="details-row">
            <div className="payment-method">
              <div className="method-icon"></div>
              <div className="method-label">Dengan</div>
              <div className="method-name"></div>
            </div>
          </div>
        </div>

        <div className="invoice-section">
          <h2 className="invoice-title">Rincian tagihan</h2>
          <div className="invoice-number">
            <span>Nomor tagihan</span>
            <button className="copy-button">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerimaksigPage;