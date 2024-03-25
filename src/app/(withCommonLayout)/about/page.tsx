const AboutPage = () => {
  return (
    <div className="pt-32 max-w-7xl mx-auto">
      <header className="bg-green-500 text-white py-4">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">About Us</h1>
        </div>
    </header>
    <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Welcome to Grocery Gateway!</h2>
            <p className="mb-4">
                At Grocery Gateway, we're passionate about providing fresh and high-quality groceries to our customers. Our mission is to make grocery shopping convenient and enjoyable for everyone. We strive to offer a wide selection of products, excellent customer service, and seamless delivery options.
            </p>
            <p className="mb-4">
                Founded in 1997, Grocery Gateway has become a trusted name in online grocery shopping in Canada. With over 20 years of experience in the industry, our team is dedicated to delivering excellence in every aspect of our service.
            </p>
            <p>
                At Grocery Gateway, we believe in providing our customers with the best shopping experience possible. We are committed to offering fresh products, competitive prices, and reliable delivery services. Our goal is to make grocery shopping hassle-free and enjoyable for our customers.
            </p>
        </section>
        <section>
            <h2 className="text-xl font-bold mb-4">Join Us</h2>
            <p className="mb-4">
                Join the Grocery Gateway community today and experience the convenience of online grocery shopping. Whether you're a busy professional, a parent on the go, or anyone in between, Grocery Gateway has something for everyone!
            </p>
        </section>
    </main>
    <footer className="bg-green-500 text-white py-4 text-center">
        <p>Sincerely,</p>
        <p>John Smith<br/>Founder, Grocery Gateway</p>
    </footer>
    </div>
  );
};

export default AboutPage;
