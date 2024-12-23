import { 
  Truck, 
  ShieldCheck, 
  HeadphonesIcon 
} from "lucide-react";


const Faq = () => {
  return (
    <>
    <section className="benefits container py-8">
      <div className="benefit-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Truck size={48} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
          <p className="text-gray-600">Pengiriman ke seluruh Indonesia</p>
        </div>
        
        <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <ShieldCheck size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Garansi Produk</h3>
          <p className="text-gray-600">Jaminan kualitas terbaik</p>
        </div>
        
        <div className="benefit-card flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <HeadphonesIcon size={48} className="text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
          <p className="text-gray-600">Dukungan pelanggan setiap saat</p>
        </div>
      </div>
    </section>
  </>
  )
}
export default Faq