const Footer = () => {
  return (
    <div>
    <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Tentang Kami</h3>
          <p>
            TOKO ATK adalah toko alat tulis terlengkap dengan harga
            terjangkau dan kualitas terjamin.
          </p>
        </div>
        <div className="footer-section">
          <h3>Layanan Pelanggan</h3>
          <ul>
            <li>
              <a href="/cara-pembelian">Cara Pembelian</a>
            </li>
            <li>
              <a href="/pengiriman">Informasi Pengiriman</a>
            </li>
            <li>
              <a href="/pembayaran">Metode Pembayaran</a>
            </li>
            <li>
              <a href="/garansi">Garansi Produk</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hubungi Kami</h3>
          <ul className="contact-info">
            <li>
              <i className="location-icon"></i> Jl. Contoh No. 123, Jakarta
            </li>
            <li>
              <i className="phone-icon"></i> +62 812-3456-7890
            </li>
            <li>
              <i className="email-icon"></i> info@tokoatk.com
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a href="#" className="social-icon facebook"></a>
            <a href="https://www.instagram.com/destaanugrahpr/" className="social-icon instagram"></a>
            <a href="#" className="social-icon twitter"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TOKO ATK. Seluruh hak cipta dilindungi.</p>
          <div className="">
            <h3>Lokasi Toko</h3>
          <iframe className=" rounded-s-md map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7532329645037!2d104.86795716970643!3d-4.812380438930136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e38a8cb47225a21%3A0xd2e026f22c44746f!2sUniversitas%20Muhammadiyah%20Kotabumi!5e0!3m2!1sid!2sid!4v1734240761123!5m2!1sid!2sid" width="600" height="450" loading="lazy" ></iframe>
          </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer;