import { notFound } from "next/navigation";
import Comments from "../../components/comments";

const posts = {
  "gentle-cleanser": { title: "Gentle Cleanser", content: "Start your skincare routine with a gentle cleanser. It removes dirt, oil, and makeup without stripping your skin of its natural moisture. Look for cleansers with ingredients like glycerin or ceramides. A good cleanser sets the foundation for the rest of your skincare routine, ensuring your skin is clean and prepped for the next steps. Why It's Important:Cleansers are essential for removing impurities that can clog pores and lead to breakouts. A gentle formula ensures your skin's natural barrier remains intact, preventing dryness and irritation. Recommended Product: Cetaphil Gentle Skin Cleanser",
    image:"/image/cleanser.jpeg",

   },


  "exfoliating-scrub": { title: "Exfoliating Scrub", content: "Exfoliation helps remove dead skin cells, leaving your skin smooth and refreshed. Use a scrub with fine particles or opt for a chemical exfoliant with AHAs or BHAs. This step not only improves skin texture but also helps other products penetrate better, making them more effective. Why It's Important:Regular exfoliation prevents dullness, promotes cell turnover, and can help reduce the appearance of acne scars and hyperpigmentation. Recommended Product: Paula’s Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    image:"/image/scrub.jpeg",

  },


  "hydrating-toner": { title: "Hydrating Toner", content: "A toner restores your skin’s pH balance and provides an extra layer of hydration. Choose alcohol-free toners with soothing ingredients like rose water or hyaluronic acid. Hydrating toners can also help calm irritation and prep your skin for serums and moisturizers. Why It's Important:Toners act as a bridge between cleansing and moisturizing, ensuring your skin stays balanced and ready for deeper hydration. Recommended Product: Thayers Witch Hazel Alcohol-Free Toner",
    image:"/image/intro3.jpeg",
   },


  "vitamin-c-serum": { title: "Vitamin C Serum", content: "This powerhouse antioxidant brightens your skin, evens out skin tone, and protects against environmental damage. Use it in the morning for the best results. Consistent use of Vitamin C can help fade dark spots and enhance your natural glow. Why It's Important:Vitamin C boosts collagen production, protects against sun damage, and gives your skin a radiant, youthful look. Recommended Product: TruSkin Vitamin C Serum",
    image:"/image/vitamin.jpeg",
   },


  "hyaluronic-acid-serum": { title: "Hyaluronic Acid Serum", content: "To keep your skin hydrated and plump, incorporate a hyaluronic acid serum into your routine. It helps retain moisture and reduces the appearance of fine lines. This lightweight serum works well under makeup and pairs perfectly with other hydrating products. Why It's Important:Hyaluronic acid holds up to 1,000 times its weight in water, making it a key ingredient for maintaining skin’s moisture levels. Recommended Product: The Ordinary Hyaluronic Acid 2% + B5",
    image:"/image/serum.jpeg",
   },


  "niacinamide-serum": { title: "Niacinamide Serum", content: "Niacinamide is a versatile ingredient that reduces redness, minimizes pores, and strengthens your skin barrier. It’s suitable for all skin types. Regular use can improve skin texture, balance oil production, and even out skin tone over time. Why It's Important:Niacinamide enhances skin’s resilience and can also help reduce the appearance of blemishes and pigmentation. Recommended Product: The Ordinary Niacinamide 10% + Zinc 1%",
    image:"/image/niacinimide.jpeg",
   },

  "moisturizer": { title: "Moisturizer", content: "A good moisturizer locks in hydration and keeps your skin soft and supple. Choose one that suits your skin type, whether it’s gel-based for oily skin or cream-based for dry skin. A high-quality moisturizer ensures your skin stays nourished throughout the day or night. Why It's Important:Moisturizers prevent water loss, protect your skin barrier, and ensure long-lasting hydration. Recommended Product: CeraVe Moisturizing Cream",
    image:"/image/moisturizer.jpeg",
   },


  "eye-cream": { title: "Eye Cream", content: "The delicate skin around your eyes needs extra care. Use an eye cream to reduce puffiness, dark circles, and fine lines. Look for ingredients like caffeine for de-puffing and peptides for anti-aging benefits. Why It's Important:Eye creams address specific concerns like crow’s feet and dark circles, keeping your eye area looking fresh and youthful. Recommended Product: Kiehl’s Creamy Eye Treatment with Avocado",
    image:"/image/intro5.jpeg",
   },


  "retinol": { title: "Retinol", content: "Retinol is a potent ingredient for anti-aging. It boosts collagen production, reduces wrinkles, and improves skin texture. Start with a low concentration to avoid irritation. Over time, retinol can transform your skin, making it smoother and more youthful-looking. Why It's Important:Retinol accelerates skin renewal and is proven to reduce signs of aging and improve overall skin clarity. Recommended Product: RoC Retinol Correxion Night Cream",
    image:"/image/intro1.jpeg",
   },


  "sunscreen": { title: "Sunscreen", content: "Sunscreen is non-negotiable. Protect your skin from harmful UV rays by using a broad-spectrum SPF 30 or higher every day, even when indoors. Sunscreen prevents premature aging and reduces the risk of skin cancer. Why It's Important:Daily use of sunscreen shields your skin from UV damage, the primary cause of wrinkles and hyperpigmentation. Recommended Product: La Roche-Posay Anthelios Melt-In Milk Sunscreen SPF 60",
    image:"/image/sunscreen.jpeg",
   },


  "face-mask": { title: "Face Mask", content: "Indulge in a weekly face mask to target specific skin concerns, whether it’s hydration, brightening, or detoxifying. Sheet masks or clay masks are great options. Masks provide a concentrated boost of nutrients and can be a relaxing self-care ritual. Why It's Important:Face masks deliver targeted treatments, leaving your skin refreshed and rejuvenated in just a few minutes. Recommended Product: GlamGlow Supermud Clearing Treatment",
    image:"/image/mask.jpeg",
   },


  "lip-balm": { title: "Lip Balm", content: "Don’t forget your lips! Keep them soft and hydrated with a nourishing lip balm, especially during colder months. Ingredients like shea butter, beeswax, and ceramides work wonders to lock in moisture and repair dry lips. Why It's Important:Hydrated lips enhance your overall appearance and prevent painful cracking or dryness. Recommended Product: Laneige Lip Sleeping Mask",
    image:"/image/lip.jpeg",
   },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return notFound();
  }

  return (
    <div className="p-8 text-center grid place-items-center">
      <h1 className="text-3xl font-serif  "><u>{post.title}:</u></h1>
        <img className="h-[200px] my-6 " src={post.image}></img>
      <p className="text-gray-700 mb-6">{post.content}</p>
    
      <Comments />
    </div>
  );
}
