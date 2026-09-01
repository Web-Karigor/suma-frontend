export type OfferTable = {
  title?: string;
  headers: string[];
  rows: string[][];
};

export type OfferDetailsData = {
  title: string;
  heroImage: string;
  breadcrumbs: { label: string; href?: string }[];
  tables?: OfferTable[] | null;
  cta?: { label: string; href: string } | null;
  contentHtml: string;
};

export const offerDetails: OfferDetailsData = {
  title: "Best rate on the base fare of domestic flights",
  heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Promotions", href: "/offer-details" },
    { label: "Best rate on the base fare of domestic flights" },
  ],
  tables: [
    {
      headers: ["Offer", "Campaign Period", "Coupon Code", "Applicable Users"],
      rows: [
        [
          "Best rate on the base fare of domestic flights",
          "1 Sep, 2024 to 31 Oct, 2024",
          "SAVE30",
          "All Users",
        ],
      ],
    },
    {
      title: "How to avail this offer?",
      headers: ["Step 1", "Step 2", "Step 3"],
      rows: [
        [
          "Search flight of your choice and click on the Book Now button.",
          "Fill up your information and apply the coupon code in the coupon box.",
          "Select your bin number, complete payment, and get the discounted fare.",
        ],
      ],
    },
  ],
  cta: {
    label: "TRAVEL NOW",
    href: "/contact",
  },
  contentHtml: `<h2>Terms &amp; Conditions</h2>
<ul>
  <li>This offer is valid for bookings made between <strong>1 Sep, 2024</strong> and <strong>31 Oct, 2024</strong>.</li>
  <li>Discount applies only to the base fare. Airport taxes, fees, and surcharges are not included.</li>
  <li>Use coupon code <strong>SAVE30</strong> at checkout to avail this offer.</li>
  <li>Offer is valid for all domestic routes within Bangladesh.</li>
  <li>Discount cannot be combined with other promotional offers or vouchers.</li>
  <li>Cancellation and date change charges as per airline policy will apply.</li>
  <li>Seats are subject to availability at the time of booking.</li>
  <li>Full payment must be made at the time of booking to confirm the reservation.</li>
</ul>
<h2>Frequently Asked Question</h2>
<p><strong>How do I apply the coupon?</strong></p>
<p>Search your flight, click Book Now, and enter <strong>SAVE30</strong> in the coupon box before payment.</p>
<p><strong>Can I use this offer with other discounts?</strong></p>
<p>No. This coupon cannot be combined with other promotional offers or vouchers.</p>
<p><strong>Who can use this offer?</strong></p>
<p>This offer is available to all users for eligible domestic flight bookings.</p>`,
};
