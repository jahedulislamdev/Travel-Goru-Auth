const News = () => {
   const newsArticles = [
      {
         title: 'Top 10 Must-Visit Destinations in 2023',
         content: 'Discover the top 10 must-visit destinations for 2023, from tropical paradises to bustling cities...',
         date: 'October 10, 2023'
      },
      {
         title: 'Travel Tips: How to Pack Light for Your Next Trip',
         content: 'Learn how to pack light and efficiently for your next trip with these expert travel tips...',
         date: 'October 9, 2023'
      },
      {
         title: 'Cultural Festivals Around the World',
         content: 'Explore the most vibrant cultural festivals around the world that you should add to your travel bucket list...',
         date: 'October 8, 2023'
      },
      {
         title: 'The Best Hiking Trails in Europe',
         content: 'Discover the best hiking trails in Europe, from the Alps to the Pyrenees...',
         date: 'October 7, 2023'
      },
      {
         title: 'A Guide to Street Food in Asia',
         content: 'Explore the diverse and delicious street food options available throughout Asia...',
         date: 'October 6, 2023'
      },
      {
         title: 'Luxury Travel on a Budget',
         content: 'Learn how to experience luxury travel without breaking the bank...',
         date: 'October 5, 2023'
      }
   ];

   return (
      <div className="p-3">
         <h1 className="text-4xl text-center mb-5 font-semibold text-blue-300">News</h1>
         {newsArticles.map((article, index) => (
            <div key={index} className="news-article p-5 mb-4 rounded border border-collapse">
               <h2 className="text-2xl font-bold text-blue-200">{article.title}</h2>
               <p className="text-gray-200 font-light"><small>{article.date}</small></p>
               <p className="text-gray-200 font-normal">{article.content}</p>
            </div>
         ))}
      </div>
   );
};

export default News;