import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Info,
  CreditCard,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Map
} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="flex items-center gap-2">
                <Info size={20} /> Tentang Kami
              </h3>
              <p>
                TOKO ATK adalah toko alat tulis terlengkap dengan harga
                terjangkau dan kualitas terjamin.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="flex items-center gap-2">
                <ShoppingBag size={20} /> Layanan Pelanggan
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/cara-pembelian" className="flex items-center gap-2 hover:text-gray-300">
                    <Info size={16} /> Cara Pembelian
                  </a>
                </li>
                <li>
                  <a href="/pengiriman" className="flex items-center gap-2 hover:text-gray-300">
                    <Truck size={16} /> Informasi Pengiriman
                  </a>
                </li>
                <li>
                  <a href="/pembayaran" className="flex items-center gap-2 hover:text-gray-300">
                    <CreditCard size={16} /> Metode Pembayaran
                  </a>
                </li>
                <li>
                  <a href="/garansi" className="flex items-center gap-2 hover:text-gray-300">
                    <ShieldCheck size={16} /> Garansi Produk
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="flex items-center gap-2">
                <Phone size={20} /> Hubungi Kami
              </h3>
              <ul className="contact-info space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Jl. Contoh No. 123, Jakarta
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +62 812-3456-7890
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> info@tokoatk.com
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="flex items-center gap-2">Ikuti Kami</h3>
              <div className="social-links flex gap-4 mt-2">
                <a href="#" className="hover:text-blue-500">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/destaanugrahpr/" className="hover:text-pink-500">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TOKO ATK. Seluruh hak cipta dilindungi.</p>
            <div className="">
              <h3 className="flex items-center gap-2">
                <Map size={20} /> Lokasi Toko
              </h3>
              <iframe 
                className="h-[20vh] map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7532329645037!2d104.86795716970643!3d-4.812380438930136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e38a8cb47225a21%3A0xd2e026f22c44746f!2sUniversitas%20Muhammadiyah%20Kotabumi!5e0!3m2!1sid!2sid!4v1734240761123!5m2!1sid!2sid" 
                width="600" 
                height="450" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;