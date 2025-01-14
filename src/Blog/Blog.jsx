

const Blog = () => {
   return (
      <div className="container mx-auto mt-5 px-3">
         <header className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">Travel Guru Private Blog!</h1>
            <p className="text-sm mt-2 text-gray-500 font-light">Discover the latest travel tips, destination guides, and adventure stories to inspire your next journey.</p>
         </header>
         <section className="blog-content mt-6 md:mt-10 flex justify-center">
            <div>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Top 10 Hidden Gems Around the World</h2>
                  <p className="text-gray-300">Explore some of the most beautiful and lesser-known destinations that you must visit.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">How to Travel on a Budget</h2>
                  <p className="text-gray-300">Learn tips and tricks to make the most of your travel budget without compromising on experiences.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Adventure Travel: What You Need to Know</h2>
                  <p className="text-gray-300">Get ready for your next adventure with our comprehensive guide on adventure travel.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Cultural Experiences You Can't Miss</h2>
                  <p className="text-gray-300">Immerse yourself in unique cultural experiences around the globe.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Sustainable Travel Tips</h2>
                  <p className="text-gray-300">Learn how to travel sustainably and reduce your environmental impact.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Family Travel: Making Memories</h2>
                  <p className="text-gray-300">Discover tips for planning a memorable family vacation.</p>
               </article>
               <article className="mb-5 border p-2 rounded">
                  <h2 className="text-2xl text-blue-300 font-semibold">Solo Travel: Finding Yourself</h2>
                  <p className="text-gray-300">Embrace the journey of solo travel and find yourself along the way.</p>
               </article>
            </div>
         </section>
      </div>
   );
};

export default Blog;