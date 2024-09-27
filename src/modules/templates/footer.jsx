export const Footer = () => {
  return (
    <section id="footer" className="w-full bg-gradient-to-t from-amber-500 to-amber-300 py-8 text-gray-100">
      <div className="w-full md:w-9/12 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">KosKU.id</h3>
            <p className="mt-2">Cari kos murah dan lengkap hanya di KosKU.id</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold">Contact Us</h4>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:info@kosku.id" className="underline">
                info@kosku.id
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+6281234567890" className="underline">
                +62 812 3456 7890
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold">Address</h4>
            <p className="mt-2">
              Jl. KosKU No.123,
              <br />
              Jakarta Selatan,
              <br />
              Indonesia
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>&copy; 2024 KosKU.id. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
