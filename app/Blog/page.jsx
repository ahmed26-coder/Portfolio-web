const Page = () => {
    return (
      <div className="w-full max-w-[1250px] mx-auto my-10 mt-[25%] sm:mt-[5%] space-y-10 px-5">
        <div>
          <h1 className="text-3xl font-bold text-center sm:text-left">
            🚀 How to Improve Your Site's Performance in Next.js | A Practical Guide
          </h1>
          <h2 className="text-2xl font-bold mt-5 text-center sm:text-left">🔹 Introduction</h2>
          <p className="text-[#666666] sm:pl-5">
            Site performance is one of the most important factors affecting user experience and your search engine ranking. 
            If you're using Next.js, there are many ways you can easily improve your site's speed and performance. 
            In this article, I'll share best practices for making your site faster and more efficient.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold">🔥 1. Use Image Optimization in Next.js</h2>
          <p className="text-[#666666] sm:pl-5">
            One of the most powerful features in Next.js is next/image, which provides automatic image optimization, 
            such as auto-zooming, lazy loading, and modern image formats (WebP).
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold">🔥 2. Enable lazy loading for components</h2>
          <p className="text-[#666666] sm:pl-5">
            If you don't need to load some components initially, use Dynamic Import to improve performance and reduce page load time.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold">🔥 3. Reduce JavaScript size using Tree Shaking</h2>
          <p className="text-[#666666] sm:pl-5">
            Next.js does Tree Shaking automatically, but make sure you don't import entire libraries if you only need some functionality from them.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold">🔥 4. Use getServerSideProps and getStaticProps intelligently</h2>
          <p className="text-[#666666] sm:pl-5">
            Use getStaticProps if the content doesn't change often (e.g., articles).
          </p>
          <p className="text-[#666666] sm:pl-5">
            Use getServerSideProps if you need to fetch data on every request.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold">🔥 5. Enable Gzip and Brotli compression in Next.js</h2>
          <p className="text-[#666666] sm:pl-5">
            If you host your website on Vercel or Netlify, compression is enabled by default. 
            However, if you're using Nginx or Apache, make sure to enable Gzip or Brotli to compress files before sending them to your browser.
          </p>
        </div>
      </div>
    );
  };
  
  export default Page;
  