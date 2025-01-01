import React from "react";
import Link from "next/link";


const posts = [
  { slug: "gentle-cleanser", title: "Gentle Cleanser", desc: "Start your skincare routine with a gentle cleanser. It removes dirt, oil, and makeup.",  image:"/image/cleanser.jpeg",
   },
  { slug: "exfoliating-scrub", title: "Exfoliating Scrub", desc: "Exfoliation helps remove dead skin cells, leaving your skin smooth and refreshed.", image:"/image/scrub.jpeg", },
  { slug: "hydrating-toner", title: "Hydrating Toner", desc: "A toner restores your skin’s pH balance and provides an extra layer of hydration.",  image:"/image/intro3.jpeg", },
  { slug: "vitamin-c-serum", title: "Vitamin C Serum", desc: "This powerhouse antioxidant brightens your skin, evens out skin tone, and protects", image:"/image/vitamin.jpeg", },
  { slug: "hyaluronic-acid-serum", title: "Hyaluronic Acid Serum", desc: "To keep your skin hydrated and plump, incorporate a hyaluronic acid serum into your routine.", image:"/image/serum.jpeg", },
  { slug: "niacinamide-serum", title: "Niacinamide Serum", desc: "Niacinamide is a versatile ingredient that reduces redness.", image:"/image/niacinimide.jpeg", },


  { slug: "moisturizer", title: "Moisturizer", desc: "A good moisturizer locks in hydration and keeps your skin soft and supple.",    image:"/image/moisturizer.jpeg", },
  { slug: "eye-cream", title: "Eye Cream", desc: "The delicate skin around your eyes needs extra care. Use an eye cream to reduce puffiness, dark circles. ", image:"/image/intro5.jpeg", },
  { slug: "retinol", title: "Retinol", desc: "Retinol is a potent ingredient for anti-aging. It boosts collagen production, reduces wrinkles.",  image:"/image/intro1.jpeg", },
  { slug: "sunscreen", title: "Sunscreen", desc: "Sunscreen is non-negotiable. Protect your skin from harmful UV rays.",   image:"/image/sunscreen.jpeg", },
  { slug: "face-mask", title: "Face Mask", desc: "Indulge in a weekly face mask to target specific skin concerns, whether it’s hydration, brightening.",  image:"/image/mask.jpeg", },
  { slug: "lip-balm", title: "Lip Balm", desc: "Don’t forget your lips! Keep them soft and hydrated with a nourishing lip balm." , image:"/image/lip.jpeg",},
];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold font-serif text-center ">12 Skincare Products You Need for a Radiant Glow</h1>
      <p className="text-center text-pink-800 mx-4 mb-8 mt-2">Taking care of your skin is essential for maintaining a healthy and radiant complexion. With so many products on the market, finding the right ones can be overwhelming. To make it easier, here are 12 must-have skincare products to elevate your routine:</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="block p-4 border rounded bg-pink-200 shadow-sm hover:shadow-md">
            <img className="h-[200px] block mx-auto rounded-xl  my-6 " src={post.image}></img>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}